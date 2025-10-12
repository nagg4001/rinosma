"use client"

import { useState, useMemo } from "react"
import { Box, Heading, Select, FormControl, FormLabel, Text, Input, Alert, AlertIcon } from "@chakra-ui/react"
import { ErrorBoundary } from "react-error-boundary"

export const iPhoneData = {
  "iPhone8": {
    "A": {
      "256GB": 10000,
      "128GB": 9000,
      "64GB": 8000
    },
    "B": {
      "256GB": 2800,
      "128GB": 2100,
      "64GB": 1000
    },
    "C": {
      "256GB": 2100,
      "128GB": 1000,
      "64GB": 600
    },
    "D": {
      "256GB": 1100,
      "128GB": 500,
      "64GB": 100
    }
  },
  "iPhone8Plus": {
    "A": {
      "256GB": 14000,
      "128GB": 12000,
      "64GB": 10000
    },
    "B": {
      "256GB": 4000,
      "128GB": 3200,
      "64GB": 2400
    },
    "C": {
      "256GB": 2200,
      "128GB": 1400,
      "64GB": 900
    },
    "D": {
      "256GB": 1200,
      "128GB": 600,
      "64GB": 100
    }
  },
  "iPhoneX": {
    "A": {
      "256GB": 17100,
      "64GB": 15300
    },
    "B": {
      "256GB": 7800,
      "64GB": 6700
    },
    "C": {
      "256GB": 3600,
      "64GB": 2300
    },
    "D": {
      "256GB": 2600,
      "64GB": 1800
    }
  },
  "iPhoneXS": {
    "A": {
      "512GB": 18900,
      "256GB": 17100,
      "64GB": 16200
    },
    "B": {
      "512GB": 13300,
      "256GB": 12100,
      "64GB": 9000
    },
    "C": {
      "512GB": 6700,
      "256GB": 4600,
      "64GB": 3600
    },
    "D": {
      "512GB": 2700,
      "256GB": 1600,
      "64GB": 1100
    }
  },
  "iPhoneXSMax": {
    "A": {
      "512GB": 26000,
      "256GB": 24000,
      "64GB": 21000
    },
    "B": {
      "512GB": 15500,
      "256GB": 14000,
      "64GB": 14100
    },
    "C": {
      "512GB": 9000,
      "256GB": 8100,
      "64GB": 7000
    },
    "D": {
      "512GB": 4000,
      "256GB": 3100,
      "64GB": 2000
    }
  },
  "iPhoneXR": {
    "A": {
      "256GB": 17100,
      "128GB": 16200,
      "64GB": 15300
    },
    "B": {
      "256GB": 11000,
      "128GB": 9000,
      "64GB": 6600
    },
    "C": {
      "256GB": 5500,
      "128GB": 4800,
      "64GB": 4100
    },
    "D": {
      "256GB": 3500,
      "128GB": 2800,
      "64GB": 2100
    }
  },
  "iPhone11": {
    "A": {
      "256GB": 29000,
      "128GB": 26000,
      "64GB": 24000
    },
    "B": {
      "256GB": 15500,
      "128GB": 13500,
      "64GB": 10500
    },
    "C": {
      "256GB": 11900,
      "128GB": 10400,
      "64GB": 9000
    },
    "D": {
      "256GB": 4900,
      "128GB": 4400,
      "64GB": 3000
    }
  },
  "iPhone11Pro": {
    "A": {
      "512GB": 34000,
      "256GB": 29000,
      "64GB": 27000
    },
    "B": {
      "512GB": 22400,
      "256GB": 19900,
      "64GB": 15200
    },
    "C": {
      "512GB": 11200,
      "256GB": 9000,
      "64GB": 7800
    },
    "D": {
      "512GB": 10000,
      "256GB": 7000,
      "64GB": 5000
    }
  },
  "iPhone11ProMax": {
    "A": {
      "512GB": 40000,
      "256GB": 37000,
      "64GB": 35000
    },
    "B": {
      "512GB": 26700,
      "256GB": 22100,
      "64GB": 20700
    },
    "C": {
      "512GB": 16800,
      "256GB": 15200,
      "64GB": 12700
    },
    "D": {
      "512GB": 15000,
      "256GB": 10000,
      "64GB": 8000
    }
  },
  "iPhoneSE2": {
    "A": {
      "256GB": 16000,
      "128GB": 15200,
      "64GB": 12800
    },
    "B": {
      "256GB": 9900,
      "128GB": 8200,
      "64GB": 5800
    },
    "C": {
      "256GB": 5600,
      "128GB": 4800,
      "64GB": 3400
    },
    "D": {
      "256GB": 3600,
      "128GB": 3300,
      "64GB": 1400
    }
  },
  "iPhone12mini": {
    "A": {
      "256GB": 36000,
      "128GB": 34000,
      "64GB": 29000
    },
    "B": {
      "256GB": 19000,
      "128GB": 14000,
      "64GB": 13200
    },
    "C": {
      "256GB": 10400,
      "128GB": 7400,
      "64GB": 4500
    },
    "D": {
      "256GB": 5400,
      "128GB": 2400,
      "64GB": 500
    }
  },
  "iPhone12": {
    "A": {
      "256GB": 35100,
      "128GB": 29600,
      "64GB": 28800
    },
    "B": {
      "256GB": 24400,
      "128GB": 20600,
      "64GB": 16200
    },
    "C": {
      "256GB": 11200,
      "128GB": 10500,
      "64GB": 7800
    },
    "D": {
      "256GB": 3200,
      "128GB": 2500,
      "64GB": 1800
    }
  },
  "iPhone12Pro": {
    "A": {
      "512GB": 47500,
      "256GB": 45600,
      "128GB": 42700
    },
    "B": {
      "512GB": 33000,
      "256GB": 31400,
      "128GB": 28600
    },
    "C": {
      "512GB": 18400,
      "256GB": 16500,
      "128GB": 15700
    },
    "D": {
      "512GB": 9400,
      "256GB": 8500,
      "128GB": 7700
    }
  },
  "iPhone12ProMax": {
    "A": {
      "512GB": 66000,
      "256GB": 62000,
      "128GB": 58000
    },
    "B": {
      "512GB": 45700,
      "256GB": 44100,
      "128GB": 38500
    },
    "C": {
      "512GB": 27000,
      "256GB": 24600,
      "128GB": 22900
    },
    "D": {
      "512GB": 12000,
      "256GB": 9600,
      "128GB": 5900
    }
  },
  "iPhoneSE3": {
    "A": {
      "256GB": 39200,
      "128GB": 35200,
      "64GB": 32200
    },
    "B": {
      "256GB": 29900,
      "128GB": 17900,
      "64GB": 16200
    },
    "C": {
      "256GB": 17000,
      "128GB": 14600,
      "64GB": 11700
    },
    "D": {
      "256GB": 9000,
      "128GB": 7600,
      "64GB": 6700
    }
  },
  "iPhone13mini": {
    "A": {
      "512GB": 55000,
      "256GB": 49000,
      "128GB": 44000
    },
    "B": {
      "512GB": 35300,
      "256GB": 30200,
      "128GB": 25300
    },
    "C": {
      "512GB": 21200,
      "256GB": 16800,
      "128GB": 13500
    },
    "D": {
      "512GB": 11200,
      "256GB": 6800,
      "128GB": 3500
    }
  },
  "iPhone13": {
    "A": {
      "512GB": 50400,
      "256GB": 40000,
      "128GB": 37600
    },
    "B": {
      "512GB": 36100,
      "256GB": 31300,
      "128GB": 28700
    },
    "C": {
      "512GB": 20000,
      "256GB": 18400,
      "128GB": 16800
    },
    "D": {
      "512GB": 12000,
      "256GB": 8400,
      "128GB": 6800
    }
  },
  "iPhone13Pro": {
    "A": {
      "1TB": 80000,
      "512GB": 76000,
      "256GB": 70000,
      "128GB": 65000
    },
    "B": {
      "1TB": 56500,
      "512GB": 52400,
      "256GB": 43800,
      "128GB": 40600
    },
    "C": {
      "1TB": 36000,
      "512GB": 30600,
      "256GB": 28000,
      "128GB": 25500
    },
    "D": {
      "1TB": 26000,
      "512GB": 20600,
      "256GB": 18000,
      "128GB": 15500
    }
  },
  "iPhone13ProMax": {
    "A": {
      "1TB": 91000,
      "512GB": 86000,
      "256GB": 80000,
      "128GB": 76000
    },
    "B": {
      "1TB": 64000,
      "512GB": 59900,
      "256GB": 56500,
      "128GB": 49500
    },
    "C": {
      "1TB": 36000,
      "512GB": 32300,
      "256GB": 30600,
      "128GB": 29700
    },
    "D": {
      "1TB": 16000,
      "512GB": 17300,
      "256GB": 14600,
      "128GB": 13700
    }
  },
  "iPhone14": {
    "A": {
      "512GB": 72200,
      "256GB": 67500,
      "128GB": 52800
    },
    "B": {
      "512GB": 47900,
      "256GB": 44400,
      "128GB": 39000
    },
    "C": {
      "512GB": 29700,
      "256GB": 28000,
      "128GB": 25500
    },
    "D": {
      "512GB": 14700,
      "256GB": 13000,
      "128GB": 10500
    }
  },
  "iPhone14Plus": {
    "A": {
      "512GB": 74000,
      "256GB": 58500,
      "128GB": 53100
    },
    "B": {
      "512GB": 57400,
      "256GB": 50700,
      "128GB": 45700
    },
    "C": {
      "512GB": 36000,
      "256GB": 29700,
      "128GB": 28800
    },
    "D": {
      "512GB": 18000,
      "256GB": 14700,
      "128GB": 13800
    }
  },
  "iPhone14Pro": {
    "A": {
      "1TB": 82800,
      "512GB": 74700,
      "256GB": 68400,
      "128GB": 61200
    },
    "B": {
      "1TB": 71500,
      "512GB": 64900,
      "256GB": 59000,
      "128GB": 49500
    },
    "C": {
      "1TB": 45900,
      "512GB": 40800,
      "256GB": 36800,
      "128GB": 35200
    },
    "D": {
      "1TB": 45000,
      "512GB": 25800,
      "256GB": 21800,
      "128GB": 20200
    }
  },
  "iPhone14ProMax": {
    "A": {
      "1TB": 91800,
      "512GB": 83700,
      "256GB": 78300,
      "128GB": 75600
    },
    "B": {
      "1TB": 79800,
      "512GB": 72400,
      "256GB": 67400,
      "128GB": 65700
    },
    "C": {
      "1TB": 55800,
      "512GB": 52200,
      "256GB": 47600,
      "128GB": 45900
    },
    "D": {
      "1TB": 35800,
      "512GB": 32200,
      "256GB": 32600,
      "128GB": 25900
    }
  },
  "iPhone15": {
    "A": {
      "512GB": 87400,
      "256GB": 75600,
      "128GB": 63900
    },
    "B": {
      "512GB": 71500,
      "256GB": 64000,
      "128GB": 56500
    },
    "C": {
      "512GB": 45000,
      "256GB": 40500,
      "128GB": 36000
    },
    "D": {
      "512GB": 30000,
      "256GB": 25500,
      "128GB": 21000
    }
  },
  "iPhone15Plus": {
    "A": {
      "512GB": 105000,
      "256GB": 89100,
      "128GB": 81000
    },
    "B": {
      "512GB": 74800,
      "256GB": 67400,
      "128GB": 54600
    },
    "C": {
      "512GB": 48600,
      "256GB": 45000,
      "128GB": 40500
    },
    "D": {
      "512GB": 30600,
      "256GB": 30000,
      "128GB": 25500
    }
  },
  "iPhone15Pro": {
    "A": {
      "1TB": 116800,
      "512GB": 108800,
      "256GB": 101600,
      "128GB": 91200
    },
    "B": {
      "1TB": 92100,
      "512GB": 85500,
      "256GB": 75500,
      "128GB": 68800
    },
    "C": {
      "1TB": 61200,
      "512GB": 57600,
      "256GB": 52200,
      "128GB": 48600
    },
    "D": {
      "1TB": 31200,
      "512GB": 27600,
      "256GB": 32200,
      "128GB": 18600
    }
  },
  "iPhone15ProMax": {
    "A": {
      "1TB": 143100,
      "512GB": 136800,
      "256GB": 126900
    },
    "B": {
      "1TB": 102100,
      "512GB": 94600,
      "256GB": 83800
    },
    "C": {
      "1TB": 69300,
      "512GB": 67500,
      "256GB": 63900
    },
    "D": {
      "1TB": 39300,
      "512GB": 37500,
      "256GB": 33900
    }
  },
  "iPhone16": {
    "A": {
      "512GB": 105400,
      "256GB": 93600,
      "128GB": 84600
    },
    "B": {
      "512GB": 80600,
      "256GB": 73900,
      "128GB": 66500
    },
    "C": {
      "512GB": 51200,
      "256GB": 49600,
      "128GB": 48800
    },
    "D": {
      "512GB": 36200,
      "256GB": 34600,
      "128GB": 33800
    }
  },
  "iPhone16Plus": {
    "A": {
      "512GB": 102600,
      "256GB": 89100,
      "128GB": 74700
    },
    "B": {
      "512GB": 89800,
      "256GB": 80800,
      "128GB": 71200
    },
    "C": {
      "512GB": 59000,
      "256GB": 53000,
      "128GB": 47000
    },
    "D": {
      "512GB": 44000,
      "256GB": 38000,
      "128GB": 32000
    }
  },
  "iPhone16Pro": {
    "A": {
      "1TB": 155200,
      "512GB": 142400,
      "256GB": 123200,
      "128GB": 108800
    },
    "B": {
      "1TB": 122400,
      "512GB": 107400,
      "256GB": 98000,
      "128GB": 88800
    },
    "C": {
      "1TB": 83000,
      "512GB": 78000,
      "256GB": 70000,
      "128GB": 65000
    },
    "D": {
      "1TB": 53000,
      "512GB": 48000,
      "256GB": 50000,
      "128GB": 35000
    }
  },
  "iPhone16ProMax": {
    "A": {
      "1TB": 193500,
      "512GB": 168300,
      "256GB": 145800
    },
    "B": {
      "1TB": 137900,
      "512GB": 126200,
      "256GB": 110400
    },
    "C": {
      "1TB": 95000,
      "512GB": 87000,
      "256GB": 77000
    },
    "D": {
      "1TB": 65000,
      "512GB": 57000,
      "256GB": 47000
    }
  },
  "iPhone16e": {
    "A": {
      "512GB": 83600,
      "256GB": 66600,
      "128GB": 60300
    },
    "B": {
      "512GB": 70700,
      "256GB": 63200,
      "128GB": 50300
    },
    "C": {
      "512GB": 43200,
      "256GB": 38700,
      "128GB": 30400
    },
    "D": {
      "512GB": 28200,
      "256GB": 23700,
      "128GB": 15400
    }
  }
}

const models = Object.keys(iPhoneData)
const ranks = ["A", "B", "C", "D"]

// 減額オプション
const deductionOptions = {
  frameScratch: [
    { label: "傷なし", value: 0 },
    {
      label: "小傷あり（2〜３箇所）",
      value: {
        iPhone8: 550,
        iPhone8Plus: 550,
        iPhoneX: 550,
        iPhoneXS: 550,
        iPhoneXSMax: 550,
        iPhoneXR: 550,
        iPhone11: 880,
        iPhone11Pro: 880,
        iPhone11ProMax: 880,
        iPhoneSE2: 550,
        iPhone12mini: 880,
        iPhone12: 880,
        iPhone12Pro: 880,
        iPhone12ProMax: 880,
        iPhoneSE3: 880,
        iPhone13mini: 1100,
        iPhone13: 1100,
        iPhone13Pro: 1100,
        iPhone13ProMax: 1100,
        iPhone14: 1320,
        iPhone14Plus: 1320,
        iPhone14Pro: 1320,
        iPhone14ProMax: 1320,
        iPhone15: 1320,
        iPhone15Plus: 1320,
        iPhone15Pro: 1320,
        iPhone15ProMax: 1320,
        iPhone16: 1320,
        iPhone16Plus: 1320,
        iPhone16Pro: 1320,
        iPhone16ProMax: 1320,
        iPhone16e: 1320,
      },
    },
    {
      label: "目立つ傷あり（4〜５箇所）",
      value: {
        iPhone8: 880,
        iPhone8Plus: 880,
        iPhoneX: 880,
        iPhoneXS: 1100,
        iPhoneXSMax: 1100,
        iPhoneXR: 1100,
        iPhone11: 1320,
        iPhone11Pro: 1320,
        iPhone11ProMax: 1320,
        iPhoneSE2: 880,
        iPhone12mini: 1320,
        iPhone12: 1320,
        iPhone12Pro: 1650,
        iPhone12ProMax: 1650,
        iPhoneSE3: 1320,
        iPhone13mini: 1650,
        iPhone13: 1650,
        iPhone13Pro: 1980,
        iPhone13ProMax: 1980,
        iPhone14: 2200,
        iPhone14Plus: 2200,
        iPhone14Pro: 2200,
        iPhone14ProMax: 2200,
        iPhone15: 2200,
        iPhone15Plus: 2200,
        iPhone15Pro: 2200,
        iPhone15ProMax: 2200,
        iPhone16: 2200,
        iPhone16Plus: 2200,
        iPhone16Pro: 2200,
        iPhone16ProMax: 2200,
        iPhone16e: 2200,
      },
    },
    {
      label: "傷多数あり",
      value: {
        iPhone8: 1100,
        iPhone8Plus: 1100,
        iPhoneX: 1100,
        iPhoneXS: 1650,
        iPhoneXSMax: 1650,
        iPhoneXR: 1650,
        iPhone11: 1980,
        iPhone11Pro: 2200,
        iPhone11ProMax: 2200,
        iPhoneSE2: 1100,
        iPhone12mini: 2200,
        iPhone12: 2200,
        iPhone12Pro: 2200,
        iPhone12ProMax: 2200,
        iPhoneSE3: 1980,
        iPhone13mini: 2750,
        iPhone13: 2750,
        iPhone13Pro: 3300,
        iPhone13ProMax: 3300,
        iPhone14: 3300,
        iPhone14Plus: 3300,
        iPhone14Pro: 4400,
        iPhone14ProMax: 4400,
        iPhone15: 3300,
        iPhone15Plus: 3300,
        iPhone15Pro: 4400,
        iPhone15ProMax: 4400,
        iPhone16: 3300,
        iPhone16Plus: 3300,
        iPhone16Pro: 4400,
        iPhone16ProMax: 4400,
        iPhone16e: 3300,
      },
    },
  ],
  screenScratch: [
    { label: "傷なし", value: 0 },
    {
      label: "角度を変えると若干傷あり",
      value: {
        iPhone8: 330,
        iPhone8Plus: 330,
        iPhoneX: 880,
        iPhoneXS: 880,
        iPhoneXSMax: 1100,
        iPhoneXR: 660,
        iPhone11: 660,
        iPhone11Pro: 880,
        iPhone11ProMax: 1100,
        iPhoneSE2: 550,
        iPhone12mini: 1100,
        iPhone12: 1100,
        iPhone12Pro: 1320,
        iPhone12ProMax: 1320,
        iPhoneSE3: 660,
        iPhone13mini: 1320,
        iPhone13: 1320,
        iPhone13Pro: 1650,
        iPhone13ProMax: 1650,
        iPhone14: 1320,
        iPhone14Plus: 1320,
        iPhone14Pro: 2200,
        iPhone14ProMax: 2200,
        iPhone15: 2200,
        iPhone15Plus: 2200,
        iPhone15Pro: 2200,
        iPhone15ProMax: 2200,
        iPhone16: 2200,
        iPhone16Plus: 2200,
        iPhone16Pro: 2200,
        iPhone16ProMax: 2200,
        iPhone16e: 2200,
      },
    },
    {
      label: "画面のやや目立つ傷あり（1〜3箇所）",
      value: {
        iPhone8: 550,
        iPhone8Plus: 550,
        iPhoneX: 1100,
        iPhoneXS: 1100,
        iPhoneXSMax: 1650,
        iPhoneXR: 880,
        iPhone11: 1100,
        iPhone11Pro: 1320,
        iPhone11ProMax: 1650,
        iPhoneSE2: 660,
        iPhone12mini: 1650,
        iPhone12: 1980,
        iPhone12Pro: 2200,
        iPhone12ProMax: 2200,
        iPhoneSE3: 880,
        iPhone13mini: 2200,
        iPhone13: 2200,
        iPhone13Pro: 2750,
        iPhone13ProMax: 2750,
        iPhone14: 2200,
        iPhone14Plus: 2200,
        iPhone14Pro: 2750,
        iPhone14ProMax: 2750,
        iPhone15: 4400,
        iPhone15Plus: 4400,
        iPhone15Pro: 5500,
        iPhone15ProMax: 5500,
        iPhone16: 4400,
        iPhone16Plus: 4400,
        iPhone16Pro: 5500,
        iPhone16ProMax: 5500,
        iPhone16e: 4400,
      },
    },
    {
      label: "画面の目立つ傷あり（4〜5箇所）",
      value: {
        iPhone8: 660,
        iPhone8Plus: 660,
        iPhoneX: 1650,
        iPhoneXS: 1650,
        iPhoneXSMax: 2200,
        iPhoneXR: 1320,
        iPhone11: 1320,
        iPhone11Pro: 1760,
        iPhone11ProMax: 3520,
        iPhoneSE2: 880,
        iPhone12mini: 3080,
        iPhone12: 3300,
        iPhone12Pro: 3520,
        iPhone12ProMax: 3520,
        iPhoneSE3: 1320,
        iPhone13mini: 3520,
        iPhone13: 3520,
        iPhone13Pro: 6600,
        iPhone13ProMax: 6600,
        iPhone14: 3520,
        iPhone14Plus: 3520,
        iPhone14Pro: 7700,
        iPhone14ProMax: 7700,
        iPhone15: 8800,
        iPhone15Plus: 8800,
        iPhone15Pro: 9900,
        iPhone15ProMax: 9900,
        iPhone16: 8800,
        iPhone16Plus: 8800,
        iPhone16Pro: 9900,
        iPhone16ProMax: 9900,
        iPhone16e: 8800,
      },
    },
    {
      label: "画面に多数の傷あり",
      value: {
        iPhone8: 1320,
        iPhone8Plus: 1320,
        iPhoneX: 3300,
        iPhoneXS: 3300,
        iPhoneXSMax: 4400,
        iPhoneXR: 2640,
        iPhone11: 2640,
        iPhone11Pro: 3520,
        iPhone11ProMax: 4400,
        iPhoneSE2: 1320,
        iPhone12mini: 4400,
        iPhone12: 5500,
        iPhone12Pro: 6600,
        iPhone12ProMax: 7700,
        iPhoneSE3: 2640,
        iPhone13mini: 6600,
        iPhone13: 6600,
        iPhone13Pro: 9900,
        iPhone13ProMax: 9900,
        iPhone14: 6600,
        iPhone14Plus: 6600,
        iPhone14Pro: 11000,
        iPhone14ProMax: 11000,
        iPhone15: 13200,
        iPhone15Plus: 13200,
        iPhone15Pro: 14300,
        iPhone15ProMax: 14300,
        iPhone16: 13200,
        iPhone16Plus: 13200,
        iPhone16Pro: 14300,
        iPhone16ProMax: 14300,
        iPhone16e: 13200,
      },
    },
  ],
  networkLimitation: [
    { label: "ネットワーク利用制限⚪︎", value: 0 },
    {
      label: "ネットワーク利用制限△",
      value: {
        iPhone8: 1000,
        iPhone8Plus: 1000,
        iPhoneX: 1000,
        iPhoneXS: 2000,
        iPhoneXSMax: 2000,
        iPhoneXR: 2000,
        iPhone11: 2000,
        iPhone11Pro: 3000,
        iPhone11ProMax: 3000,
        iPhoneSE2: 1000,
        iPhone12mini: 3000,
        iPhone12: 3000,
        iPhone12Pro: 3000,
        iPhone12ProMax: 3000,
        iPhoneSE3: 3000,
        iPhone13mini: 3000,
        iPhone13: 3000,
        iPhone13Pro: 4000,
        iPhone13ProMax: 4000,
        iPhone14: 4000,
        iPhone14Plus: 4000,
        iPhone14Pro: 4000,
        iPhone14ProMax: 4000,
        iPhone15: 5000,
        iPhone15Plus: 5000,
        iPhone15Pro: 5000,
        iPhone15ProMax: 5000,
        iPhone16: 5000,
        iPhone16Plus: 5000,
        iPhone16Pro: 5000,
        iPhone16ProMax: 5000,
        iPhone16e: 5000,
      },
    },
  ],
  cameraStain: [
    { label: "シミなし", value: 0 },
    {
      label: "シミあり（1〜2箇所）",
      value: {
        iPhone8: 550,
        iPhone8Plus: 550,
        iPhoneX: 550,
        iPhoneXS: 550,
        iPhoneXSMax: 550,
        iPhoneXR: 550,
        iPhone11: 880,
        iPhone11Pro: 880,
        iPhone11ProMax: 880,
        iPhoneSE2: 550,
        iPhone12mini: 1100,
        iPhone12: 1100,
        iPhone12Pro: 1100,
        iPhone12ProMax: 1100,
        iPhoneSE3: 880,
        iPhone13mini: 1100,
        iPhone13: 1100,
        iPhone13Pro: 1650,
        iPhone13ProMax: 1650,
        iPhone14: 1650,
        iPhone14Plus: 1650,
        iPhone14Pro: 1650,
        iPhone14ProMax: 1650,
        iPhone15: 2200,
        iPhone15Plus: 2200,
        iPhone15Pro: 2200,
        iPhone15ProMax: 2200,
        iPhone16: 2200,
        iPhone16Plus: 2200,
        iPhone16Pro: 2200,
        iPhone16ProMax: 2200,
        iPhone16e: 2200,
      },
    },
    {
      label: "シミあり（3〜5箇所）",
      value: {
        iPhone8: 880,
        iPhone8Plus: 880,
        iPhoneX: 880,
        iPhoneXS: 880,
        iPhoneXSMax: 1100,
        iPhoneXR: 1100,
        iPhone11: 1320,
        iPhone11Pro: 1320,
        iPhone11ProMax: 1320,
        iPhoneSE2: 880,
        iPhone12mini: 1650,
        iPhone12: 1650,
        iPhone12Pro: 1650,
        iPhone12ProMax: 1650,
        iPhoneSE3: 1320,
        iPhone13mini: 1650,
        iPhone13: 1650,
        iPhone13Pro: 1980,
        iPhone13ProMax: 1980,
        iPhone14: 2200,
        iPhone14Plus: 2200,
        iPhone14Pro: 2200,
        iPhone14ProMax: 2200,
        iPhone15: 4400,
        iPhone15Plus: 4400,
        iPhone15Pro: 4400,
        iPhone15ProMax: 4400,
        iPhone16: 4400,
        iPhone16Plus: 4400,
        iPhone16Pro: 4400,
        iPhone16ProMax: 4400,
        iPhone16e: 4400,
      },
    },
    {
      label: "シミあり（5箇所以上）",
      value: {
        iPhone8: 1100,
        iPhone8Plus: 1100,
        iPhoneX: 1100,
        iPhoneXS: 1650,
        iPhoneXSMax: 1650,
        iPhoneXR: 1650,
        iPhone11: 1980,
        iPhone11Pro: 2200,
        iPhone11ProMax: 2200,
        iPhoneSE2: 1100,
        iPhone12mini: 2200,
        iPhone12: 2200,
        iPhone12Pro: 2200,
        iPhone12ProMax: 2200,
        iPhoneSE3: 1980,
        iPhone13mini: 2750,
        iPhone13: 2750,
        iPhone13Pro: 3300,
        iPhone13ProMax: 3300,
        iPhone14: 3300,
        iPhone14Plus: 3300,
        iPhone14Pro: 5500,
        iPhone14ProMax: 5500,
        iPhone15: 6600,
        iPhone15Plus: 6600,
        iPhone15Pro: 8800,
        iPhone15ProMax: 8800,
        iPhone16: 6600,
        iPhone16Plus: 6600,
        iPhone16Pro: 8800,
        iPhone16ProMax: 8800,
        iPhone16e: 6600,
      },
    },
  ],
  malfunction: [
    { label: "故障なし", value: 0 },
    {
      label: "カメラ",
      value: {
        iPhone8: 880,
        iPhone8Plus: 880,
        iPhoneX: 1650,
        iPhoneXS: 1650,
        iPhoneXSMax: 2200,
        iPhoneXR: 1650,
        iPhone11: 2200,
        iPhone11Pro: 3300,
        iPhone11ProMax: 3300,
        iPhoneSE2: 1650,
        iPhone12mini: 3300,
        iPhone12: 3300,
        iPhone12Pro: 4400,
        iPhone12ProMax: 4400,
        iPhoneSE3: 3300,
        iPhone13mini: 4400,
        iPhone13: 4400,
        iPhone13Pro: 8800,
        iPhone13ProMax: 8800,
        iPhone14: 8800,
        iPhone14Plus: 8800,
        iPhone14Pro: 13200,
        iPhone14ProMax: 13200,
        iPhone15: 11000,
        iPhone15Plus: 11000,
        iPhone15Pro: 16500,
        iPhone15ProMax: 16500,
        iPhone16: 11000,
        iPhone16Plus: 11000,
        iPhone16Pro: 16500,
        iPhone16ProMax: 16500,
        iPhone16e: 11000,
      },
    },
    {
      label: "ホームボタン",
      value: {
        iPhone8: 1100,
        iPhone8Plus: 1100,
        iPhoneSE2: 2200,
        iPhoneSE3: 4400,
      },
    },
    {
      label: "FaceID",
      value: {
        iPhoneX: 1650,
        iPhoneXS: 2200,
        iPhoneXSMax: 2200,
        iPhoneXR: 2200,
        iPhone11: 3300,
        iPhone11Pro: 4400,
        iPhone11ProMax: 4400,
        iPhone12mini: 5500,
        iPhone12: 5500,
        iPhone12Pro: 6600,
        iPhone12ProMax: 6600,
        iPhone13mini: 16500,
        iPhone13: 16500,
        iPhone13Pro: 22000,
        iPhone13ProMax: 22000,
        iPhone14: 22000,
        iPhone14Plus: 22000,
        iPhone14Pro: 33000,
        iPhone14ProMax: 33000,
        iPhone15: 33000,
        iPhone15Plus: 33000,
        iPhone15Pro: 33000,
        iPhone15ProMax: 33000,
        iPhone16: 33000,
        iPhone16Plus: 33000,
        iPhone16Pro: 33000,
        iPhone16ProMax: 33000,
        iPhone16e: 33000,
      },
    },
  ],
  truetone: [
    { label: "あり", value: 0 },
    {
      label: "なし",
      value: {
        iPhone8: 1100,
        iPhone8Plus: 1100,
        iPhoneX: 1100,
        iPhoneXS: 1100,
        iPhoneXSMax: 1100,
        iPhoneXR: 1100,
        iPhone11: 1650,
        iPhone11Pro: 1650,
        iPhone11ProMax: 1650,
        iPhoneSE2: 1100,
        iPhone12mini: 2200,
        iPhone12: 2200,
        iPhone12Pro: 2200,
        iPhone12ProMax: 2200,
        iPhoneSE3: 1650,
        iPhone13mini: 3300,
        iPhone13: 3300,
        iPhone13Pro: 3300,
        iPhone13ProMax: 3300,
        iPhone14: 4400,
        iPhone14Plus: 4400,
        iPhone14Pro: 4400,
        iPhone14ProMax: 4400,
        iPhone15: 5500,
        iPhone15Plus: 5500,
        iPhone15Pro: 5500,
        iPhone15ProMax: 5500,
        iPhone16: 5500,
        iPhone16Plus: 5500,
        iPhone16Pro: 5500,
        iPhone16ProMax: 5500,
        iPhone16e: 5500,
      },
    },
  ],
}

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
  )
}

export default function App() {
  const [selectedModel, setSelectedModel] = useState(models[0])
  const [selectedRank, setSelectedRank] = useState(ranks[0])
  const [selectedCapacity, setSelectedCapacity] = useState(Object.keys(iPhoneData[models[0]][ranks[0]])[0])
  const [customAppraisalAmount, setCustomAppraisalAmount] = useState("")
  const [deductions, setDeductions] = useState({
    フレームの傷: 0,
    画面の傷: 0,
    ネットワーク利用制限: 0,
    カメラのシミ: 0,
    故障箇所: 0,
    Truetone: 0,
  })

  const { appraisalPrice, taxExclusivePrice, consumptionTax } = useMemo(() => {
    const basePrice =
      customAppraisalAmount !== ""
        ? Number(customAppraisalAmount)
        : iPhoneData[selectedModel][selectedRank][selectedCapacity]
    const totalDeduction = Object.values(deductions).reduce((sum, value) => sum + value, 0)
    const appraisalPrice = Math.max(0, basePrice - totalDeduction)
    const taxExclusivePrice = Math.floor(appraisalPrice / 1.1)
    const consumptionTax = appraisalPrice - taxExclusivePrice
    return { appraisalPrice, taxExclusivePrice, consumptionTax }
  }, [selectedModel, selectedRank, selectedCapacity, deductions, customAppraisalAmount])

  const handleDeductionChange = (key, value) => {
    setDeductions((prev) => ({ ...prev, [key]: Number(value) }))
  }

  const handleAppraisalAmountChange = (e) => {
    const value = e.target.value
    if (value === "" || /^\d+$/.test(value)) {
      setCustomAppraisalAmount(value)
    }
  }

  const renderSelect = (label, options, deductionKey) => (
    <FormControl key={deductionKey}>
      <FormLabel>{label}</FormLabel>
      <Select
        placeholder="選択してください"
        onChange={(e) => {
          const selectedOption = options.find((option) => option.label === e.target.value) || options[0]
          const deductionValue =
            typeof selectedOption.value === "object" ? selectedOption.value[selectedModel] || 0 : selectedOption.value
          handleDeductionChange(deductionKey, deductionValue)
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
  )

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
                setSelectedModel(e.target.value)
                setSelectedCapacity(Object.keys(iPhoneData[e.target.value][selectedRank])[0])
                setCustomAppraisalAmount("")
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
            <Select
              onChange={(e) => {
                setSelectedRank(e.target.value)
                setCustomAppraisalAmount("")
              }}
            >
              {ranks.map((rank) => (
                <option key={rank} value={rank}>
                  {rank}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>容量</FormLabel>
            <Select
              onChange={(e) => {
                setSelectedCapacity(e.target.value)
                setCustomAppraisalAmount("")
              }}
            >
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
          {renderSelect("フレームの傷", deductionOptions.frameScratch, "フレームの傷")}
          {renderSelect("画面の傷", deductionOptions.screenScratch, "画面の傷")}
          {renderSelect("ネットワーク利用制限", deductionOptions.networkLimitation, "ネットワーク利用制限")}
          {renderSelect("カメラのシミ", deductionOptions.cameraStain, "カメラのシミ")}
          {renderSelect("故障箇所", deductionOptions.malfunction, "故障箇所")}
          {renderSelect("Truetone", deductionOptions.truetone, "Truetone")}
        </Box>
        <Box mt={6} textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" color="green.500">
            端末買取金額: ¥{appraisalPrice.toLocaleString()}（税込）
          </Text>
          <Text fontSize="lg" mt={2}>
            ＊内訳＊
          </Text>
          <Text>税別金額: ¥{taxExclusivePrice.toLocaleString()}</Text>
          <Text>消費税（10%）: ¥{consumptionTax.toLocaleString()}</Text>
        </Box>
      </Box>
    </ErrorBoundary>
  )
}
