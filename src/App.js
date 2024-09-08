import React, { useState, useMemo } from 'react';
import { Box, Heading, Select, FormControl, FormLabel, Text, Input, Alert, AlertIcon } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';

const iPhoneData = {
  "iPhone8": {
    "A": { "256GB": 15300, "128GB": 14400, "64GB": 14000 },
    "B": { "256GB": 4400, "128GB": 3700, "64GB": 2900 },
    "C": { "256GB": 3400, "128GB": 2200, "64GB": 1500 },
    "D": { "256GB": 2400, "128GB": 1200, "64GB": 500 }
  },
  "iPhone8Plus": {
    "A": { "256GB": 16800, "128GB": 16000, "64GB": 15200 },
    "B": { "256GB": 9000, "128GB": 7500, "64GB": 6600 },
    "C": { "256GB": 4600, "128GB": 4100, "64GB": 3900 },
    "D": { "256GB": 2600, "128GB": 2100, "64GB": 1900 }
  },
  "iPhoneX": {
    "A": { "256GB": 20700, "128GB": 18900 },
    "B": { "256GB": 9400, "128GB": 5800 },
    "C": { "256GB": 3400, "128GB": 2300 },
    "D": { "256GB": 2400, "128GB": 1300 }
  },
  "iPhoneXS": {
    "A": { "512GB": 27900, "256GB": 25200, "64GB": 21600 },
    "B": { "512GB": 14100, "256GB": 10800, "64GB": 6500 },
    "C": { "512GB": 9500, "256GB": 6100, "64GB": 3200 },
    "D": { "512GB": 3500, "256GB": 3100, "64GB": 1200 }
  },
  "iPhoneXSMax": {
    "A": { "512GB": 38000, "256GB": 37000, "64GB": 33000 },
    "B": { "512GB": 18400, "256GB": 15200, "64GB": 13500 },
    "C": { "512GB": 11400, "256GB": 8700, "64GB": 7600 },
    "D": { "512GB": 6400, "256GB": 3700, "64GB": 2600 }
  },
  "iPhoneXR": {
    "A": { "256GB": 24300, "128GB": 22500, "64GB": 20700 },
    "B": { "256GB": 12200, "128GB": 8500, "64GB": 7200 },
    "C": { "256GB": 7000, "128GB": 5800, "64GB": 4900 },
    "D": { "256GB": 3000, "128GB": 2300, "64GB": 1900 }
  },
  "iPhone11": {
    "A": { "256GB": 37000, "128GB": 35000, "64GB": 31000 },
    "B": { "256GB": 17500, "128GB": 13900, "64GB": 12800 },
    "C": { "256GB": 14400, "128GB": 12000, "64GB": 9600 },
    "D": { "256GB": 6400, "128GB": 4000, "64GB": 3600 }
  },
  "iPhone11Pro": {
    "A": { "512GB": 48000, "256GB": 42700, "64GB": 38000 },
    "B": { "512GB": 26000, "256GB": 22100, "64GB": 17000 },
    "C": { "512GB": 15400, "256GB": 14700, "64GB": 11200 },
    "D": { "512GB": 15000, "256GB": 12000, "64GB": 10000 }
  },
  "iPhone11ProMax": {
    "A": { "512GB": 55000, "256GB": 52000, "64GB": 44000 },
    "B": { "512GB": 34200, "256GB": 28400, "64GB": 24700 },
    "C": { "512GB": 25500, "256GB": 23100, "64GB": 16800 },
    "D": { "512GB": 17000, "256GB": 15000, "64GB": 13000 }
  },
  "iPhoneSE2": {
    "A": { "256GB": 18400, "128GB": 16800, "64GB": 15200 },
    "B": { "256GB": 9200, "128GB": 6500, "64GB": 5500 },
    "C": { "256GB": 4600, "128GB": 4300, "64GB": 3400 },
    "D": { "256GB": 2600, "128GB": 2800, "64GB": 1400 }
  },
  "iPhone12mini": {
    "A": { "256GB": 40000, "128GB": 37000, "64GB": 32000 },
    "B": { "256GB": 23100, "128GB": 20000, "64GB": 16000 },
    "C": { "256GB": 13600, "128GB": 12000, "64GB": 9100 },
    "D": { "256GB": 8600, "128GB": 7000, "64GB": 4100 }
  },
  "iPhone12": {
    "A": { "256GB": 44100, "128GB": 36000, "64GB": 33300 },
    "B": { "256GB": 28800, "128GB": 23700, "64GB": 19500 },
    "C": { "256GB": 18400, "128GB": 15400, "64GB": 11200 },
    "D": { "256GB": 10400, "128GB": 7400, "64GB": 4200 }
  },
  "iPhone12Pro": {
    "A": { "512GB": 54000, "256GB": 52200, "128GB": 50800 },
    "B": { "512GB": 40500, "256GB": 37300, "128GB": 33000 },
    "C": { "512GB": 26200, "256GB": 21400, "128GB": 19600 },
    "D": { "512GB": 14200, "256GB": 13400, "128GB": 11600 }
  },
  "iPhone12ProMax": {
    "A": { "512GB": 74000, "256GB": 71000, "128GB": 66000 },
    "B": { "512GB": 48400, "256GB": 46600, "128GB": 43500 },
    "C": { "512GB": 36000, "256GB": 32000, "128GB": 30600 },
    "D": { "512GB": 21000, "256GB": 17000, "128GB": 15600 }
  },
  "iPhoneSE3": {
    "A": { "256GB": 38200, "128GB": 34300, "64GB": 32600 },
    "B": { "256GB": 33400, "128GB": 21300, "64GB": 19600 },
    "C": { "256GB": 21600, "128GB": 18100, "64GB": 14000 },
    "D": { "256GB": 11600, "128GB": 9100, "64GB": 7000 }
  },
  "iPhone13mini": {
    "A": { "512GB": 86300, "256GB": 78400, "128GB": 62100 },
    "B": { "512GB": 43800, "256GB": 37200, "128GB": 32800 },
    "C": { "512GB": 27900, "256GB": 24600, "128GB": 20800 },
    "D": { "512GB": 17900, "256GB": 14600, "128GB": 10800 }
  },
  "iPhone13": {
    "A": { "512GB": 77400, "256GB": 66400, "128GB": 58400 },
    "B": { "512GB": 51600, "256GB": 47000, "128GB": 40100 },
    "C": { "512GB": 34800, "256GB": 32300, "128GB": 26400 },
    "D": { "512GB": 21800, "256GB": 19300, "128GB": 16400 }
  },
  "iPhone13Pro": {
    "A": { "1TB": 111600, "512GB": 102600, "256GB": 91300, "128GB": 84700 },
    "B": { "1TB": 77600, "512GB": 60700, "256GB": 53000, "128GB": 49900 },
    "C": { "1TB": 39200, "512GB": 33000, "256GB": 31200, "128GB": 25800 },
    "D": { "1TB": 29200, "512GB": 23000, "256GB": 21200, "128GB": 15800 }
  },
  "iPhone13ProMax": {
    "A": { "1TB": 112200, "512GB": 112600, "256GB": 108200, "128GB": 101700 },
    "B": { "1TB": 70600, "512GB": 66000, "256GB": 66100, "128GB": 53600 },
    "C": { "1TB": 47600, "512GB": 44800, "256GB": 37200, "128GB": 33600 },
    "D": { "1TB": 37600, "512GB": 34800, "256GB": 27200, "128GB": 23600 }
  },
  "iPhone14": {
    "A": { "512GB": 88800, "256GB": 83700, "128GB": 66400 },
    "B": { "512GB": 63200, "256GB": 64200, "128GB": 57600 },
    "C": { "512GB": 51000, "256GB": 46500, "128GB": 36000 },
    "D": { "512GB": 36000, "256GB": 31500, "128GB": 21000 }
  },
  "iPhone14Plus": {
    "A": { "512GB": 82800, "256GB": 73200, "128GB": 70500 },
    "B": { "512GB": 64400, "256GB": 61600, "128GB": 61200 },
    "C": { "512GB": 58300, "256GB": 47500, "128GB": 39200 },
    "D": { "512GB": 40300, "256GB": 32500, "128GB": 24200 }
  },
  "iPhone14Pro": {
    "A": { "1TB": 123200, "512GB": 116000, "256GB": 102400, "128GB": 91600 },
    "B": { "1TB": 94300, "512GB": 89200, "256GB": 82000, "128GB": 69100 },
    "C": { "1TB": 56700, "512GB": 52500, "256GB": 49700, "128GB": 39000 },
    "D": { "1TB": 41700, "512GB": 37500, "256GB": 34700, "128GB": 29000 }
  },
  "iPhone14ProMax": {
    "A": { "1TB": 142800, "512GB": 136000, "256GB": 116800, "128GB": 106400 },
    "B": { "1TB": 94700, "512GB": 91600, "256GB": 81700, "128GB": 76800 },
    "C": { "1TB": 71200, "512GB": 68000, "256GB": 58800, "128GB": 53200 },
    "D": { "1TB": 56200, "512GB": 53000, "256GB": 43800, "128GB": 38200 }
  }
}

const models = Object.keys(iPhoneData);
const ranks = ["A", "B", "C", "D"];

// 減額オプション
const deductionOptions = {
  frameScratch: [
    { label: "傷なし", value: 0 },
    { label: "小傷あり（2〜3箇所）", value: { 
        "iPhone8": 550, "iPhone8Plus": 550, "iPhoneX": 550, "iPhoneXS": 550, "iPhoneXSMax": 550, "iPhoneXR": 550, 
        "iPhone11": 880, "iPhone11Pro": 880, "iPhone11ProMax": 880, "iPhoneSE2": 550, "iPhone12mini": 880, "iPhone12": 880, 
        "iPhone12Pro": 880, "iPhone12ProMax": 880, "iPhoneSE3": 880, "iPhone13mini": 1100, "iPhone13": 1100, "iPhone13Pro": 1100, 
        "iPhone13ProMax": 1100, "iPhone14": 1320, "iPhone14Plus": 1320, "iPhone14Pro": 1320, "iPhone14ProMax": 1320 } 
    },
    { label: "目立つ傷あり（4〜5箇所）", value: { 
        "iPhone8": 880, "iPhone8Plus": 880, "iPhoneX": 880, "iPhoneXS": 1100, "iPhoneXSMax": 1100, "iPhoneXR": 1100, 
        "iPhone11": 1320, "iPhone11Pro": 1320, "iPhone11ProMax": 1320, "iPhoneSE2": 880, "iPhone12mini": 1320, "iPhone12": 1320, 
        "iPhone12Pro": 1650, "iPhone12ProMax": 1650, "iPhoneSE3": 1320, "iPhone13mini": 1650, "iPhone13": 1650, "iPhone13Pro": 1980, 
        "iPhone13ProMax": 1980, "iPhone14": 2200, "iPhone14Plus": 2200, "iPhone14Pro": 2200, "iPhone14ProMax": 2200 } 
    },
    { label: "傷多数あり", value: { 
        "iPhone8": 1100, "iPhone8Plus": 1100, "iPhoneX": 1100, "iPhoneXS": 1650, "iPhoneXSMax": 1650, "iPhoneXR": 1650, 
        "iPhone11": 1980, "iPhone11Pro": 2200, "iPhone11ProMax": 2200, "iPhoneSE2": 1100, "iPhone12mini": 2200, "iPhone12": 2200, 
        "iPhone12Pro": 2200, "iPhone12ProMax": 2200, "iPhoneSE3": 1980, "iPhone13mini": 2750, "iPhone13": 2750, "iPhone13Pro": 3300, 
        "iPhone13ProMax": 3300, "iPhone14": 3300, "iPhone14Plus": 3300, "iPhone14Pro": 4400, "iPhone14ProMax": 4400 } 
    }
  ],
  screenScratch: [
    { label: "傷なし", value: 0 },
    { label: "角度を変えると若干傷あり", value: { 
        "iPhone8": 330, "iPhone8Plus": 330, "iPhoneX": 880, "iPhoneXS": 880, "iPhoneXSMax": 1100, "iPhoneXR": 660, 
        "iPhone11": 660, "iPhone11Pro": 880, "iPhone11ProMax": 1100, "iPhoneSE2": 550, "iPhone12mini": 1100, "iPhone12": 1100, 
        "iPhone12Pro": 1320, "iPhone12ProMax": 1320, "iPhoneSE3": 660, "iPhone13mini": 1320, "iPhone13": 1320, "iPhone13Pro": 1650, 
        "iPhone13ProMax": 1650, "iPhone14": 1320, "iPhone14Plus": 1320, "iPhone14Pro": 2200, "iPhone14ProMax": 2200 } 
    },
    { label: "画面のやや目立つ傷あり（1〜3箇所）", value: { 
        "iPhone8": 550, "iPhone8Plus": 550, "iPhoneX": 1100, "iPhoneXS": 1100, "iPhoneXSMax": 1650, "iPhoneXR": 880, 
        "iPhone11": 1100, "iPhone11Pro": 1320, "iPhone11ProMax": 1650, "iPhoneSE2": 660, "iPhone12mini": 1650, "iPhone12": 1980, 
        "iPhone12Pro": 2200, "iPhone12ProMax": 2200, "iPhoneSE3": 880, "iPhone13mini": 2200, "iPhone13": 2200, "iPhone13Pro": 2750, 
        "iPhone13ProMax": 2750, "iPhone14": 2200, "iPhone14Plus": 2200, "iPhone14Pro": 2750, "iPhone14ProMax": 2750 } 
    },
    { label: "画面の目立つ傷あり（4〜5箇所）", value: { 
        "iPhone8": 660, "iPhone8Plus": 660, "iPhoneX": 1650, "iPhoneXS": 1650, "iPhoneXSMax": 2200, "iPhoneXR": 1320, 
        "iPhone11": 1320, "iPhone11Pro": 1760, "iPhone11ProMax": 3520, "iPhoneSE2": 880, "iPhone12mini": 3080, "iPhone12": 3300, 
        "iPhone12Pro": 3520, "iPhone12ProMax": 3520, "iPhoneSE3": 1320, "iPhone13mini": 3520, "iPhone13": 3520, "iPhone13Pro": 6600, 
        "iPhone13ProMax": 6600, "iPhone14": 3520, "iPhone14Plus": 3520, "iPhone14Pro": 7700, "iPhone14ProMax": 7700 } 
    },
    { label: "画面に多数の傷あり", value: { 
        "iPhone8": 1320, "iPhone8Plus": 1320, "iPhoneX": 3300, "iPhoneXS": 3300, "iPhoneXSMax": 4400, "iPhoneXR": 2640, 
        "iPhone11": 2640, "iPhone11Pro": 3520, "iPhone11ProMax": 4400, "iPhoneSE2": 1320, "iPhone12mini": 4400, "iPhone12": 5500, 
        "iPhone12Pro": 6600, "iPhone12ProMax": 7700, "iPhoneSE3": 2640, "iPhone13mini": 6600, "iPhone13": 6600, "iPhone13Pro": 9900, 
        "iPhone13ProMax": 9900, "iPhone14": 6600, "iPhone14Plus": 6600, "iPhone14Pro": 11000, "iPhone14ProMax": 11000 } 
    }
  ],
  networkLimitation: [
    { label: "ネットワーク利用制限⚪︎", value: 0 },
    { label: "ネットワーク利用制限△", value: { 
        "iPhone8": 1100, "iPhone8Plus": 1100, "iPhoneX": 1100, "iPhoneXS": 2200, "iPhoneXSMax": 2200, "iPhoneXR": 2200, 
        "iPhone11": 2200, "iPhone11Pro": 3300, "iPhone11ProMax": 3300, "iPhoneSE2": 1100, "iPhone12mini": 3300, "iPhone12": 3300, 
        "iPhone12Pro": 3300, "iPhone12ProMax": 3300, "iPhoneSE3": 3300, "iPhone13mini": 3300, "iPhone13": 3300, "iPhone13Pro": 4400, 
        "iPhone13ProMax": 4400, "iPhone14": 4400, "iPhone14Plus": 4400, "iPhone14Pro": 4400, "iPhone14ProMax": 4400 } 
    }
  ],
  cameraStain: [
    { label: "シミなし", value: 0 },
    { label: "シミあり（1〜2箇所）", value: { 
        "iPhone8": 550, "iPhone8Plus": 550, "iPhoneX": 550, "iPhoneXS": 550, "iPhoneXSMax": 550, "iPhoneXR": 550, 
        "iPhone11": 880, "iPhone11Pro": 880, "iPhone11ProMax": 880, "iPhoneSE2": 550, "iPhone12mini": 1100, "iPhone12": 1100, 
        "iPhone12Pro": 1100, "iPhone12ProMax": 1100, "iPhoneSE3": 880, "iPhone13mini": 1100, "iPhone13": 1100, "iPhone13Pro": 1650, 
        "iPhone13ProMax": 1650, "iPhone14": 1650, "iPhone14Plus": 1650, "iPhone14Pro": 1650, "iPhone14ProMax": 1650 } 
    },
    { label: "シミあり（3〜5箇所）", value: { 
        "iPhone8": 880, "iPhone8Plus": 880, "iPhoneX": 880, "iPhoneXS": 880, "iPhoneXSMax": 1100, "iPhoneXR": 1100, 
        "iPhone11": 1320, "iPhone11Pro": 1320, "iPhone11ProMax": 1320, "iPhoneSE2": 880, "iPhone12mini": 1650, "iPhone12": 1650, 
        "iPhone12Pro": 1650, "iPhone12ProMax": 1650, "iPhoneSE3": 1320, "iPhone13mini": 1650, "iPhone13": 1650, "iPhone13Pro": 1980, 
        "iPhone13ProMax": 1980, "iPhone14": 2200, "iPhone14Plus": 2200, "iPhone14Pro": 2200, "iPhone14ProMax": 2200 } 
    },
    { label: "シミあり（5箇所以上）", value: { 
        "iPhone8": 1100, "iPhone8Plus": 1100, "iPhoneX": 1100, "iPhoneXS": 1650, "iPhoneXSMax": 1650, "iPhoneXR": 1650, 
        "iPhone11": 1980, "iPhone11Pro": 2200, "iPhone11ProMax": 2200, "iPhoneSE2": 1100, "iPhone12mini": 2200, "iPhone12": 2200, 
        "iPhone12Pro": 2200, "iPhone12ProMax": 2200, "iPhoneSE3": 1980, "iPhone13mini": 2750, "iPhone13": 2750, "iPhone13Pro": 3300, 
        "iPhone13ProMax": 3300, "iPhone14": 3300, "iPhone14Plus": 3300, "iPhone14Pro": 5500, "iPhone14ProMax": 5500 } 
    }
  ],
  malfunction: [
    { label: "故障なし", value: 0 },
    { label: "カメラ", value: { 
        "iPhone8": 880, "iPhone8Plus": 880, "iPhoneX": 1650, "iPhoneXS": 1650, "iPhoneXSMax": 2200, "iPhoneXR": 1650, 
        "iPhone11": 2200, "iPhone11Pro": 3300, "iPhone11ProMax": 3300, "iPhoneSE2": 1650, "iPhone12mini": 3300, "iPhone12": 3300, 
        "iPhone12Pro": 4400, "iPhone12ProMax": 4400, "iPhoneSE3": 3300, "iPhone13mini": 4400, "iPhone13": 4400, "iPhone13Pro": 8800, 
        "iPhone13ProMax": 8800, "iPhone14": 8800, "iPhone14Plus": 8800, "iPhone14Pro": 13200, "iPhone14ProMax": 13200 } 
    },
    { label: "ホームボタン", value: { 
        "iPhone8": 1100, "iPhone8Plus": 1100, "iPhoneSE2": 2200, "iPhoneSE3": 4400 } 
    },
    { label: "FaceID", value: { 
        "iPhoneX": 1650, "iPhoneXS": 2200, "iPhoneXSMax": 2200, "iPhoneXR": 2200, "iPhone11": 3300, "iPhone11Pro": 4400, 
        "iPhone11ProMax": 4400, "iPhone12mini": 5500, "iPhone12": 5500, "iPhone12Pro": 6600, "iPhone12ProMax": 6600, "iPhone13mini": 16500, 
        "iPhone13": 16500, "iPhone13Pro": 22000, "iPhone13ProMax": 22000, "iPhone14": 22000, "iPhone14Plus": 22000, "iPhone14Pro": 33000, 
        "iPhone14ProMax": 33000 } 
    }
  ],
  truetone: [
    { label: "あり", value: 0 },
    { label: "なし", value: { 
        "iPhone8": 1100, "iPhone8Plus": 1100, "iPhoneX": 1100, "iPhoneXS": 1100, "iPhoneXSMax": 1100, "iPhoneXR": 1100, 
        "iPhone11": 1650, "iPhone11Pro": 1650, "iPhone11ProMax": 1650, "iPhoneSE2": 1100, "iPhone12mini": 2200, "iPhone12": 2200, 
        "iPhone12Pro": 2200, "iPhone12ProMax": 2200, "iPhoneSE3": 1650, "iPhone13mini": 3300, "iPhone13": 3300, "iPhone13Pro": 3300, 
        "iPhone13ProMax": 3300, "iPhone14": 4400, "iPhone14Plus": 4400, "iPhone14Pro": 4400, "iPhone14ProMax": 4400 } 
    }
  ]
};

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Alert status="error" onClick={resetErrorBoundary}>
      <AlertIcon />
      エラーが発生しました: {error.message}
    </Alert>
  );
}

function App() {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedRank, setSelectedRank] = useState(ranks[0]);
  const [selectedCapacity, setSelectedCapacity] = useState(Object.keys(iPhoneData[models[0]][ranks[0]])[0]);
  const [deductions, setDeductions] = useState({
    frameScratch: 0,
    screenScratch: 0,
    networkLimitation: 0,
    cameraStain: 0,
    malfunction: 0,
    truetone: 0
  });

  const appraisalPrice = useMemo(() => {
    const basePrice = iPhoneData[selectedModel][selectedRank][selectedCapacity];
    const totalDeduction = Object.values(deductions).reduce((sum, value) => sum + value, 0);
    return Math.max(0, basePrice - totalDeduction);
  }, [selectedModel, selectedRank, selectedCapacity, deductions]);

  const handleDeductionChange = (key, value) => {
    setDeductions((prev) => ({ ...prev, [key]: Number(value) }));
  };

  const renderSelect = (label, options, deductionKey) => (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select
        placeholder="選択してください"
        onChange={(e) => {
          const selectedOption = options.find((option) => option.label === e.target.value) || options[0];
          const deductionValue =
            typeof selectedOption.value === 'object'
              ? selectedOption.value[selectedModel] || 0
              : selectedOption.value;
          handleDeductionChange(deductionKey, deductionValue);
        }}
      >
        {options.map((option) => (
          <option key={option.label} value={option.label}>
            {option.label}
          </option>
        ))}
      </Select>
      <Input
        type="number"
        value={deductions[deductionKey]}
        onChange={(e) => handleDeductionChange(deductionKey, e.target.value)}
      />
    </FormControl>
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Box maxW="2xl" mx="auto" p={6} borderWidth="1px" borderRadius="md" boxShadow="md">
        <Heading as="h2" size="xl" textAlign="center" mb={4}>
          iPhone査定アプリ
        </Heading>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={4}>
          <FormControl>
            <FormLabel>iPhoneモデル</FormLabel>
            <Select
              onChange={(e) => {
                setSelectedModel(e.target.value);
                setSelectedCapacity(Object.keys(iPhoneData[e.target.value][selectedRank])[0]);
              }}
            >
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>ランク</FormLabel>
            <Select onChange={(e) => setSelectedRank(e.target.value)}>
              {ranks.map((rank) => (
                <option key={rank} value={rank}>
                  {rank}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>容量</FormLabel>
            <Select onChange={(e) => setSelectedCapacity(e.target.value)}>
              {Object.keys(iPhoneData[selectedModel][selectedRank]).map((capacity) => (
                <option key={capacity} value={capacity}>
                  {capacity}
                </option>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box mt={4}>
          {renderSelect('フレームの傷', deductionOptions.frameScratch, 'frameScratch')}
          {renderSelect('画面の傷', deductionOptions.screenScratch, 'screenScratch')}
          {renderSelect('ネットワーク利用制限', deductionOptions.networkLimitation, 'networkLimitation')}
          {renderSelect('カメラのシミ', deductionOptions.cameraStain, 'cameraStain')}
          {renderSelect('故障箇所', deductionOptions.malfunction, 'malfunction')}
          {renderSelect('Truetone', deductionOptions.truetone, 'truetone')}
        </Box>
        <Box mt={6} textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" color="green.500">
            査定金額: ¥{appraisalPrice.toLocaleString()}
          </Text>
        </Box>
      </Box>
    </ErrorBoundary>
  );
}

export default App;