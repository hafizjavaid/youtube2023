const products = [
    {
      id: "recZkNf2kwmdBcqd0",
      name: "accent chair",
      price: 25,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=b68fdcd1903921e8",
  
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recEHmzvupvT8ZONH",
      name: "albany sectional",
      price: 109,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=b68fdcd1903921e8",
  
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "rec5NBwZ5zCD9nfF0",
      name: "albany table",
      price: 309,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=b68fdcd1903921e8",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recd1jIVIEChmiwhe",
      name: "armchair",
      price: 125,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=b94a4a674a958cb0",
  
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recoM2MyHJGHLVi5l",
      name: "bar stool",
      price: 40,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=b94a4a674a958cb0",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recotY5NhDQFdkm",
      name: "dining table",
      price: 42,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=a05a776271e2f0dc",
  
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "rec1Ntk7siEEW9ha1",
      name: "emperor bed",
      price: 23,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=a05a776271e2f0dc",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recNZ0koOqEmilmoz",
      name: "entertainment center",
      price: 59,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=6f2ca80133fbf2f3",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recrfxv3EwpvJwvjq",
      name: "high-back bench",
      price: 39,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=34fef5ad41754a50",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recoW8ecgjtKx2Sj2",
      name: "leather chair",
      price: 2,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=a05a776271e2f0dc",
  
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recEOA6qtDag1hRbU",
      name: "leather sofa",
      price: 99,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=a05a776271e2f0dc",
  
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recoAJYUCuEKxcPSr",
      name: "modern bookshelf",
      price: 31,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=a05a776271e2f0dc",
  
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recQ0fMd8T0Vk211E",
      name: "modern poster",
      price: 30,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=d255a8a7d85e0acc",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "rec7CjDWKRgNQtrKe",
      name: "shelf",
      price: 30,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/2fd8fb02cc6fa5620504de41fbb662f9/3157a507?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=7b186b85fe304330",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recF0KpwlkF7e8kXO",
      name: "simple chair",
      price: 109,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/c9d46754faf94d2283e15ac3b8accb9a/a6c343c8?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=f43d7f3492929223",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recs5BSVU3qQrOj4E",
      name: "sofa set",
      price: 129,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/fe9d4f25fee307f6ae5b7a462b70b942/031464c4?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=b3f6975f8a16dfe2",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recroK1VD8qVdMP5H",
      name: "suede armchair",
      price: 15,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/1cf03bfcee117bd92273d6a82a1534/47ef57c7?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=e647fc7bafd1bcb0",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "rec7JInsuCEHgmaGe",
      name: "utopia sofa",
      price: 79,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/5ebc46a9e31a09cbc6078190ab035abc/8480b064?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=73a7f3e16f166906",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "rec3jeKnhInKHJuz2",
      name: "vase table",
      price: 120,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/1e222e36e935db2695c33e3d30c2e482/91b542e0?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=f551e35754c58366",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recv2ohxljlK2FZO7",
      name: "wooden bed",
      price: 25,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/1d692023f254ca11a3d1a3628d198081/e922a771?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=122d9ca01750bb8d",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "recm7wC8TBVdU9oEL",
      name: "wooden desk",
      price: 4,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/954dfa5c8ce3df84a3c7254481464366/a3bd8c4a?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=947874948696d635",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "rectfNsySwAJeWDN2",
      name: "wooden table",
      price: 234,
      image:
        "https://dl.airtable.com/.attachmentThumbnails/e8c2f821d05b9e4e5aa450a19e62ffa5/271fc3f5?ts=1659806197&userId=usrQMwWEPx18KgLcP&cs=cea29c6beecb9f1c",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
  ];
  export default products;
  