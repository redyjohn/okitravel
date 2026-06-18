const TRIP = {
  title: "日本－沖繩 5 天 4 夜遊",
  dates: "2026.06.26 – 06.30",
  days: [
    {
      id: 1,
      label: "Day 1",
      date: "2026.06.26",
      subtitle: "抵達那霸・國際通",
      accommodation: "海洋酒店",
      events: [
        {
          time: "03:50–04:30",
          title: "住家 → 臺中國際機場（RMQ）國際航廈",
          type: "transport",
          links: [
            { label: "臺中國際機場", url: "https://www.google.com/maps/search/?api=1&query=%E8%87%BA%E4%B8%AD%E5%9C%8B%E9%9A%9B%E6%A9%9F%E5%A0%B4", type: "maps" }
          ],
          notes: [
            { text: "Visit Japan Web（6/25 預定入境，最晚在抵達日本 6 小時以前完成登錄）", link: "https://vjw-lp.digital.go.jp/zh/" }
          ]
        },
        {
          time: "04:40–07:10",
          title: "辦理登機手續（提前 2.5 小時）",
          type: "airport",
          notes: [
            { text: "一般報到櫃檯於起飛前 2.5 小時開始受理，並於起飛前 45 分鐘截止" },
            { text: "使用 e-Gate 自動查驗通關服務（無需事先註冊）" },
            { text: "06:10 至登機門辦理登機手續" },
            { text: "最遲於起飛前 30 分鐘抵達登機門，登機門於起飛前 10 分鐘關閉" }
          ]
        },
        {
          time: "07:10–09:40",
          title: "飛行：臺中 → 那霸機場（OKA）",
          type: "flight",
          links: [
            { label: "那霸機場", url: "https://www.google.com/maps/search/?api=1&query=%E9%82%A3%E9%9C%B8%E6%A9%9F%E5%A0%B4", type: "maps" }
          ]
        },
        {
          time: "11:00–11:10",
          title: "5201314 Okinawa Rental Car（取車）",
          type: "car",
          links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=5201314%20Okinawa%20Rental%20Car", type: "maps" }
          ]
        },
        {
          time: "11:10–11:40",
          title: "驗車流程",
          type: "car",
          notes: [
            { text: "租車相關資料／自駕注意事項請參考注意事項頁" },
            { text: "豪華安心全保（一次事故為上限）" },
            { text: "如發生事故，必須第一時間在現場如實通報公司並報警取得事故證明書，方能受保" }
          ]
        },
        {
          time: "11:40–12:00",
          title: "停車場",
          type: "parking",
          locations: [
            { name: "國際通停車場", mapcode: "33 157 291*34", maps: "https://maps.app.goo.gl/95Sgb4BDBae4o4Vn6" },
            { name: "タイムズ那覇まちぐゎー駐車場", mapcode: "33 157 260*03", maps: "https://maps.app.goo.gl/HixD7ZixjPEgsnwE7" }
          ]
        },
        {
          time: "12:00–14:50",
          title: "第一牧志公設市場",
          type: "food",
          hours: "08:00–22:00",
          links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%E7%AC%AC%E4%B8%80%E7%89%A7%E5%BF%97%E5%85%AC%E8%A8%AD%E5%B8%82%E5%A0%B4%20%E6%B2%96%E7%B9%A9", type: "maps" }
          ],
          recommendations: [
            { name: "Pork Tamago Onigiri Makishi Market", hours: "07:00–20:00" },
            { name: "肉屋ししや", hours: "11:00–18:00" },
            { name: "福助玉子燒", hours: "07:30–19:30" }
          ]
        },
        {
          time: "14:50–15:00",
          title: "停車場",
          type: "parking",
          locations: [
            { name: "テクニカルパーク安里第１駐車場", mapcode: "33 158 647*27", maps: "https://maps.app.goo.gl/ZBCFQDQoHnp7HoT6A" },
            { name: "リパーク那覇国際通り安里三叉路駐車場", mapcode: "33 158 707*36", maps: "https://maps.app.goo.gl/Cx9uR493wvwS1Lmc6" }
          ]
        },
        {
          time: "15:00–15:30",
          title: "海洋酒店 Check in",
          type: "hotel",
          links: [
            { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%E6%B5%B7%E6%B4%8B%E9%85%92%E5%BA%97%20%E6%B2%96%E7%B9%A9%20%E9%82%A3%E9%9C%B8", type: "maps" }
          ],
          imagePages: [4]
        },
        {
          time: "15:30–16:00",
          title: "申請 TOKIO OMOTENASHI POLICY 東京海上日動日本旅遊保險",
          type: "insurance",
          notes: [
            { text: "保險期間：2026.06.27–30" },
            { text: "透過 Visit Japan Web 申請", link: "https://vjw-lp.digital.go.jp/zh/" }
          ]
        },
        {
          time: "16:00–19:40",
          title: "國際通商店街",
          type: "shopping",
          links: [
            { label: "國際通", url: "https://www.google.com/maps/search/?api=1&query=%E5%9C%8B%E9%9A%9B%E9%80%9A%20%E9%82%A3%E9%9C%B8", type: "maps" }
          ],
          shops: [
            { name: "Calbee+", hours: "10:00–21:00" },
            { name: "唐吉訶德", hours: "09:00–05:00" }
          ],
          recommendations: [
            { name: "暖暮拉麵", hours: "10:00–02:00" },
            { name: "一蘭", hours: "24 小時營業" },
            { name: "福木屋（年輪蛋糕）", hours: "10:00–20:00" }
          ]
        },
        {
          time: "19:40–20:00",
          title: "回住宿地點",
          type: "rest"
        },
        {
          time: "20:00–07:30",
          title: "休息充電",
          type: "rest"
        }
      ]
    },
    {
      id: 2,
      label: "Day 2",
      date: "2026.06.27",
      subtitle: "泊港・PARCO CITY・名護",
      accommodation: "Lieta Nakayama",
      events: [
        { time: "07:30–08:50", title: "起床整裝", type: "rest" },
        { time: "08:50–09:00", title: "海洋酒店 Check out", type: "hotel" },
        {
          time: "09:00–10:20",
          title: "泊港漁市場",
          type: "food",
          hours: "07:00–18:00",
          parking: { name: "泊いゆまち駐車場", mapcode: "33 216 085*14", maps: "https://maps.app.goo.gl/mFfeA5753tFXZdkJ6" },
          links: [{ label: "泊港漁市場", url: "https://www.google.com/maps/search/?api=1&query=%E6%B3%8A%E6%B8%AF%E6%BC%81%E5%B8%82%E5%A0%B4%20%E6%B2%96%E7%B9%A9", type: "maps" }]
        },
        {
          time: "10:20–14:30",
          title: "PARCO CITY",
          type: "shopping",
          hours: "10:00–22:00",
          parking: { name: "PARCO CITY 駐車場", mapcode: "33 339 002*38", maps: "https://maps.app.goo.gl/5hdreEuP84i1BPGy5" },
          links: [{ label: "PARCO CITY", url: "https://www.google.com/maps/search/?api=1&query=PARCO%20CITY%20%E6%B2%96%E7%B9%A9", type: "maps" }],
          shops: [
            "3COINS+plus（1F）", "Akachan（2F）", "ABC-MART（2F）", "H&M（2F）",
            "MUJI（3F）", "UNIQLO（3F）", "ABC-MART GRANDSTAGE（3F）"
          ]
        },
        {
          time: "14:30–17:00",
          title: "Lieta Nakayama Check in",
          type: "hotel",
          parking: { name: "飯店附設停車場", mapcode: "206 716 706*88", maps: "https://maps.app.goo.gl/eHQHRxx5HB9JtGYL8" },
          links: [{ label: "Lieta Nakayama", url: "https://www.google.com/maps/search/?api=1&query=Lieta%20Nakayama%20%E6%B2%96%E7%B9%A9", type: "maps" }],
          imagePages: [8]
        },
        {
          time: "17:00–21:00",
          title: "百年古家 大家 阿古豬",
          type: "food",
          hours: "11:00–15:30、17:30–21:00",
          parking: { name: "商家附設停車場", mapcode: "206 745 086*87", maps: "https://maps.app.goo.gl/8G2fdLW4at7kbPpr7" },
          links: [{ label: "百年古家 大家 阿古豬", url: "https://www.google.com/maps/search/?api=1&query=%E7%99%BE%E5%B9%B4%E5%8F%A4%E5%AE%B6%20%E5%A4%A7%E5%AE%B6%20%E9%98%BF%E5%8F%A4%E8%B1%AC%20%E6%B2%96%E7%B9%A9", type: "maps" }],
          imagePages: [9]
        },
        { time: "21:00–21:30", title: "回住宿地點", type: "rest" },
        { time: "21:30–07:30", title: "休息充電", type: "rest" }
      ]
    },
    {
      id: 3,
      label: "Day 3",
      date: "2026.06.28",
      subtitle: "美麗海水族館・名護市",
      accommodation: "Lieta Nakayama",
      events: [
        { time: "07:30–09:00", title: "起床整裝", type: "rest" },
        {
          time: "09:00–16:00",
          title: "美麗海水族館",
          type: "attraction",
          hours: "08:30–18:30",
          parking: {
            name: "美ら海北駐車場（立体駐車場）P7 立體停車場",
            mapcode: "553 075 767*43",
            tel: "0980-48-2741",
            maps: "https://maps.app.goo.gl/XEEM3LXRVagsfkjA8"
          },
          links: [
            { label: "美麗海水族館", url: "https://www.google.com/maps/search/?api=1&query=%E6%B2%96%E7%B9%A9%E7%BE%8E%E9%BA%97%E6%B5%B7%E6%B0%B4%E6%97%8F%E9%A4%A8", type: "maps" },
            { label: "官方網站", url: "https://churaumi.okinawa/", type: "external" }
          ],
          notes: [
            { text: "展覽範圍從 4F 開始，入口處設置於 3F（珊瑚大廳），入館後慢慢地往 2F、1F 參觀" }
          ],
          schedule: [
            { label: "鬼蝠魟餵食", time: "09:30" },
            { label: "鯨鯊餵食", time: "15:00、17:00" },
            { label: "海豚劇場－海豚秀", time: "10:30、11:30、13:00、15:00、17:00" }
          ],
          imagePages: [12, 13]
        },
        { time: "16:00–16:40", title: "回住宿地點", type: "rest" },
        {
          time: "17:30–19:30",
          title: "名護市隨意晃晃",
          type: "shopping",
          shops: [
            { name: "唐吉訶德", hours: "09:00–02:00" },
            { name: "AEON", hours: "08:00–23:00" }
          ],
          recommendations: [
            { name: "百年古家 大家 阿古豬", hours: "11:00–15:30、17:30–21:00" },
            { name: "燒肉本部牧場", hours: "11:30–22:00" },
            { name: "暖暮拉麵", hours: "10:00–00:00" }
          ],
          links: [{ label: "名護市", url: "https://www.google.com/maps/search/?api=1&query=%E5%90%8D%E8%AD%B7%E5%B8%82%20%E6%B2%96%E7%B9%A9", type: "maps" }]
        },
        { time: "19:30–20:00", title: "回住宿地點", type: "rest" },
        { time: "20:00–09:00", title: "休息充電", type: "rest" }
      ]
    },
    {
      id: 4,
      label: "Day 4",
      date: "2026.06.29",
      subtitle: "古宇利島・美國村",
      accommodation: "Terrace Garden Mihama Resort",
      events: [
        { time: "09:00–10:20", title: "起床整裝", type: "rest" },
        { time: "10:20–10:30", title: "Lieta Nakayama Check out", type: "hotel" },
        {
          time: "10:30–12:30",
          title: "古宇利蝦蝦飯",
          type: "food",
          hours: "11:00–16:00",
          parking: { name: "商家附設停車場", mapcode: "485 692 138*44", maps: "https://maps.app.goo.gl/uqe7brpmCiSnFhC97" },
          links: [{ label: "古宇利蝦蝦飯", url: "https://www.google.com/maps/search/?api=1&query=%E5%8F%A4%E5%AE%87%E5%88%A9%E8%9D%A6%E8%9D%A6%E9%A3%AF", type: "maps" }]
        },
        {
          time: "12:30–13:30",
          title: "古宇利大橋 南端觀景台",
          type: "attraction",
          parking: { name: "古宇利大橋駐車場", mapcode: "485 601 862*23", maps: "https://maps.app.goo.gl/SR742iQVXZkdr17R7" },
          links: [{ label: "古宇利大橋", url: "https://maps.app.goo.gl/SR742iQVXZkdr17R7", type: "maps" }]
        },
        {
          time: "13:30–16:00",
          title: "Terrace Garden Mihama Resort Check in",
          type: "hotel",
          parking: { name: "飯店附設停車場", mapcode: "33 526 581*87", maps: "https://maps.app.goo.gl/81LR7HAGxtLMf2TVA" },
          links: [{ label: "Terrace Garden Mihama Resort", url: "https://maps.app.goo.gl/81LR7HAGxtLMf2TVA", type: "maps" }],
          imagePages: [17]
        },
        {
          time: "16:00–21:50",
          title: "美國村",
          type: "shopping",
          hours: "10:00–22:00",
          parking: { name: "Depot Island D 駐車場", mapcode: "33 525 385*83", maps: "https://maps.app.goo.gl/9sb43W3naQECKz2T6" },
          links: [{ label: "美國村", url: "https://www.google.com/maps/search/?api=1&query=%E7%BE%8E%E5%9C%8B%E6%9D%91%20%E6%B2%96%E7%B9%A9", type: "maps" }],
          recommendations: [
            { name: "迴轉壽司市場 美浜店", hours: "11:30–14:00、16:30–21:50" },
            { name: "Benson's", hours: "10:00–21:00" },
            { name: "豬肉蛋飯糰 北谷店", hours: "07:00–20:00" }
          ],
          imagePages: [18]
        },
        { time: "21:50–22:00", title: "回住宿地點", type: "rest" },
        { time: "22:00–09:00", title: "休息充電", type: "rest" }
      ]
    },
    {
      id: 5,
      label: "Day 5",
      date: "2026.06.30",
      subtitle: "返家",
      accommodation: null,
      events: [
        { time: "09:00–10:30", title: "起床整裝", type: "rest" },
        { time: "10:30–10:40", title: "Terrace Garden Mihama Resort Check out", type: "hotel" },
        {
          time: "10:40–12:20",
          title: "浜屋沖繩麵",
          type: "food",
          hours: "10:00–17:30",
          parking: { name: "浜屋そば駐車場", mapcode: "33 584 141*25", maps: "https://maps.app.goo.gl/v9mXerULzHZXFjRy7" },
          links: [{ label: "浜屋沖繩麵", url: "https://www.google.com/maps/search/?api=1&query=%E6%B5%9C%E5%B1%8B%20%E6%B2%96%E7%B9%A9%E9%BA%B5", type: "maps" }]
        },
        {
          time: "12:20–15:10",
          title: "波上宮",
          type: "attraction",
          hours: "09:00–17:00",
          locations: [
            { name: "コーラルパーキング波之上駐車場", mapcode: "33 155 745*34", maps: "https://maps.app.goo.gl/H4otdwonwrGWxVCfA" },
            { name: "波上宮停車場", mapcode: "33 155 688*83", maps: "https://maps.app.goo.gl/KsdwiZRWksoGt8Qj9" }
          ],
          links: [{ label: "波上宮", url: "https://maps.app.goo.gl/KsdwiZRWksoGt8Qj9", type: "maps" }]
        },
        {
          time: "15:10–15:30",
          title: "加油站",
          type: "car",
          locations: [{
            name: "ENEOS EneJet サンセール宇栄原 SS",
            mapcode: "33 065 411*08",
            maps: "https://maps.app.goo.gl/XzspLda4g3MhjovC6",
            note: "入滿油，保留收據，還車時出示"
          }]
        },
        {
          time: "15:40–15:50",
          title: "5201314 Okinawa Rental Car（還車）",
          type: "car",
          notes: [{ text: "出示入滿油收據" }]
        },
        {
          time: "16:10–17:00",
          title: "那霸機場（OKA）",
          type: "airport",
          links: [{ label: "那霸機場", url: "https://www.google.com/maps/search/?api=1&query=%E9%82%A3%E9%9C%B8%E6%A9%9F%E5%A0%B4", type: "maps" }]
        },
        {
          time: "17:00–19:00",
          title: "辦理登機手續（提前 2 小時）",
          type: "airport",
          notes: [
            { text: "沖繩出發航班：報到櫃檯於起飛前 2 小時開放，並於起飛前 45 分鐘截止" },
            { text: "使用 e-Gate 自動查驗通關服務（無需事先註冊）" },
            { text: "18:00 至登機門辦理登機手續" },
            { text: "最遲於起飛前 30 分鐘抵達登機門，登機門於起飛前 10 分鐘關閉" }
          ]
        },
        {
          time: "19:00–19:30",
          title: "飛行：那霸 → 臺中國際機場（RMQ）",
          type: "flight"
        },
        {
          time: "20:00–20:40",
          title: "返家",
          type: "rest",
          notes: [{ text: "感謝家人這趟旅遊的陪伴～" }]
        }
      ]
    }
  ],
  notices: [
    {
      id: "entry",
      title: "入境（臺灣）注意事項",
      pdfPages: [22, 23, 24, 25, 26, 27],
      links: [
        { label: "Visit Japan Web", url: "https://vjw-lp.digital.go.jp/zh/" },
        { label: "臺灣入境查詢", url: "https://www.immigration.gov.tw/" }
      ]
    },
    {
      id: "luggage",
      title: "行李注意事項",
      pdfPages: [28, 29, 30],
      items: [
        "備用鋰電池必須低於 100 瓦時（Wh）/ 2 克鋰容量（LC），行動電源若無明確標示規格或數值則一律禁止攜帶",
        "額定能量公式：Wh = mAh / 1000 × Volt（電壓）",
        "例：20000mAh、3.7V → 20000/1000×3.7 = 74Wh",
        "鋰電池容量在 100 瓦時（含）以下，每人最多可攜帶 15 個可攜式電子裝置和（或）20 個備用電池，超過數量需經航空公司同意",
        "電池須個別保護避免短路（電池保護盒、絕緣膠帶或塑膠保護袋），不可放置於託運行李中"
      ]
    },
    {
      id: "car",
      title: "租車相關資料／自駕注意事項",
      pdfPages: [31, 32, 33, 34, 35, 36, 37],
      items: [
        "豪華安心全保（一次事故為上限）",
        "如發生事故，必須第一時間在現場如實通報公司並報警取得事故證明書，方能受保",
        "還車前需入滿油並保留收據"
      ],
      links: [
        { label: "5201314 Okinawa Rental Car", url: "https://www.google.com/maps/search/?api=1&query=5201314%20Okinawa%20Rental%20Car" }
      ]
    },
    {
      id: "packing",
      title: "必帶物品＆行前確認",
      pdfPages: [38, 39, 40, 41, 42, 43],
      sections: [
        {
          title: "重要隨身物品",
          items: [
            "登機證", "護照【含照片簽名頁影本（2 份）】", "身分證【含正、反面影本（2 份）】",
            "健保卡【含正、反面影本（2 份）】", "證件大頭照（2 吋）（4 張）",
            "汽車駕照", "汽車駕照（日文譯本）", "住宿相關資料", "旅遊平安（不便）險相關資料",
            "旅遊計畫（紙本）", "臺幣（2,000 NTD）", "日幣（115,000 JPY）（含家人份）",
            "聯邦銀行－吉鶴卡（使用 QUICPay）"
          ]
        },
        {
          title: "生活物品",
          items: [
            "mont-bell Trail Wallet", "MUJI 聚酯纖維雙拉鍊袋（S/M）", "MUJI 聚酯纖維護照夾",
            "KlassiC. 輕行者摺疊墨鏡", "Fjällräven Vidda Cap", "雨傘", "文具", "洗衣袋", "垃圾袋"
          ]
        },
        {
          title: "衣物・鞋類",
          items: [
            "貼身衣物（4 件）", "短褲（3 件）", "長褲（2 件）", "短袖（5 件）", "襪子（4 雙）",
            "Nike Calm 拖鞋", "Nike Air Force 1", "真空壓縮袋", "MUJI 收納袋"
          ]
        },
        {
          title: "3C・攝影・充電",
          items: [
            "iPhone 15 Pro（開通 eSIM）", "AirPods Pro 3", "Apple Watch Ultra 3",
            "Sony a7 V + 鏡頭組", "DJI Osmo Pocket 4", "Zendure 行動電源（10000mAh/36Wh）×2",
            "IKEA 延長線", "各設備充電線"
          ]
        },
        {
          title: "嬰幼兒用品（Yuko / Yoki / 共用）",
          items: [
            "登機證、護照、健保卡、戶籍謄本影本", "尿布、衣物、奶瓶、圍兜",
            "嬰兒推車、嬰兒揹帶", "BRAUN 耳溫槍", "出國常備用藥（咳嗽藥、希普利敏、退燒藥、止吐藥）"
          ]
        }
      ]
    },
    {
      id: "flight",
      title: "航班預訂相關資料",
      pdfPages: [44, 45, 46],
      links: [
        { label: "臺中國際機場", url: "https://www.google.com/maps/search/?api=1&query=%E8%87%BA%E4%B8%AD%E5%9C%8B%E9%9A%9B%E6%A9%9F%E5%A0%B4" },
        { label: "那霸機場", url: "https://www.google.com/maps/search/?api=1&query=%E9%82%A3%E9%9C%B8%E6%A9%9F%E5%A0%B4" }
      ]
    }
  ]
};
