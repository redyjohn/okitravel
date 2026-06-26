const TRIP = {
  title: "2026 沖繩親子自駕旅行",
  dates: "2026.06.27 – 06.30",
  days: [
    {
      id: 1,
      label: "Day 1",
      date: "2026.06.27",
      subtitle: "抵達沖繩 → 名護休息日",
      accommodation: "名護（Biimata）",
      events: [
        {
          time: "15:45",
          title: "抵達那霸機場",
          type: "airport",
          links: [
            { label: "那霸機場", url: "https://maps.google.com/?q=Naha+Airport", type: "maps" }
          ]
        },
        {
          time: "16:30–17:30",
          title: "租車＋分車",
          type: "car",
          notes: [
            { text: "4 台車編組完成" },
            { text: "A車：導航｜B車：嬰兒優先｜C車：一般家庭｜D車：補給車" }
          ]
        },
        {
          time: "18:30",
          title: "前往名護",
          type: "transport",
          notes: [{ text: "車程：約 70–90 分鐘" }]
        },
        {
          time: "20:00",
          title: "飯店 Check-in",
          type: "hotel",
          links: [
            { label: "名護住宿", url: "https://maps.google.com/?q=1220-25-5+Biimata+Nago+Okinawa", type: "maps" }
          ]
        },
        {
          time: "晚餐",
          title: "晚餐（2選1）",
          type: "food",
          recommendations: [
            { name: "🥇 A&W 名護店（推薦）", hours: "沖繩限定速食、出餐快、適合親子團" },
            { name: "🥈 便利商店備案", hours: "Lawson / FamilyMart" }
          ],
          links: [
            { label: "A&W 名護店", url: "https://maps.google.com/?q=A%26W+Nago", type: "maps" }
          ]
        },
        {
          time: "地陪推薦",
          title: "🏆 地陪私房推薦",
          type: "food",
          recommendations: [
            { name: "A&W" },
            { name: "Yukino 食堂（阿古豬定食）", link: "https://maps.google.com/?q=Yukino+Shokudo+Nago" }
          ],
          notes: [
            { text: "🍦 甜點：便利商店冰品" },
            { text: "🛍 必買：Orion Beer、沖繩泡麵" }
          ]
        }
      ]
    },
    {
      id: 2,
      label: "Day 2",
      date: "2026.06.28",
      subtitle: "北部經典（美麗海＋古宇利）",
      accommodation: "名護（Biimata）",
      events: [
        { time: "09:30", title: "出發", type: "transport" },
        {
          time: "10:00",
          title: "沖繩美麗海水族館",
          type: "attraction",
          hours: "08:30–18:30",
          parking: { name: "P7 / P8 停車場", maps: "https://maps.google.com/?q=Okinawa+Churaumi+Aquarium" },
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=Okinawa+Churaumi+Aquarium", type: "maps" },
            { label: "官方網站", url: "https://churaumi.okinawa/", type: "external" }
          ],
          notes: [{ text: "停留：3 小時" }]
        },
        {
          time: "13:00",
          title: "午餐（2選1）",
          type: "food",
          recommendations: [
            { name: "🥇 Captain Kangaroo", hours: "北部第一漢堡" },
            { name: "🥈 Jef（備案）", hours: "苦瓜漢堡" }
          ],
          links: [
            { label: "Captain Kangaroo", url: "https://maps.google.com/?q=Captain+Kangaroo+Hamburger", type: "maps" },
            { label: "Jef", url: "https://maps.google.com/?q=Jef+Okinawa", type: "maps" }
          ]
        },
        {
          time: "14:30",
          title: "備瀨福木林道",
          type: "attraction",
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=Bise+Fukugi+Tree+Road", type: "maps" }
          ],
          notes: [{ text: "停留：40–60 分鐘" }]
        },
        {
          time: "16:00",
          title: "古宇利島",
          type: "attraction",
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=Kouri+Island", type: "maps" }
          ],
          recommendations: [
            { name: "古宇利大橋" },
            { name: "海灘拍照" }
          ]
        },
        {
          time: "18:30",
          title: "回名護",
          type: "rest",
          links: [
            { label: "名護住宿", url: "https://maps.google.com/?q=1220-25-5+Biimata+Nago+Okinawa", type: "maps" }
          ]
        },
        {
          time: "地陪推薦",
          title: "🏆 地陪推薦",
          type: "food",
          recommendations: [
            { name: "Captain Kangaroo" },
            { name: "Shrimp Wagon（蝦蝦飯）", link: "https://maps.google.com/?q=Shrimp+Wagon+Kouri" },
            { name: "Jef" }
          ],
          notes: [
            { text: "🍦 甜點：天知群水蜜桃冰", link: "https://maps.google.com/?q=Amachika+Okinawa" },
            { text: "🛍 必買：許田休息站（黑糖 / 紫芋 / 雪鹽）", link: "https://maps.google.com/?q=Kyoda+Michi-no-Eki" }
          ]
        }
      ]
    },
    {
      id: 3,
      label: "Day 3",
      date: "2026.06.29",
      subtitle: "PARCO CITY → 北谷 → 美國村",
      accommodation: "北谷",
      events: [
        { time: "09:30", title: "退房", type: "hotel" },
        {
          time: "11:00",
          title: "PARCO CITY",
          type: "shopping",
          parking: { name: "大型停車場", maps: "https://maps.google.com/?q=San-A+PARCO+CITY+parking" },
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=San-A+PARCO+CITY", type: "maps" }
          ],
          shops: ["GU", "UNIQLO", "Loft", "Hands"],
          notes: [{ text: "停留：3.5–4 小時" }]
        },
        {
          time: "12:00–13:00",
          title: "午餐（2選1）",
          type: "food",
          recommendations: [
            { name: "🥇 Yappari Steak", hours: "牛排＋飯湯吃到飽" },
            { name: "🥈 美食街備案" }
          ],
          links: [
            { label: "Yappari Steak", url: "https://maps.google.com/?q=Yappari+Steak+Chatan", type: "maps" }
          ]
        },
        {
          time: "15:30",
          title: "北谷 Check-in",
          type: "hotel",
          links: [
            { label: "北谷", url: "https://maps.google.com/?q=Chatan+Okinawa", type: "maps" }
          ]
        },
        {
          time: "16:30",
          title: "美國村",
          type: "shopping",
          parking: { name: "Depot Island 停車", maps: "https://maps.google.com/?q=Depot+Island+Parking" },
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=American+Village+Okinawa", type: "maps" }
          ],
          notes: [{ text: "🌅 夕陽時間：17:30–18:30" }]
        },
        {
          time: "晚餐",
          title: "晚餐（2選1）",
          type: "food",
          recommendations: [
            { name: "🥇 Blue Ocean Steak" },
            { name: "🥈 A&W（快速備案）" }
          ],
          links: [
            { label: "Blue Ocean Steak", url: "https://maps.google.com/?q=Blue+Ocean+Steak+Okinawa", type: "maps" }
          ]
        },
        {
          time: "地陪推薦",
          title: "🏆 地陪推薦",
          type: "food",
          recommendations: [
            { name: "Yappari Steak" },
            { name: "Pork Tamago Onigiri", link: "https://maps.google.com/?q=Pork+Tamago+Onigiri+American+Village" },
            { name: "A&W" }
          ],
          notes: [
            { text: "🍦 甜點：Blue Seal", link: "https://maps.google.com/?q=Blue+Seal+American+Village" },
            { text: "🛍 必買：PARCO CITY（GU / UNIQLO / Loft / Hands）" }
          ]
        }
      ]
    },
    {
      id: 4,
      label: "Day 4",
      date: "2026.06.30",
      subtitle: "國際通 → iias → 回程",
      accommodation: null,
      events: [
        { time: "09:30", title: "退房", type: "hotel" },
        {
          time: "10:20",
          title: "國際通（核心行程）",
          type: "shopping",
          parking: { name: "みどり駐車場", maps: "https://maps.google.com/?q=みどり駐車場+那霸" },
          links: [
            { label: "國際通", url: "https://maps.google.com/?q=Kokusai+Dori+Naha", type: "maps" }
          ],
          shops: [
            "平和通", "牧志市場", "國際通主街", "唐吉訶德",
            "Blue Seal", "Jack's Steak House"
          ]
        },
        {
          time: "午餐",
          title: "午餐（2選1）",
          type: "food",
          recommendations: [
            { name: "🥇 Jack's Steak House" },
            { name: "🥈 Shimabuta（島豚屋）" }
          ],
          links: [
            { label: "Jack's Steak House", url: "https://maps.google.com/?q=Jack's+Steak+House+Naha", type: "maps" },
            { label: "Shimabuta", url: "https://maps.google.com/?q=Shimabuta+Naha", type: "maps" }
          ]
        },
        {
          time: "14:20",
          title: "iias Okinawa Toyosaki",
          type: "shopping",
          links: [
            { label: "Google Maps", url: "https://maps.google.com/?q=iias+Okinawa+Toyosaki", type: "maps" }
          ]
        },
        {
          time: "16:00",
          title: "還車",
          type: "car",
          notes: [
            { text: "確認：ETC、加油、行李、車內物品" },
            { text: "務必於 16:00 前完成還車" }
          ]
        },
        {
          time: "19:00",
          title: "返台 ✈️",
          type: "flight",
          links: [
            { label: "那霸機場", url: "https://maps.google.com/?q=Naha+Airport", type: "maps" }
          ]
        },
        {
          time: "地陪推薦",
          title: "🏆 地陪推薦",
          type: "food",
          recommendations: [
            { name: "Shimabuta" },
            { name: "Eibe 沖繩麵", link: "https://maps.google.com/?q=Eibe+Okinawa+Soba" },
            { name: "Jack's Steak House" },
            { name: "屋台村" }
          ],
          notes: [
            { text: "🍦 甜點：鹽屋冰淇淋、Maxi 布丁、黑糖 en" },
            { text: "🛍 必買：Calbee Plus、琉球牛乳餅、南島、花生豆腐" }
          ]
        }
      ]
    }
  ],
  notices: [
    {
      id: "overview",
      title: "行程總覽",
      items: [
        "去程：2026/06/27 13:10 → 15:45 那霸",
        "回程：2026/06/30 19:00",
        "住宿：6/27–6/29 名護、6/29 北谷",
        "人數：11 大人 + 4 嬰兒｜交通：4 台自駕",
        "風格：購物 + 美食 + 親子慢旅"
      ]
    },
    {
      id: "strategy",
      title: "核心策略",
      items: [
        "每天 2～4 個核心點",
        "減少集合次數（4 台車）",
        "每天至少 1 間地陪推薦餐廳",
        "美國村安排夕陽＋夜景",
        "最後一天：國際通 → iias → 機場（順向不回頭）"
      ]
    },
    {
      id: "caravan",
      title: "車隊規則",
      sections: [
        { title: "A 車", items: ["領隊導航"] },
        { title: "B 車", items: ["嬰兒優先"] },
        { title: "C 車", items: ["一般家庭"] },
        { title: "D 車", items: ["補位＋採買"] }
      ]
    },
    {
      id: "meeting",
      title: "集合規則",
      items: [
        "停車場 → 主入口 → 固定集合點",
        "每站集合 10 分鐘",
        "景點停車後請先集合再開始自由活動",
        "餐廳排隊超過 30 分鐘，啟用備案"
      ]
    },
    {
      id: "restaurants",
      title: "地陪必吃清單",
      sections: [
        {
          title: "🥇 必吃（TOP）",
          items: ["Captain Kangaroo", "Yappari Steak", "Shimabuta", "Jack's Steak House", "Shrimp Wagon"]
        },
        {
          title: "🥈 推薦",
          items: ["A&W", "Jef", "Eibe", "Pork Tamago Onigiri", "Yukino 食堂"]
        },
        {
          title: "🍦 甜點",
          items: ["Blue Seal", "Maxi 布丁", "鹽屋", "天知群", "黑糖 en"]
        }
      ]
    },
    {
      id: "parking",
      title: "停車攻略",
      items: [
        "國際通：みどり駐車場（四台車停同一區，步行 3–5 分鐘）",
        "PARCO CITY：超大型停車場，最適合團體",
        "美國村：Depot Island 海邊停車，夜景方便"
      ],
      links: [
        { label: "みどり駐車場", url: "https://maps.google.com/?q=みどり駐車場+那霸" },
        { label: "PARCO CITY 停車", url: "https://maps.google.com/?q=San-A+PARCO+CITY+parking" },
        { label: "美國村停車", url: "https://maps.google.com/?q=Depot+Island+Parking" }
      ]
    },
    {
      id: "rating",
      title: "地陪評分系統",
      items: [
        "🥇 必吃（不能錯過）",
        "🥈 推薦（很值得）",
        "🥉 有時間再去"
      ]
    },
    {
      id: "entry",
      title: "入境",
      links: [
        { label: "Visit Japan Web", url: "https://services.digital.go.jp/zh-cmn-hant/visit-japan-web/" }
      ]
    }
  ]
};
