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
      "256GB": 12600,
      "64GB": 11700
    },
    "B": {
      "256GB": 6000,
      "64GB": 4800
    },
    "C": {
      "256GB": 2500,
      "64GB": 1600
    },
    "D": {
      "256GB": 1500,
      "64GB": 600
    }
  },
  "iPhoneXS": {
    "A": {
      "512GB": 17100,
      "256GB": 16200,
      "64GB": 15300
    },
    "B": {
      "512GB": 12400,
      "256GB": 11000,
      "64GB": 8400
    },
    "C": {
      "512GB": 6700,
      "256GB": 4400,
      "64GB": 2800
    },
    "D": {
      "512GB": 2700,
      "256GB": 1400,
      "64GB": 800
    }
  },
  "iPhoneXSMax": {
    "A": {
      "512GB": 24000,
      "256GB": 21000,
      "64GB": 19000
    },
    "B": {
      "512GB": 15800,
      "256GB": 14900,
      "64GB": 12400
    },
    "C": {
      "512GB": 9000,
      "256GB": 8100,
      "64GB": 6600
    },
    "D": {
      "512GB": 4000,
      "256GB": 3100,
      "64GB": 1600
    }
  },
  "iPhoneXR": {
    "A": {
      "256GB": 15300,
      "128GB": 13500,
      "64GB": 12600
    },
    "B": {
      "256GB": 9600,
      "128GB": 7100,
      "64GB": 6400
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
      "256GB": 28000,
      "128GB": 25000,
      "64GB": 23000
    },
    "B": {
      "256GB": 14800,
      "128GB": 12900,
      "64GB": 9900
    },
    "C": {
      "256GB": 11900,
      "128GB": 10400,
      "64GB": 8200
    },
    "D": {
      "256GB": 4900,
      "128GB": 4400,
      "64GB": 2200
    }
  },
  "iPhone11Pro": {
    "A": {
      "512GB": 32000,
      "256GB": 29000,
      "64GB": 27000
    },
    "B": {
      "512GB": 22400,
      "256GB": 19900,
      "64GB": 12900
    },
    "C": {
      "512GB": 11200,
      "256GB": 9000,
      "64GB": 7100
    },
    "D": {
      "512GB": 10000,
      "256GB": 7000,
      "64GB": 5000
    }
  },
  "iPhone11ProMax": {
    "A": {
      "512GB": 38000,
      "256GB": 34000,
      "64GB": 28000
    },
    "B": {
      "512GB": 25100,
      "256GB": 22400,
      "64GB": 19100
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
      "256GB": 5100,
      "128GB": 4400,
      "64GB": 2400
    },
    "D": {
      "256GB": 3100,
      "128GB": 2900,
      "64GB": 900
    }
  },
  "iPhone12mini": {
    "A": {
      "256GB": 29000,
      "128GB": 26000,
      "64GB": 23000
    },
    "B": {
      "256GB": 17000,
      "128GB": 14000,
      "64GB": 12900
    },
    "C": {
      "256GB": 8000,
      "128GB": 6000,
      "64GB": 3500
    },
    "D": {
      "256GB": 6000,
      "128GB": 4000,
      "64GB": 2500
    }
  },
  "iPhone12": {
    "A": {
      "256GB": 30600,
      "128GB": 24000,
      "64GB": 25200
    },
    "B": {
      "256GB": 19900,
      "128GB": 18700,
      "64GB": 15100
    },
    "C": {
      "256GB": 11200,
      "128GB": 10500,
      "64GB": 7200
    },
    "D": {
      "256GB": 3200,
      "128GB": 2500,
      "64GB": 1200
    }
  },
  "iPhone12Pro": {
    "A": {
      "512GB": 44600,
      "256GB": 37000,
      "128GB": 33200
    },
    "B": {
      "512GB": 30600,
      "256GB": 25900,
      "128GB": 22000
    },
    "C": {
      "512GB": 18400,
      "256GB": 15400,
      "128GB": 14700
    },
    "D": {
      "512GB": 9400,
      "256GB": 7400,
      "128GB": 6700
    }
  },
  "iPhone12ProMax": {
    "A": {
      "512GB": 55000,
      "256GB": 49000,
      "128GB": 44000
    },
    "B": {
      "512GB": 37400,
      "256GB": 34100,
      "128GB": 29900
    },
    "C": {
      "512GB": 27000,
      "256GB": 26100,
      "128GB": 24300
    },
    "D": {
      "512GB": 12000,
      "256GB": 11100,
      "128GB": 7300
    }
  },
  "iPhoneSE3": {
    "A": {
      "256GB": 39200,
      "128GB": 36000,
      "64GB": 32200
    },
    "B": {
      "256GB": 29100,
      "128GB": 15700,
      "64GB": 13400
    },
    "C": {
      "256GB": 17000,
      "128GB": 13100,
      "64GB": 8800
    },
    "D": {
      "256GB": 9000,
      "128GB": 6100,
      "64GB": 3800
    }
  },
  "iPhone13mini": {
    "A": {
      "512GB": 50000,
      "256GB": 45000,
      "128GB": 38000
    },
    "B": {
      "512GB": 33000,
      "256GB": 29000,
      "128GB": 22700
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
      "512GB": 44100,
      "256GB": 35200,
      "128GB": 32000
    },
    "B": {
      "512GB": 34100,
      "256GB": 29900,
      "128GB": 28200
    },
    "C": {
      "512GB": 22500,
      "256GB": 19500,
      "128GB": 17800
    },
    "D": {
      "512GB": 14500,
      "256GB": 9500,
      "128GB": 7800
    }
  },
  "iPhone13Pro": {
    "A": {
      "1TB": 65000,
      "512GB": 59000,
      "256GB": 57000,
      "128GB": 55000
    },
    "B": {
      "1TB": 44900,
      "512GB": 41600,
      "256GB": 39900,
      "128GB": 37400
    },
    "C": {
      "1TB": 32400,
      "512GB": 28900,
      "256GB": 26400,
      "128GB": 24000
    },
    "D": {
      "1TB": 22400,
      "512GB": 18900,
      "256GB": 16400,
      "128GB": 14000
    }
  },
  "iPhone13ProMax": {
    "A": {
      "1TB": 80000,
      "512GB": 76000,
      "256GB": 71000,
      "128GB": 69000
    },
    "B": {
      "1TB": 56500,
      "512GB": 52400,
      "256GB": 49900,
      "128GB": 48200
    },
    "C": {
      "1TB": 36000,
      "512GB": 31500,
      "256GB": 29800,
      "128GB": 28000
    },
    "D": {
      "1TB": 16000,
      "512GB": 16500,
      "256GB": 13800,
      "128GB": 12000
    }
  },
  "iPhone14": {
    "A": {
      "512GB": 72200,
      "256GB": 64800,
      "128GB": 52000
    },
    "B": {
      "512GB": 41600,
      "256GB": 39300,
      "128GB": 35100
    },
    "C": {
      "512GB": 28900,
      "256GB": 27200,
      "128GB": 24600
    },
    "D": {
      "512GB": 13900,
      "256GB": 12200,
      "128GB": 9600
    }
  },
  "iPhone14Plus": {
    "A": {
      "512GB": 65000,
      "256GB": 51300,
      "128GB": 48600
    },
    "B": {
      "512GB": 50700,
      "256GB": 44100,
      "128GB": 41600
    },
    "C": {
      "512GB": 35000,
      "256GB": 29700,
      "128GB": 27000
    },
    "D": {
      "512GB": 17000,
      "256GB": 14700,
      "128GB": 12000
    }
  },
  "iPhone14Pro": {
    "A": {
      "1TB": 76500,
      "512GB": 68400,
      "256GB": 61200,
      "128GB": 56700
    },
    "B": {
      "1TB": 62800,
      "512GB": 56500,
      "256GB": 49500,
      "128GB": 43600
    },
    "C": {
      "1TB": 43300,
      "512GB": 36000,
      "256GB": 35200,
      "128GB": 31200
    },
    "D": {
      "1TB": 45000,
      "512GB": 21000,
      "256GB": 20200,
      "128GB": 16200
    }
  },
  "iPhone14ProMax": {
    "A": {
      "1TB": 78300,
      "512GB": 75600,
      "256GB": 72900,
      "128GB": 68400
    },
    "B": {
      "1TB": 63600,
      "512GB": 60500,
      "256GB": 53200,
      "128GB": 53400
    },
    "C": {
      "1TB": 50100,
      "512GB": 46700,
      "256GB": 40800,
      "128GB": 37600
    },
    "D": {
      "1TB": 30100,
      "512GB": 26700,
      "256GB": 25800,
      "128GB": 17600
    }
  },
  "iPhone15": {
    "A": {
      "512GB": 87400,
      "256GB": 75600,
      "128GB": 66600
    },
    "B": {
      "512GB": 60700,
      "256GB": 55700,
      "128GB": 49900
    },
    "C": {
      "512GB": 44100,
      "256GB": 39600,
      "128GB": 35100
    },
    "D": {
      "512GB": 29100,
      "256GB": 24600,
      "128GB": 20100
    }
  },
  "iPhone15Plus": {
    "A": {
      "512GB": 105000,
      "256GB": 89100,
      "128GB": 81000
    },
    "B": {
      "512GB": 63200,
      "256GB": 56500,
      "128GB": 47100
    },
    "C": {
      "512GB": 47700,
      "256GB": 44100,
      "128GB": 36000
    },
    "D": {
      "512GB": 29700,
      "256GB": 29100,
      "128GB": 21000
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
      "1TB": 70300,
      "512GB": 62900,
      "256GB": 59500,
      "128GB": 54500
    },
    "C": {
      "1TB": 55200,
      "512GB": 49600,
      "256GB": 44800,
      "128GB": 40800
    },
    "D": {
      "1TB": 25200,
      "512GB": 19600,
      "256GB": 24800,
      "128GB": 10800
    }
  },
  "iPhone15ProMax": {
    "A": {
      "1TB": 143100,
      "512GB": 136800,
      "256GB": 126900
    },
    "B": {
      "1TB": 85300,
      "512GB": 77800,
      "256GB": 72000
    },
    "C": {
      "1TB": 61600,
      "512GB": 60000,
      "256GB": 56800
    },
    "D": {
      "1TB": 31600,
      "512GB": 30000,
      "256GB": 26800
    }
  },
  "iPhone16": {
    "A": {
      "512GB": 108300,
      "256GB": 97200,
      "128GB": 85500
    },
    "B": {
      "512GB": 74500,
      "256GB": 67800,
      "128GB": 56700
    },
    "C": {
      "512GB": 50400,
      "256GB": 46400,
      "128GB": 40800
    },
    "D": {
      "512GB": 35400,
      "256GB": 31400,
      "128GB": 25800
    }
  },
  "iPhone16Plus": {
    "A": {
      "512GB": 100700,
      "256GB": 90000,
      "128GB": 76500
    },
    "B": {
      "512GB": 80500,
      "256GB": 74800,
      "128GB": 65400
    },
    "C": {
      "512GB": 60000,
      "256GB": 53000,
      "128GB": 46000
    },
    "D": {
      "512GB": 45000,
      "256GB": 38000,
      "128GB": 31000
    }
  },
  "iPhone16Pro": {
    "A": {
      "1TB": 155200,
      "512GB": 143200,
      "256GB": 126400,
      "128GB": 109600
    },
    "B": {
      "1TB": 99500,
      "512GB": 92400,
      "256GB": 90300,
      "128GB": 77000
    },
    "C": {
      "1TB": 84000,
      "512GB": 77000,
      "256GB": 68000,
      "128GB": 63000
    },
    "D": {
      "1TB": 54000,
      "512GB": 47000,
      "256GB": 48000,
      "128GB": 33000
    }
  },
  "iPhone16ProMax": {
    "A": {
      "1TB": 193500,
      "512GB": 170100,
      "256GB": 148500
    },
    "B": {
      "1TB": 120300,
      "512GB": 110300,
      "256GB": 97800
    },
    "C": {
      "1TB": 97000,
      "512GB": 87000,
      "256GB": 77000
    },
    "D": {
      "1TB": 67000,
      "512GB": 57000,
      "256GB": 47000
    }
  },
  "iPhone16e": {
    "A": {
      "512GB": 79800,
      "256GB": 67500,
      "128GB": 57600
    },
    "B": {
      "512GB": 67500,
      "256GB": 64000,
      "128GB": 48000
    },
    "C": {
      "512GB": 43200,
      "256GB": 37800,
      "128GB": 29600
    },
    "D": {
      "512GB": 28200,
      "256GB": 22800,
      "128GB": 14600
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
