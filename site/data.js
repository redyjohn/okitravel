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
          time: "15:30",
          title: "還車",
          type: "car",
          locations: [
            { name: "加油站", maps: "https://maps.app.goo.gl/XzspLda4g3MhjovC6" }
          ],
          notes: [
            { text: "確認：ETC、加油、行李、車內物品" },
            { text: "務必於 15:30 前完成還車" }
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
      id: "souvenirs",
      title: "伴手禮",
      sections: [
        {
          title: "一、經典必買與強力推薦",
          items: [
            "辣味蝦餅：必買首選，使用沖繩泡盛辣椒製作，口感酥脆、蝦味濃郁，帶有微辣層次感",
            "花生豆腐 (Jimami Tofu)｜花商：口感極 Q 彈像麻吉，建議搭配甜醬油或黑糖蜜",
            "花生豆腐｜柳月（那霸機場限定）：質地介於麻吉與布丁之間，綿密紮實，醬油鹹度較重",
            "花生豆腐｜安安（唐吉訶德）：口感像布蕾般滑順，甜醬油醬汁獲得極高評價",
            "黑船 (Quolofune)：禮盒含黑糖蜂蜜蛋糕、黑糖紅豆銅鑼燒及波浪夾心餅乾，餅乾奶香十足且酥脆",
            "貓舌餅乾 (Langue de Chat)：海鹽製作、奶油夾心，鹹甜層次不輸白色戀人"
          ]
        },
        {
          title: "二、甜點與蛋糕類",
          items: [
            "古酒蜂蜜蛋糕（那霸機場限定）：濃郁泡盛酒香，屬於大人的成熟風味",
            "35 Coffee 蜂蜜蛋糕（許田休息站）：口感 Q 彈不乾，被譽為「最夢幻甜點」",
            "福砂屋（石垣島砂糖版）：底部有砂糖結晶，蛋糕體濕潤紮實",
            "紅薯塔｜御菓子御殿：沖繩經典名產，口感較乾，建議配茶食用",
            "紅薯塔｜黑薯塔：加入巧克力版本，但巧克力味會蓋過紅薯味",
            "雪鹽玉米片餅乾：蓬鬆空心感與鹹甜風味，非常受歡迎",
            "雪鹽吐司餅乾：蜂蜜蛋糕變乾後的口感，甜度較高",
            "melowch：多種口味磅蛋糕小方塊，包裝精美，適合送禮",
            "帆船巧克力 (Alfort)：沖繩限定紅薯口味，包裝上有迪士尼角色"
          ]
        },
        {
          title: "三、鹹食、零食與下酒菜",
          items: [
            "Calbee 海苔鹽薯塊：鹹度較高，非常涮嘴",
            "Calbee 沖繩限定洋芋片：「泡盛辣椒」（大人辣味）、「柑橘海鹽」（清爽）",
            "現炸紅玉紫薯條（國際通店）：現點現炸，外皮裹糖且紫薯香氣濃厚",
            "Orion 啤酒酵母堅果：調味偏重且帶咖哩味，非常優秀的下酒菜",
            "完鹽先背 (Sempai)：入口即化，有鹽味與梅子口味",
            "午餐肉 (Spam) 風味薯條：帶淡淡火腿培根香氣，評價較為普通"
          ]
        },
        {
          title: "四、文創與非食品類",
          items: [
            "三層用品 (Sanson Yohin)：手繪風格明信片、貼紙、磁鐵，及極受歡迎的客製化手作人偶",
            "Orion 周邊：Orion 燈籠、帆布袋等，可在國際通復古玩具店或專賣店挖掘",
            "Snoopy Surf Shop：Snoopy 與衝浪文化結合的限定服飾與周邊",
            "Habu Box (琉球)：與在地創作者合作、深具沖繩故事與文化特色的原創 T-shirt"
          ]
        },
        {
          title: "五、採買建議地點",
          items: [
            "國際通平和通／輔導通：適合挖掘特色小店、文創商品及復古玩具",
            "唐吉訶德（國際通店）：一樓為沖繩專屬伴手禮區，品項齊全且可一次退稅",
            "許田休息站：規模如大型超市，可買到市區較少見的地產與 35 Coffee 蛋糕",
            "那霸機場：古酒蛋糕、貓舌餅乾、柳月花生豆腐等熱門限定商品，建議回國前補貨"
          ]
        }
      ]
    },
    {
      id: "driving",
      title: "行車相關事項",
      items: [
        "租車相關資料／自駕注意事項（日本交通規則、道路標誌、停車、高速公路、Mapcode、加油站）"
      ],
      pdfPages: [30, 31, 32, 33, 34, 35]
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
