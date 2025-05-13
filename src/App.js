import React, { useState, useMemo } from 'react';
import { Box, Heading, Select, FormControl, FormLabel, Text, Input, Alert, AlertIcon } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';

export const iPhoneData = {
  iPhone8: {
    A: { "256GB": 11000, "128GB": 10000, "64GB": 9900 },
    B: { "256GB": 4400, "128GB": 3800, "64GB": 1900 },
    C: { "256GB": 2500, "128GB": 1400, "64GB": 1000 },
    D: { "256GB": 1500, "128GB": 900, "64GB": 500 },
  },
  iPhone8Plus: {
    A: { "256GB": 16200, "128GB": 14000, "64GB": 12000 },
    B: { "256GB": 6700, "128GB": 5800, "64GB": 5100 },
    C: { "256GB": 3800, "128GB": 3000, "64GB": 2300 },
    D: { "256GB": 2800, "128GB": 2000, "64GB": 1300 },
  },
  iPhoneX: {
    A: { "256GB": 17100, "64GB": 16200 },
    B: { "256GB": 10200, "64GB": 7900 },
    C: { "256GB": 3400, "64GB": 1900 },
    D: { "256GB": 2400, "64GB": 1400 },
  },
  iPhoneXS: {
    A: { "512GB": 25200, "256GB": 23400, "64GB": 21600 },
    B: { "512GB": 14800, "256GB": 11400, "64GB": 9900 },
    C: { "512GB": 6700, "256GB": 4600, "64GB": 3600 },
    D: { "512GB": 2700, "256GB": 1600, "64GB": 1100 },
  },
  iPhoneXSMax: {
    A: { "512GB": 36000, "256GB": 34000, "64GB": 30000 },
    B: { "512GB": 20100, "256GB": 19900, "64GB": 16100 },
    C: { "512GB": 9600, "256GB": 8700, "64GB": 7000 },
    D: { "512GB": 4600, "256GB": 3700, "64GB": 2000 },
  },
  iPhoneXR: {
    A: { "256GB": 20700, "128GB": 18900, "64GB": 17100 },
    B: { "256GB": 12300, "128GB": 9600, "64GB": 7200 },
    C: { "256GB": 7000, "128GB": 4800, "64GB": 4100 },
    D: { "256GB": 5000, "128GB": 2800, "64GB": 2100 },
  },
  iPhone11: {
    A: { "256GB": 35000, "128GB": 33000, "64GB": 28000 },
    B: { "256GB": 19300, "128GB": 17800, "64GB": 12900 },
    C: { "256GB": 13600, "128GB": 11200, "64GB": 10400 },
    D: { "256GB": 5600, "128GB": 5200, "64GB": 4400 },
  },
  iPhone11Pro: {
    A: { "512GB": 45000, "256GB": 40000, "64GB": 35000 },
    B: { "512GB": 26700, "256GB": 21400, "64GB": 16000 },
    C: { "512GB": 16100, "256GB": 13200, "64GB": 9600 },
    D: { "512GB": 10000, "256GB": 7000, "64GB": 5000 },
  },
  iPhone11ProMax: {
    A: { "512GB": 53000, "256GB": 49000, "64GB": 44000 },
    B: { "512GB": 35300, "256GB": 30300, "64GB": 26300 },
    C: { "512GB": 21700, "256GB": 19500, "64GB": 15000 },
    D: { "512GB": 15000, "256GB": 10000, "64GB": 8000 },
  },
  iPhoneSE2: {
    A: { "256GB": 16800, "128GB": 15200, "64GB": 13600 },
    B: { "256GB": 9900, "128GB": 6500, "64GB": 5800 },
    C: { "256GB": 5600, "128GB": 4800, "64GB": 3400 },
    D: { "256GB": 3600, "128GB": 3300, "64GB": 1400 },
  },
  iPhone12mini: {
    A: { "256GB": 36000, "128GB": 34000, "64GB": 29000 },
    B: { "256GB": 21400, "128GB": 17100, "64GB": 13600 },
    C: { "256GB": 10400, "128GB": 9500, "64GB": 6000 },
    D: { "256GB": 5400, "128GB": 4500, "64GB": 2000 },
  },
  iPhone12: {
    A: { "256GB": 39600, "128GB": 32000, "64GB": 31500 },
    B: { "256GB": 27300, "128GB": 21700, "64GB": 19500 },
    C: { "256GB": 16100, "128GB": 13300, "64GB": 9600 },
    D: { "256GB": 8100, "128GB": 5300, "64GB": 3600 },
  },
  iPhone12Pro: {
    A: { "512GB": 54100, "256GB": 52200, "128GB": 46500 },
    B: { "512GB": 37700, "256GB": 33200, "128GB": 29400 },
    C: { "512GB": 26400, "256GB": 21700, "128GB": 20200 },
    D: { "512GB": 14400, "256GB": 13700, "128GB": 12200 },
  },
  iPhone12ProMax: {
    A: { "512GB": 74000, "256GB": 71000, "128GB": 67000 },
    B: { "512GB": 52400, "256GB": 47900, "128GB": 44000 },
    C: { "512GB": 34000, "256GB": 30400, "128GB": 28900 },
    D: { "512GB": 19000, "256GB": 15400, "128GB": 11900 },
  },
  iPhoneSE3: {
    A: { "256GB": 40800, "128GB": 35000, "64GB": 34500 },
    B: { "256GB": 33200, "128GB": 21400, "64GB": 15800 },
    C: { "256GB": 15000, "128GB": 11700, "64GB": 7800 },
    D: { "256GB": 5000, "128GB": 2700, "64GB": 800 },
  },
  iPhone13mini: {
    A: { "512GB": 66000, "256GB": 57000, "128GB": 48000 },
    B: { "512GB": 43200, "256GB": 33200, "128GB": 26000 },
    C: { "512GB": 22900, "256GB": 20000, "128GB": 17200 },
    D: { "512GB": 12900, "256GB": 10000, "128GB": 7200 },
  },
  iPhone13: {
    A: { "512GB": 55800, "256GB": 45600, "128GB": 41600 },
    B: { "512GB": 41600, "256GB": 36100, "128GB": 33900 },
    C: { "512GB": 26200, "256GB": 24700, "128GB": 22500 },
    D: { "512GB": 13200, "256GB": 11700, "128GB": 12500 },
  },
  iPhone13Pro: {
    A: { "1TB": 83000, "512GB": 78000, "256GB": 73000, "128GB": 67000 },
    B: { "1TB": 59000, "512GB": 52500, "256GB": 47000, "128GB": 43900 },
    C: { "1TB": 40800, "512GB": 36800, "256GB": 33000, "128GB": 29200 },
    D: { "1TB": 30800, "512GB": 26800, "256GB": 23000, "128GB": 19200 },
  },
  iPhone13ProMax: {
    A: { "1TB": 93000, "512GB": 90000, "256GB": 84000, "128GB": 79000 },
    B: { "1TB": 65700, "512GB": 61100, "256GB": 59900, "128GB": 52600 },
    C: { "1TB": 52200, "512GB": 44800, "256GB": 39700, "128GB": 38400 },
    D: { "1TB": 32200, "512GB": 29800, "256GB": 24700, "128GB": 23400 },
  },
  iPhone14: {
    A: { "512GB": 80700, "256GB": 74700, "128GB": 57600 },
    B: { "512GB": 55800, "256GB": 49500, "128GB": 43500 },
    C: { "512GB": 39100, "256GB": 37400, "128GB": 31400 },
    D: { "512GB": 24100, "256GB": 22400, "128GB": 16400 },
  },
  iPhone14Plus: {
    A: { "512GB": 95000, "256GB": 83700, "128GB": 74700 },
    B: { "512GB": 60700, "256GB": 56500, "128GB": 52400 },
    C: { "512GB": 48000, "256GB": 41400, "128GB": 32400 },
    D: { "512GB": 30000, "256GB": 26400, "128GB": 17400 },
  },
  iPhone14Pro: {
    A: { "1TB": 104400, "512GB": 100800, "256GB": 96300, "128GB": 87300 },
    B: { "1TB": 79000, "512GB": 67300, "256GB": 63700, "128GB": 59000 },
    C: { "1TB": 55200, "512GB": 52000, "256GB": 43400, "128GB": 38500 },
    D: { "1TB": 45000, "512GB": 37000, "256GB": 28400, "128GB": 23500 },
  },
  iPhone14ProMax: {
    A: { "1TB": 119700, "512GB": 111600, "256GB": 102600, "128GB": 94500 },
    B: { "1TB": 88200, "512GB": 80700, "256GB": 74800, "128GB": 71500 },
    C: { "1TB": 62200, "512GB": 53200, "256GB": 51000, "128GB": 47200 },
    D: { "1TB": 42200, "512GB": 33200, "256GB": 36000, "128GB": 27200 },
  },
  iPhone15: { // Retained original due to unclear mapping in PDF for this model
    A: { "512GB": 97800, "256GB": 90900, "128GB": 77400 },
    B: { "512GB": 76500, "256GB": 69000, "128GB": 58200 },
    C: { "512GB": 54000, "256GB": 52200, "128GB": 45900 },
    D: { "512GB": 39000, "256GB": 37200, "128GB": 30900 },
  },
  iPhone15Plus: { // Retained original due to unclear mapping in PDF for this model
    A: { "512GB": 114000, "256GB": 102600, "128GB": 90900 },
    B: { "512GB": 79000, "256GB": 73200, "128GB": 63200 },
    C: { "512GB": 56900, "256GB": 54400, "128GB": 46700 },
    D: { "512GB": 38900, "256GB": 39400, "128GB": 31700 },
  },
  iPhone15Pro: { // Attempted updates based on PDF snippets [cite: 3]
    A: { "1TB": 124800, "512GB": 120800, "256GB": 110400, "128GB": 96200 },
    B: { "1TB": 100700, "512GB": 93200, "256GB": 83200, "128GB": 76500 },
    C: { "1TB": 71400, "512GB": 68800, "256GB": 64600, "128GB": 45000 },
    D: { "1TB": 41400, "512GB": 38800, "256GB": 44600, "128GB": 30000 },
  },
  iPhone15ProMax: { // Attempted updates based on PDF snippets [cite: 3]
    A: { "1TB": 143100, "512GB": 140400, "256GB": 132200 },
    B: { "1TB": 107200, "512GB": 97200, "256GB": 87300 },
    C: { "1TB": 82400, "512GB": 79000, "256GB": 71400 },
    D: { "1TB": 52400, "512GB": 45000, "256GB": 41400 },
  },
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
        "iPhone13ProMax": 1100, "iPhone14": 1320, "iPhone14Plus": 1320, "iPhone14Pro": 1320, "iPhone14ProMax": 1320,
        "iPhone15": 1320, "iPhone15Plus": 1320, "iPhone15Pro": 1320, "iPhone15ProMax": 1320
    } },
    { label: "目立つ傷あり（4〜5箇所）", value: { 
        "iPhone8": 880, "iPhone8Plus": 880, "iPhoneX": 880, "iPhoneXS": 1100, "iPhoneXSMax": 1100, "iPhoneXR": 1100, 
        "iPhone11": 1320, "iPhone11Pro": 1320, "iPhone11ProMax": 1320, "iPhoneSE2": 880, "iPhone12mini": 1320, "iPhone12": 1320, 
        "iPhone12Pro": 1650, "iPhone12ProMax": 1650, "iPhoneSE3": 1320, "iPhone13mini": 1650, "iPhone13": 1650, "iPhone13Pro": 1980, 
        "iPhone13ProMax": 1980, "iPhone14": 2200, "iPhone14Plus": 2200, "iPhone14Pro": 2200, "iPhone14ProMax": 2200,
        "iPhone15": 2200, "iPhone15Plus": 2200, "iPhone15Pro": 2200, "iPhone15ProMax": 2200
    } },
    { label: "傷多数あり", value: { 
        "iPhone8": 1100, "iPhone8Plus": 1100, "iPhoneX": 1100, "iPhoneXS": 1650, "iPhoneXSMax": 1650, "iPhoneXR": 1650, 
        "iPhone11": 1980, "iPhone11Pro": 2200, "iPhone11ProMax": 2200, "iPhoneSE2": 1100, "iPhone12mini": 2200, "iPhone12": 2200, 
        "iPhone12Pro": 2200, "iPhone12ProMax": 2200, "iPhoneSE3": 1980, "iPhone13mini": 2750, "iPhone13": 2750, "iPhone13Pro": 3300, 
        "iPhone13ProMax": 3300, "iPhone14": 3300, "iPhone14Plus": 3300, "iPhone14Pro": 4400, "iPhone14ProMax": 4400,
        "iPhone15": 3300, "iPhone15Plus": 3300, "iPhone15Pro": 4400, "iPhone15ProMax": 4400
    } }
  ],
  screenScratch: [
    { label: "傷なし", value: 0 },
    { label: "角度を変えると若干傷あり", value: { 
        "iPhone8": 330, "iPhone8Plus": 330, "iPhoneX": 880, "iPhoneXS": 880, "iPhoneXSMax": 1100, "iPhoneXR": 660, 
        "iPhone11": 660, "iPhone11Pro": 880, "iPhone11ProMax": 1100, "iPhoneSE2": 550, "iPhone12mini": 1100, "iPhone12": 1100, 
        "iPhone12Pro": 1320, "iPhone12ProMax": 1320, "iPhoneSE3": 660, "iPhone13mini": 1320, "iPhone13": 1320, "iPhone13Pro": 1650, 
        "iPhone13ProMax": 1650, "iPhone14": 1320, "iPhone14Plus": 1320, "iPhone14Pro": 2200, "iPhone14ProMax": 2200,
        "iPhone15": 2200, "iPhone15Plus": 2200, "iPhone15Pro": 2200, "iPhone15ProMax": 2200
    } },
    { label: "画面のやや目立つ傷あり（1〜3箇所）", value: { 
        "iPhone8": 550, "iPhone8Plus": 550, "iPhoneX": 1100, "iPhoneXS": 1100, "iPhoneXSMax": 1650, "iPhoneXR": 880, 
        "iPhone11": 1100, "iPhone11Pro": 1320, "iPhone11ProMax": 1650, "iPhoneSE2": 660, "iPhone12mini": 1650, "iPhone12": 1980, 
        "iPhone12Pro": 2200, "iPhone12ProMax": 2200, "iPhoneSE3": 880, "iPhone13mini": 2200, "iPhone13": 2200, "iPhone13Pro": 2750, 
        "iPhone13ProMax": 2750, "iPhone14": 2200, "iPhone14Plus": 2200, "iPhone14Pro": 2750, "iPhone14ProMax": 2750,
        "iPhone15": 4400, "iPhone15Plus": 4400, "iPhone15Pro": 5500, "iPhone15ProMax": 5500
    } },
    { label: "画面の目立つ傷あり（4〜5箇所）", value: { 
        "iPhone8": 660, "iPhone8Plus": 660, "iPhoneX": 1650, "iPhoneXS": 1650, "iPhoneXSMax": 2200, "iPhoneXR": 1320, 
        "iPhone11": 1320, "iPhone11Pro": 1760, "iPhone11ProMax": 3520, "iPhoneSE2": 880, "iPhone12mini": 3080, "iPhone12": 3300, 
        "iPhone12Pro": 3520, "iPhone12ProMax": 3520, "iPhoneSE3": 1320, "iPhone13mini": 3520, "iPhone13": 3520, "iPhone13Pro": 6600, 
        "iPhone13ProMax": 6600, "iPhone14": 3520, "iPhone14Plus": 3520, "iPhone14Pro": 7700, "iPhone14ProMax": 7700,
        "iPhone15": 8800, "iPhone15Plus": 8800, "iPhone15Pro": 9900, "iPhone15ProMax": 9900
    } },
    { label: "画面に多数の傷あり", value: { 
        "iPhone8": 1320, "iPhone8Plus": 1320, "iPhoneX": 3300, "iPhoneXS": 3300, "iPhoneXSMax": 4400, "iPhoneXR": 2640, 
        "iPhone11": 2640, "iPhone11Pro": 3520, "iPhone11ProMax": 4400, "iPhoneSE2": 1320, "iPhone12mini": 4400, "iPhone12": 5500, 
        "iPhone12Pro": 6600, "iPhone12ProMax": 7700, "iPhoneSE3": 2640, "iPhone13mini": 6600, "iPhone13": 6600, "iPhone13Pro": 9900, 
        "iPhone13ProMax": 9900, "iPhone14": 6600, "iPhone14Plus": 6600, "iPhone14Pro": 11000, "iPhone14ProMax": 11000,
        "iPhone15": 13200, "iPhone15Plus": 13200, "iPhone15Pro": 14300, "iPhone15ProMax": 14300
    } }
  ],
  networkLimitation: [
    { label: "ネットワーク利用制限⚪︎", value: 0 },
    { label: "ネットワーク利用制限△", value: { 
        "iPhone8": 1100, "iPhone8Plus": 1100, "iPhoneX": 1100, "iPhoneXS": 2200, "iPhoneXSMax": 2200, "iPhoneXR": 2200, 
        "iPhone11": 2200, "iPhone11Pro": 3300, "iPhone11ProMax": 3300, "iPhoneSE2": 1100, "iPhone12mini": 3300, "iPhone12": 3300, 
        "iPhone12Pro": 3300, "iPhone12ProMax": 3300, "iPhoneSE3": 3300, "iPhone13mini": 3300, "iPhone13": 3300, "iPhone13Pro": 4400, 
        "iPhone13ProMax": 4400, "iPhone14": 4400, "iPhone14Plus": 4400, "iPhone14Pro": 4400, "iPhone14ProMax": 4400,
        "iPhone15": 5500, "iPhone15Plus": 5500, "iPhone15Pro": 5500, "iPhone15ProMax": 5500
    } }
  ],
  cameraStain: [
    { label: "シミなし", value: 0 },
    { label: "シミあり（1〜2箇所）", value: { 
        "iPhone8": 550, "iPhone8Plus": 550, "iPhoneX": 550, "iPhoneXS": 550, "iPhoneXSMax": 550, "iPhoneXR": 550, 
        "iPhone11": 880, "iPhone11Pro": 880, "iPhone11ProMax": 880, "iPhoneSE2": 550, "iPhone12mini": 1100, "iPhone12": 1100, 
        "iPhone12Pro": 1100, "iPhone12ProMax": 1100, "iPhoneSE3": 880, "iPhone13mini": 1100, "iPhone13": 1100, "iPhone13Pro": 1650, 
        "iPhone13ProMax": 1650, "iPhone14": 1650, "iPhone14Plus": 1650, "iPhone14Pro": 1650, "iPhone14ProMax": 1650,
        "iPhone15": 2200, "iPhone15Plus": 2200, "iPhone15Pro": 2200, "iPhone15ProMax": 2200
    } },
    { label: "シミあり（3〜5箇所）", value: { 
        "iPhone8": 880, "iPhone8Plus": 880, "iPhoneX": 880, "iPhoneXS": 880, "iPhoneXSMax": 1100, "iPhoneXR": 1100, 
        "iPhone11": 1320, "iPhone11Pro": 1320, "iPhone11ProMax": 1320, "iPhoneSE2": 880, "iPhone12mini": 1650, "iPhone12": 1650, 
        "iPhone12Pro": 1650, "iPhone12ProMax": 1650, "iPhoneSE3": 1320, "iPhone13mini": 1650, "iPhone13": 1650, "iPhone13Pro": 1980, 
        "iPhone13ProMax": 1980, "iPhone14": 2200, "iPhone14Plus": 2200, "iPhone14Pro": 2200, "iPhone14ProMax": 2200,
        "iPhone15": 4400, "iPhone15Plus": 4400, "iPhone15Pro": 4400, "iPhone15ProMax": 4400
    } },
    { label: "シミあり（5箇所以上）", value: { 
        "iPhone8": 1100, "iPhone8Plus": 1100, "iPhoneX": 1100, "iPhoneXS": 1650, "iPhoneXSMax": 1650, "iPhoneXR": 1650, 
        "iPhone11": 1980, "iPhone11Pro": 2200, "iPhone11ProMax": 2200, "iPhoneSE2": 1100, "iPhone12mini": 2200, "iPhone12": 2200, 
        "iPhone12Pro": 2200, "iPhone12ProMax": 2200, "iPhoneSE3": 1980, "iPhone13mini": 2750, "iPhone13": 2750, "iPhone13Pro": 3300, 
        "iPhone13ProMax": 3300, "iPhone14": 3300, "iPhone14Plus": 3300, "iPhone14Pro": 5500, "iPhone14ProMax": 5500,
        "iPhone15": 6600, "iPhone15Plus": 6600, "iPhone15Pro": 8800, "iPhone15ProMax": 8800
    } }
  ],
  malfunction: [
    { label: "故障なし", value: 0 },
    { label: "カメラ", value: { 
        "iPhone8": 880, "iPhone8Plus": 880, "iPhoneX": 1650, "iPhoneXS": 1650, "iPhoneXSMax": 2200, "iPhoneXR": 1650, 
        "iPhone11": 2200, "iPhone11Pro": 3300, "iPhone11ProMax": 3300, "iPhoneSE2": 1650, "iPhone12mini": 3300, "iPhone12": 3300, 
        "iPhone12Pro": 4400, "iPhone12ProMax": 4400, "iPhoneSE3": 3300, "iPhone13mini": 4400, "iPhone13": 4400, "iPhone13Pro": 8800, 
        "iPhone13ProMax": 8800, "iPhone14": 8800, "iPhone14Plus": 8800, "iPhone14Pro": 13200, "iPhone14ProMax": 13200,
        "iPhone15": 11000, "iPhone15Plus": 11000, "iPhone15Pro": 16500, "iPhone15ProMax": 16500
    } },
    { label: "ホームボタン", value: { 
        "iPhone8": 1100, "iPhone8Plus": 1100, "iPhoneSE2": 2200, "iPhoneSE3": 4400
    } },
    { label: "FaceID", value: { 
        "iPhoneX": 1650, "iPhoneXS": 2200, "iPhoneXSMax": 2200, "iPhoneXR": 2200, "iPhone11": 3300, "iPhone11Pro": 4400, 
        "iPhone11ProMax": 4400, "iPhone12mini": 5500, "iPhone12": 5500, "iPhone12Pro": 6600, "iPhone12ProMax": 6600, "iPhone13mini": 16500, 
        "iPhone13": 16500, "iPhone13Pro": 22000, "iPhone13ProMax": 22000, "iPhone14": 22000, "iPhone14Plus": 22000, "iPhone14Pro": 33000, 
        "iPhone14ProMax": 33000, "iPhone15": 33000, "iPhone15Plus": 33000, "iPhone15Pro": 33000, "iPhone15ProMax": 33000
    } }
  ],
  truetone: [
    { label: "あり", value: 0 },
    { label: "なし", value: { 
        "iPhone8": 1100, "iPhone8Plus": 1100, "iPhoneX": 1100, "iPhoneXS": 1100, "iPhoneXSMax": 1100, "iPhoneXR": 1100, 
        "iPhone11": 1650, "iPhone11Pro": 1650, "iPhone11ProMax": 1650, "iPhoneSE2": 1100, "iPhone12mini": 2200, "iPhone12": 2200, 
        "iPhone12Pro": 2200, "iPhone12ProMax": 2200, "iPhoneSE3": 1650, "iPhone13mini": 3300, "iPhone13": 3300, "iPhone13Pro": 3300, 
        "iPhone13ProMax": 3300, "iPhone14": 4400, "iPhone14Plus": 4400, "iPhone14Pro": 4400, "iPhone14ProMax": 4400,
        "iPhone15": 5500, "iPhone15Plus": 5500, "iPhone15Pro": 5500, "iPhone15ProMax": 5500
    } }
  ]
};

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Alert status="error">
      <AlertIcon />
      <Box>
        <Text>エラーが発生しました:</Text>
        <Text>{error.message}</Text>
        <Box mt={2}>
          <button onClick={resetErrorBoundary}>再試行</button>
        </Box>
      </Box>
    </Alert>
  );
}

export default function App() {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedRank, setSelectedRank] = useState(ranks[0]);
  const [selectedCapacity, setSelectedCapacity] = useState(Object.keys(iPhoneData[models[0]][ranks[0]])[0]);
  const [customAppraisalAmount, setCustomAppraisalAmount] = useState('');
  const [deductions, setDeductions] = useState({
    フレームの傷: 0,
    画面の傷: 0,
    ネットワーク利用制限: 0,
    カメラのシミ: 0,
    故障箇所: 0,
    Truetone: 0
  });

  const { appraisalPrice, taxExclusivePrice, consumptionTax } = useMemo(() => {
    let basePrice = customAppraisalAmount !== '' ? Number(customAppraisalAmount) : iPhoneData[selectedModel][selectedRank][selectedCapacity];
    const totalDeduction = Object.values(deductions).reduce((sum, value) => sum + value, 0);
    const appraisalPrice = Math.max(0, basePrice - totalDeduction);
    const taxExclusivePrice = Math.floor(appraisalPrice / 1.1);
    const consumptionTax = appraisalPrice - taxExclusivePrice;
    return { appraisalPrice, taxExclusivePrice, consumptionTax };
  }, [selectedModel, selectedRank, selectedCapacity, deductions, customAppraisalAmount]);

  const handleDeductionChange = (key, value) => {
    setDeductions((prev) => ({ ...prev, [key]: Number(value) }));
  };

  const handleAppraisalAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAppraisalAmount(value);
    }
  };

  const renderSelect = (label, options, deductionKey) => (
    <FormControl key={deductionKey}>
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
                setCustomAppraisalAmount('');
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
            <Select onChange={(e) => {
              setSelectedRank(e.target.value);
              setCustomAppraisalAmount('');
            }}>
              {ranks.map((rank) => (
                <option key={rank} value={rank}>
                  {rank}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>容量</FormLabel>
            <Select onChange={(e) => {
              setSelectedCapacity(e.target.value);
              setCustomAppraisalAmount('');
            }}>
              {Object.keys(iPhoneData[selectedModel][selectedRank]).map((capacity) => (
                <option key={capacity} value={capacity}>
                  {capacity}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>【変更がある場合のみ記載】端末買取金額</FormLabel>
            <Input
              type="text"
              placeholder="査定額"
              value={customAppraisalAmount}
              onChange={handleAppraisalAmountChange}
            />
          </FormControl>
        </Box>
        <Box mt={4}>
          {renderSelect('フレームの傷', deductionOptions.frameScratch, 'フレームの傷')}
          {renderSelect('画面の傷', deductionOptions.screenScratch, '画面の傷')}
          {renderSelect('ネットワーク利用制限', deductionOptions.networkLimitation, 'ネットワーク利用制限')}
          {renderSelect('カメラのシミ', deductionOptions.cameraStain, 'カメラのシミ')}
          {renderSelect('故障箇所', deductionOptions.malfunction, '故障箇所')}
          {renderSelect('Truetone', deductionOptions.truetone, 'Truetone')}
        </Box>
        <Box mt={6} textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" color="green.500">
            端末買取金額: ¥{appraisalPrice.toLocaleString()}（税込）
          </Text>
          <Text fontSize="lg" mt={2}>
            ＊内訳＊
          </Text>
          <Text>
            税別金額: ¥{taxExclusivePrice.toLocaleString()}
          </Text>
          <Text>
            消費税（10%）: ¥{consumptionTax.toLocaleString()}
          </Text>
        </Box>
      </Box>
    </ErrorBoundary>
  );
}