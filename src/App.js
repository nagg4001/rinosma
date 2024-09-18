import React, { useState, useMemo } from 'react';
import { Box, Heading, Select, FormControl, FormLabel, Text, Input, Alert, AlertIcon } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';


const iPhoneData = {
  "iPhone8": {
    "A": { "256GB": 15300, "128GB": 14400, "64GB": 14000 },
    "B": { "256GB": 3800, "128GB": 3100, "64GB": 2900 },
    "C": { "256GB": 3400, "128GB": 2200, "64GB": 1500 },
    "D": { "256GB": 2400, "128GB": 1200, "64GB": 500 }
  },
  "iPhone8Plus": {
    "A": { "256GB": 16800, "128GB": 16000, "64GB": 15200 },
    "B": { "256GB": 8600, "128GB": 6400, "64GB": 5400 },
    "C": { "256GB": 4600, "128GB": 4100, "64GB": 3900 },
    "D": { "256GB": 2600, "128GB": 2100, "64GB": 1900 }
  },
  "iPhoneX": {
    "A": { "256GB": 20700, "128GB": 18900 },
    "B": { "256GB": 8300, "128GB": 5700 },
    "C": { "256GB": 3400, "128GB": 2300 },
    "D": { "256GB": 2400, "128GB": 1300 }
  },
  "iPhoneXS": {
    "A": { "512GB": 27900, "256GB": 25200, "64GB": 21600 },
    "B": { "512GB": 14700, "256GB": 11500, "64GB": 6600 },
    "C": { "512GB": 9500, "256GB": 6100, "64GB": 3200 },
    "D": { "512GB": 3500, "256GB": 3100, "64GB": 1200 }
  },
  "iPhoneXSMax": {
    "A": { "512GB": 38000, "256GB": 37000, "64GB": 33000 },
    "B": { "512GB": 17200, "256GB": 15200, "64GB": 13500 },
    "C": { "512GB": 11400, "256GB": 8700, "64GB": 7600 },
    "D": { "512GB": 6400, "256GB": 3700, "64GB": 2600 }
  },
  "iPhoneXR": {
    "A": { "256GB": 24300, "128GB": 22500, "64GB": 20700 },
    "B": { "256GB": 12200, "128GB": 10200, "64GB": 7800 },
    "C": { "256GB": 7000, "128GB": 5800, "64GB": 4900 },
    "D": { "256GB": 3000, "128GB": 2300, "64GB": 1900 }
  },
  "iPhone11": {
    "A": { "256GB": 35500, "128GB": 33500, "64GB": 30000 },
    "B": { "256GB": 17300, "128GB": 14500, "64GB": 11800 },
    "C": { "256GB": 14400, "128GB": 12000, "64GB": 9600 },
    "D": { "256GB": 6400, "128GB": 4000, "64GB": 3600 }
  },
  "iPhone11Pro": {
    "A": { "512GB": 47000, "256GB": 42700, "64GB": 36500 },
    "B": { "512GB": 25100, "256GB": 20800, "64GB": 17500 },
    "C": { "512GB": 15400, "256GB": 14700, "64GB": 11200 },
    "D": { "512GB": 15000, "256GB": 12000, "64GB": 10000 }
  },
  "iPhone11ProMax": {
    "A": { "512GB": 53500, "256GB": 50500, "64GB": 43000 },
    "B": { "512GB": 33300, "256GB": 27400, "64GB": 24700 },
    "C": { "512GB": 25500, "256GB": 23100, "64GB": 16800 },
    "D": { "512GB": 17000, "256GB": 15000, "64GB": 13000 }
  },
  "iPhoneSE2": {
    "A": { "256GB": 17600, "128GB": 16000, "64GB": 14800 },
    "B": { "256GB": 9200, "128GB": 6700, "64GB": 5500 },
    "C": { "256GB": 5600, "128GB": 4300, "64GB": 3400 },
    "D": { "256GB": 3600, "128GB": 2800, "64GB": 1400 }
  },
  "iPhone12mini": {
    "A": { "256GB": 39000, "128GB": 35500, "64GB": 31000 },
    "B": { "256GB": 22300, "128GB": 19600, "64GB": 15700 },
    "C": { "256GB": 13600, "128GB": 12000, "64GB": 9100 },
    "D": { "256GB": 8600, "128GB": 7000, "64GB": 4100 }
  },
  "iPhone12": {
    "A": { "256GB": 42700, "128GB": 34800, "64GB": 31900 },
    "B": { "256GB": 29500, "128GB": 23400, "64GB": 19500 },
    "C": { "256GB": 18400, "128GB": 15400, "64GB": 11200 },
    "D": { "256GB": 10400, "128GB": 7400, "64GB": 4200 }
  },
  "iPhone12Pro": {
    "A": { "512GB": 53100, "256GB": 50800, "128GB": 49800 },
    "B": { "512GB": 39300, "256GB": 34300, "128GB": 30900 },
    "C": { "512GB": 26200, "256GB": 21400, "128GB": 19600 },
    "D": { "512GB": 14200, "256GB": 13400, "128GB": 11600 }
  },
  "iPhone12ProMax": {
    "A": { "512GB": 73000, "256GB": 69500, "128GB": 64500 },
    "B": { "512GB": 46900, "256GB": 44600, "128GB": 42400 },
    "C": { "512GB": 36000, "256GB": 32000, "128GB": 30600 },
    "D": { "512GB": 21000, "256GB": 17000, "128GB": 15600 }
  },
  "iPhoneSE3": {
    "A": { "256GB": 38200, "128GB": 34300, "64GB": 31800 },
    "B": { "256GB": 32500, "128GB": 19800, "64GB": 18500 },
    "C": { "256GB": 21600, "128GB": 18100, "64GB": 14000 },
    "D": { "256GB": 11600, "128GB": 9100, "64GB": 7000 }
  },
  "iPhone13mini": {
    "A": { "512GB": 61500, "256GB": 55000, "128GB": 46700 },
    "B": { "512GB": 40200, "256GB": 38000, "128GB": 30300 },
    "C": { "512GB": 27900, "256GB": 24600, "128GB": 20800 },
    "D": { "512GB": 17900, "256GB": 14600, "128GB": 10800 }
  },
  "iPhone13": {
    "A": { "512GB": 73800, "256GB": 63200, "128GB": 56000 },
    "B": { "512GB": 51200, "256GB": 47900, "128GB": 37700 },
    "C": { "512GB": 34800, "256GB": 32300, "128GB": 26400 },
    "D": { "512GB": 21800, "256GB": 19300, "128GB": 16400 }
  },
  "iPhone13Pro": {
    "A": { "1TB": 84000, "512GB": 80000, "256GB": 73000, "128GB": 71000 },
    "B": { "1TB": 71100, "512GB": 59100, "256GB": 50100, "128GB": 44400 },
    "C": { "1TB": 39200, "512GB": 33000, "256GB": 31200, "128GB": 25800 },
    "D": { "1TB": 29200, "512GB": 23000, "256GB": 21200, "128GB": 15800 }
  },
  "iPhone13ProMax": {
    "A": { "1TB": 93000, "512GB": 89000, "256GB": 87000, "128GB": 80000 },
    "B": { "1TB": 74800, "512GB": 68000, "256GB": 64500, "128GB": 51500 },
    "C": { "1TB": 50200, "512GB": 44800, "256GB": 37200, "128GB": 33600 },
    "D": { "1TB": 40200, "512GB": 34800, "256GB": 27200, "128GB": 23600 }
  },
  "iPhone14": {
    "A": { "512GB": 81700, "256GB": 74700, "128GB": 58400 },
    "B": { "512GB": 61600, "256GB": 61700, "128GB": 52200 },
    "C": { "512GB": 51000, "256GB": 46500, "128GB": 36000 },
    "D": { "512GB": 36000, "256GB": 31500, "128GB": 21000 }
  },
  "iPhone14Plus": {
    "A": { "512GB": 79000, "256GB": 76500, "128GB": 71000 },
    "B": { "512GB": 64600, "256GB": 60300, "128GB": 57300 },
    "C": { "512GB": 58300, "256GB": 47500, "128GB": 39200 },
    "D": { "512GB": 40300, "256GB": 32500, "128GB": 24200 }
  },
  "iPhone14Pro": {
    "A": { "1TB": 111000, "512GB": 106000, "256GB": 101000, "128GB": 92000 },
    "B": { "1TB": 90900, "512GB": 87100, "256GB": 79900, "128GB": 72600 },
    "C": { "1TB": 60700, "512GB": 56200, "256GB": 53200, "128GB": 45500 },
    "D": { "1TB": 45700, "512GB": 41200, "256GB": 38200, "128GB": 35500 }
  },
  "iPhone14ProMax": {
    "A": { "1TB": 126000, "512GB": 119000, "256GB": 114000, "128GB": 108000 },
    "B": { "1TB": 92400, "512GB": 90000, "256GB": 76800, "128GB": 70500 },
    "C": { "1TB": 71200, "512GB": 68000, "256GB": 63000, "128GB": 57000 },
    "D": { "1TB": 56200, "512GB": 53000, "256GB": 48000, "128GB": 42000 }
  },
  "iPhone15": {
    "A": { "512GB": 100700, "256GB": 88200, "128GB": 69600 },
    "B": { "512GB": 87700, "256GB": 74700, "128GB": 63900 },
    "C": { "512GB": 66500, "256GB": 55100, "128GB": 45900 },
    "D": { "512GB": 51500, "256GB": 40100, "128GB": 30900 }
  },
  "iPhone15Plus": {
    "A": { "512GB": 101700, "256GB": 84000, "128GB": 79000 },
    "B": { "512GB": 91800, "256GB": 81900, "128GB": 72900 },
    "C": { "512GB": 69300, "256GB": 61700, "128GB": 52200 },
    "D": { "512GB": 51300, "256GB": 46700, "128GB": 37200 }
  },
  "iPhone15Pro": {
    "A": { "1TB": 146400, "512GB": 130400, "256GB": 108000, "128GB": 95200 },
    "B": { "1TB": 121900, "512GB": 109800, "256GB": 93600, "128GB": 84600 },
    "C": { "1TB": 98100, "512GB": 89100, "256GB": 67200, "128GB": 60000 },
    "D": { "1TB": 68100, "512GB": 59100, "256GB": 47200, "128GB": 30000 }
  },
  "iPhone15ProMax": {
    "A": { "1TB": 156800, "512GB": 137600, "256GB": 119200 },
    "B": { "1TB": 134100, "512GB": 122400, "256GB": 105700 },
    "C": { "1TB": 113400, "512GB": 102600, "256GB": 79200 },
    "D": { "1TB": 63400, "512GB": 52600, "256GB": 49200 }
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
        "iPhone8": 1000, "iPhone8Plus": 1000, "iPhoneX": 1000, "iPhoneXS": 2000, "iPhoneXSMax": 2000, "iPhoneXR": 2000, 
        "iPhone11": 2000, "iPhone11Pro": 3000, "iPhone11ProMax": 3000, "iPhoneSE2": 1000, "iPhone12mini": 3000, "iPhone12": 3000, 
        "iPhone12Pro": 3000, "iPhone12ProMax": 3000, "iPhoneSE3": 3000, "iPhone13mini": 3000, "iPhone13": 3000, "iPhone13Pro": 4000, 
        "iPhone13ProMax": 4000, "iPhone14": 4000, "iPhone14Plus": 4000, "iPhone14Pro": 4000, "iPhone14ProMax": 4000,
        "iPhone15": 5000, "iPhone15Plus": 5000, "iPhone15Pro": 5000, "iPhone15ProMax": 5000
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
            <FormLabel>端末買取金額</FormLabel>
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