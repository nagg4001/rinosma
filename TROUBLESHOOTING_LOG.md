# トラブルシューティングログ (2025-11-29)

## 概要
Dependabotアラートの解消作業中に発生した「Gitの履歴乖離」および「認証エラー」の解決手順を記録します。

## 発生した問題と対応

### 1. Git履歴の乖離 (`fatal: refusing to merge unrelated histories`)
- **原因**: ホームディレクトリ (`/Users/nagayamadaisuke`) が誤ってGitリポジトリとして初期化されており、それが `rinosma` リモートに紐付いていたため、本来のプロジェクトフォルダと履歴が整合しませんでした。
- **対応**:
  1. ホームディレクトリの `.git` を削除（Git管理解除）。
  2. プロジェクトフォルダ (`/Users/nagayamadaisuke/開発/rinosma`) で `git init` し直し、リモートを再設定。
  3. `git pull origin main --allow-unrelated-histories` で強制的に履歴を統合。

### 2. 認証エラー (`Authentication failed`, プロンプトが出ない)
- **原因**: `.git/config` 内のリモートURLに、無効になった古いパーソナルアクセストークンが埋め込まれていました（例: `https://user:token@github.com/...`）。これにより、新しいパスワードを入力する画面が出ずに即座にエラーとなっていました。
- **対応**:
  1. `git remote remove origin` で設定を削除。
  2. `git remote add origin https://github.com/nagg4001/rinosma.git` で、トークンを含まない標準的なURLで再登録。
  3. これにより、プッシュ時に正しくユーザー名とパスワード（トークン）の入力が求められるようになりました。

### 3. 脆弱性の修正 (`npm audit`)
- **対応**:
  - `npm audit fix` を実行し、自動修正可能なものを更新。
  - **High Severity (`nth-check`)**: `react-scripts` 依存の根深い問題だったため、`package.json` に `overrides` 設定を追加して強制的に修正版 (`^2.0.1`) を適用しました。

## 今後のための参照コマンド

### リモートURLの確認と修正
```bash
# 現在の設定確認
git remote -v

# リモートの再設定（認証トラブル時）
git remote remove origin
git remote add origin https://github.com/nagg4001/rinosma.git
```

### 認証情報のクリア（Mac）
```bash
# キーチェーンから削除（どうしても認証が通らない時）
printf "protocol=https\nhost=github.com\n" | git credential-osxkeychain erase
```

### 依存関係の強制修正（Overrides）
`package.json`:
```json
"overrides": {
  "nth-check": "^2.0.1"
}
```
