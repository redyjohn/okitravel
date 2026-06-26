const TRIP = {
  title: "2026 沖繩親子自駕旅行",
  dates: "2026.06.27 – 06.30",
  days: [
    {
      id: 1,
      label: "Day 1",
      date: "2026.06.27",
      subtitle: "抵達沖繩・前往名護住宿",
      accommodation: "名護（Biimata）",
      events: [
        {
          time: "13:10",
          title: "台中機場起飛",
          type: "flight",
          notes: [{ text: "抵達沖繩：15:45" }]
        },
        {
          time: "15:45",
          title: "抵達那霸機場",
          type: "airport",
          links: [
            { label: "那霸機場", url: "https://maps.google.com/?q=Naha+Airport", type: "maps" }
          ]
        },
        {
          time: "15:45–17:30",
          title: "入境、領行李、租車",
          type: "car",
          links: [
            { label: "那霸機場", url: "https://maps.google.com/?q=Naha+Airport", type: "maps" }
          ]
        },
        {
          time: "17:30–18:00",
          title: "車隊集合、設定導航",
          type: "car",
          notes: [
            { text: "每台車皆請設定相同導航目的地" },
            { text: "A 車：領隊・導航｜B 車：嬰兒優先｜C 車：一般家庭｜D 車：採買補位" }
          ]
        },
        {
          time: "18:00",
          title: "出發前往名護",
          type: "transport"
        },
        {
          time: "20:00",
          title: "抵達住宿、Check in",
          type: "hotel",
          links: [
            { label: "名護住宿", url: "https://maps.google.com/?q=1220-25-5+Biimata+Nago+Okinawa", type: "maps" }
          ]
        },
        {
          time: "20:30",
          title: "便利商店採買",
          type: "shopping",
          notes: [
            { text: "第一天不建議安排景點，建議採買：早餐、飲料、消夜、嬰兒用品" }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "Day 2",
      date: "2026.06.28",
      subtitle: "北部人氣景點一日遊",
      accommodation: "名護（Biimata）",
      events: [
        {
          time: "09:30",
          title: "飯店出發",
          type: "transport"
        },
        {
          time: "10:00–13:00",
          title: "沖繩美麗海水族館",
          type: "attraction",
          hours: "08:30–18:30（最後入館 17:30）",
          parking: { name: "P7 / P8 停車場", maps: "https://maps.google.com/?q=Okinawa+Churaumi+Aquarium" },
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=Okinawa+Churaumi+Aquarium", type: "maps" },
            { label: "官方網站", url: "https://churaumi.okinawa/", type: "external" }
          ],
          notes: [{ text: "建議停留約 3 小時" }]
        },
        {
          time: "13:15",
          title: "午餐",
          type: "food",
          recommendations: [
            { name: "Captain Kangaroo Hamburger", hours: "若排隊超過 30 分鐘可改便利商店" }
          ],
          links: [
            { label: "Captain Kangaroo Hamburger", url: "https://maps.google.com/?q=Captain+Kangaroo+Hamburger+Okinawa", type: "maps" }
          ]
        },
        {
          time: "14:40–15:30",
          title: "備瀨福木林道",
          type: "attraction",
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=Bise+Fukugi+Tree+Road", type: "maps" }
          ],
          notes: [
            { text: "建議停留 45 分鐘" },
            { text: "適合推嬰兒車、散步、拍照" }
          ]
        },
        {
          time: "15:50–17:20",
          title: "古宇利島",
          type: "attraction",
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=Kouri+Island", type: "maps" }
          ],
          recommendations: [
            { name: "古宇利大橋" },
            { name: "古宇利海灘" }
          ],
          notes: [{ text: "建議停留 90 分鐘" }]
        },
        {
          time: "18:20",
          title: "返回名護住宿",
          type: "rest",
          links: [
            { label: "名護住宿", url: "https://maps.google.com/?q=1220-25-5+Biimata+Nago+Okinawa", type: "maps" }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "Day 3",
      date: "2026.06.29",
      subtitle: "名護 → 北谷 → 美國村",
      accommodation: "北谷",
      events: [
        {
          time: "09:30",
          title: "退房",
          type: "hotel"
        },
        {
          time: "10:50–13:20",
          title: "San-A PARCO CITY",
          type: "shopping",
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=San-A+PARCO+CITY", type: "maps" }
          ],
          shops: ["GU", "UNIQLO", "Loft", "Hands", "San-A 超市"],
          notes: [{ text: "建議停留約 2.5 小時" }]
        },
        {
          time: "13:20–14:10",
          title: "午餐（PARCO CITY 美食街）",
          type: "food"
        },
        {
          time: "15:00–16:00",
          title: "Sports Depo",
          type: "shopping",
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=Sports+Depo+Ameku", type: "maps" }
          ],
          shops: ["Nike", "adidas", "Mizuno", "Yonex", "Columbia"],
          notes: [{ text: "建議停留 1 小時" }]
        },
        {
          time: "16:30",
          title: "北谷住宿 Check in",
          type: "hotel"
        },
        {
          time: "17:00–21:00",
          title: "美國村",
          type: "shopping",
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=American+Village+Okinawa", type: "maps" }
          ],
          recommendations: [
            { name: "看夕陽" },
            { name: "夜景" },
            { name: "特色小店" },
            { name: "Blue Seal" },
            { name: "Starbucks" }
          ],
          notes: [{ text: "建議停留 4 小時" }]
        },
        {
          time: "晚餐",
          title: "晚餐",
          type: "food",
          recommendations: [
            { name: "Blue Ocean Steak（推薦）" },
            { name: "A&W 美浜店（備案）" }
          ],
          links: [
            { label: "Blue Ocean Steak", url: "https://maps.google.com/?q=Blue+Ocean+Steak+Okinawa", type: "maps" },
            { label: "A&W 美浜店", url: "https://maps.google.com/?q=A%26W+Mihama", type: "maps" }
          ]
        }
      ]
    },
    {
      id: 4,
      label: "Day 4",
      date: "2026.06.30",
      subtitle: "國際通 → iias → 回台灣",
      accommodation: null,
      events: [
        {
          time: "19:00",
          title: "航班起飛返回台灣",
          type: "flight",
          notes: [
            { text: "建議 16:00 完成還車、17:00 抵達機場" }
          ]
        },
        {
          time: "09:30",
          title: "退房",
          type: "hotel"
        },
        {
          time: "10:00",
          title: "出發前往國際通",
          type: "transport"
        },
        {
          time: "10:45–13:00",
          title: "國際通",
          type: "shopping",
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=Kokusai+Dori+Naha", type: "maps" }
          ],
          shops: [
            "平和通商店街", "第一牧志公設市場", "唐吉訶德", "Blue Seal",
            "Orion Store", "琉球玻璃", "沖繩限定伴手禮"
          ]
        },
        {
          time: "13:00–14:00",
          title: "午餐",
          type: "food",
          recommendations: [
            { name: "Jack's Steak House（推薦一）" },
            { name: "Yunangi（推薦二）" }
          ],
          links: [
            { label: "Jack's Steak House", url: "https://maps.google.com/?q=Jack's+Steak+House+Naha", type: "maps" },
            { label: "Yunangi", url: "https://maps.google.com/?q=Yunangi+Naha", type: "maps" }
          ]
        },
        {
          time: "14:20–15:40",
          title: "iias Okinawa Toyosaki",
          type: "shopping",
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=iias+Okinawa+Toyosaki", type: "maps" }
          ],
          shops: ["GU", "UNIQLO", "藥妝", "超市", "ABC-MART"],
          notes: [{ text: "建議停留約 1 小時，最後補貨" }]
        },
        {
          time: "15:40",
          title: "前往租車公司",
          type: "car"
        },
        {
          time: "16:00",
          title: "還車",
          type: "car",
          notes: [
            { text: "確認：ETC、加油、行李、車內物品" },
            { text: "返程當天務必於 16:00 前完成還車，避免影響航班" }
          ]
        },
        {
          time: "16:30",
          title: "接駁車前往機場",
          type: "transport"
        },
        {
          time: "17:00",
          title: "抵達那霸機場",
          type: "airport",
          links: [
            { label: "那霸機場", url: "https://maps.google.com/?q=Naha+Airport", type: "maps" }
          ],
          notes: [
            { text: "建議：報到、托運、免稅店、最後採買" }
          ]
        },
        {
          time: "19:00",
          title: "返回台灣 ✈️",
          type: "flight"
        }
      ]
    }
  ],
  notices: [
    {
      id: "caravan",
      title: "車隊集合規則",
      sections: [
        {
          title: "A 車",
          items: ["領隊", "導航"]
        },
        {
          title: "B 車",
          items: ["嬰兒優先"]
        },
        {
          title: "C 車",
          items: ["一般家庭"]
        },
        {
          title: "D 車",
          items: ["採買補位"]
        }
      ]
    },
    {
      id: "meeting",
      title: "集合原則",
      items: [
        "每個景點皆以停車場、正門入口、固定集合點為唯一集合位置",
        "每站集合時間約 10 分鐘",
        "景點停車後請先集合再開始自由活動",
        "若餐廳排隊超過 30 分鐘，直接啟用備案餐廳或便利商店，不影響整體行程"
      ]
    },
    {
      id: "general",
      title: "行程注意事項",
      items: [
        "旅遊日期：2026/06/27（六）－2026/06/30（二）",
        "人數：11 位大人、4 位嬰兒",
        "交通方式：4 台自駕",
        "住宿：6/27－6/29 名護、6/29 北谷",
        "每台車皆請設定相同導航目的地",
        "返程當天務必於 16:00 前完成還車，避免影響 19:00 航班"
      ]
    },
    {
      id: "entry",
      title: "入境注意事項",
      links: [
        { label: "Visit Japan Web", url: "https://services.digital.go.jp/zh-cmn-hant/visit-japan-web/" },
        { label: "臺灣入境查詢", url: "https://www.immigration.gov.tw/" }
      ]
    },
    {
      id: "car",
      title: "租車／自駕注意事項",
      items: [
        "如發生事故，必須第一時間在現場如實通報公司並報警取得事故證明書",
        "還車前需確認 ETC、加油、行李、車內物品",
        "還車前需入滿油並保留收據"
      ]
    },
    {
      id: "flight",
      title: "航班資訊",
      items: [
        "去程：台中機場 13:10 起飛，抵達沖繩 15:45",
        "回程：那霸機場 19:00 起飛返回台灣",
        "建議 16:00 完成還車、17:00 抵達機場"
      ],
      links: [
        { label: "台中機場", url: "https://www.google.com/maps/search/?api=1&query=%E8%87%BA%E4%B8%AD%E5%9C%8B%E9%9A%9B%E6%A9%9F%E5%A0%B4", type: "maps" },
        { label: "那霸機場", url: "https://maps.google.com/?q=Naha+Airport", type: "maps" }
      ]
    }
  ]
};
