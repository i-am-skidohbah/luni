import offer from "../Assests/solar 3.jpg";
import image from "../Assests/assets/category/gaming.png";

// brands

import photos from "../Assests/assets/brand//br-1.png";

import photos1 from "../Assests/assets/brand/br-2.png";
import photos2 from "../Assests/assets/brand/br-3.png";
import photos3 from "../Assests/assets/brand/br-4.png";
import photos4 from "../Assests/assets/brand/br-5.png";

import appleLaptop1 from "../Assests/images/appleLaptop1.jpg";
import appleLaptop2 from "../Assests/images/appleLaptop2.jpg";
import wardrobe1 from "../Assests/images/babycostume.jpg";
import gamingLaptop1 from "../Assests/images/gamingLaptop1.jpg";
import gamingLaptop2 from "../Assests/images/gamingLaptop2.jpg";
import codingLaptop1 from "../Assests/images/codingLaptop1.jpg";
import iphonXR1 from "../Assests/images/iphonXR1.jpg";
import iphone12M1 from "../Assests/images/iphone12M1.jpg";
import SamsungM311 from "../Assests/images/SamsungM311.jpg";
import miphone1 from "../Assests/images/miphone1.jpg";
import desk from "../Assests/images/oneplusN1.jpg";
import kidvest1 from "../Assests/images/vivo1.jpg";
import Vivo from "../Assests/images/oneplusN2.jpg";
import sofa1 from "../Assests/images/redmi9A1.jpg";
import oppophone1 from "../Assests/images/oppophone1.jpg";
import saaree from "../Assests/images/saaree.jpg";
import kidvest from "../Assests/images/meluha.jpg";
import shirt from "../Assests/images/shirt.jpg";
import ip from "../Assests/images/iphone12M1.jpg";
import phirmeriyaad from "../Assests/images/phirmeriyaad.jpg";
import womentop from "../Assests/images/womentop.jpg";
import mensjeans from "../Assests/images/mensjeans.jpg";
import bedwithstorage from "../Assests/images/bedwithstorage.jpg";
import pumatshirt2 from "../Assests/images/pumatshirt2.jpg";
import studentLaptophp1 from "../Assests/images/studentLaptophp1.jpg";
import studentLaptophp2 from "../Assests/images/studentLaptophp2.jpg";
import pumatshirt1 from "../Assests/images/pumatshirt1.jpg";
import travelLaptop1 from "../Assests/images/travelLaptop1.jpg";
import travelLaptop2 from "../Assests/images/travelLaptop2.jpg";
import kabirkabir from "../Assests/images/kabirkabir.jpg";
import oppophone2 from "../Assests/images/oppophone2.jpg";
import vivo1 from "../Assests/images/vivo1.jpg";
import meluha from "../Assests/images/iphonXR1.jpg";
import Wuthering from "../Assests/images/Wuthering.jpg";
import bumkeshbakshi from "../Assests/images/bumkeshbakshi.jpg";
import womenblouse from "../Assests/images/womenblouse.jpg";
import iphonXR2 from "../Assests/images/iphonXR2.jpg";
import womenkurtha from "../Assests/images/womenkurtha.jpg";
import dovebodylotion from "../Assests/images/dovebodylotion.jpg";
import babycostume from "../Assests/images/babycostume.jpg";
import fragrancedeonevia from "../Assests/images/fragrancedeonevia.jpg";
import parkavenueperfume from "../Assests/images/parkavenueperfume.jpg";
import kidkurtha from "../Assests/images/kidkurtha.jpg";
import sunderkand from "../Assests/images/sunderkand.jpg";

export const TimeCountData = [
  {
    time: 1,
    category: "days",
  },
  {
    time: 3,
    category: "Hours",
  },
  {
    time: 3,
    category: "Minutes",
  },
  ,
  {
    time: 3,
    category: "seconds",
  },
];

const structureOfCategoryData = [
  // Category 1
  {
    title: "", // title of category,
    keywords: [], // keywords of category,
    filters: [], // array of filter objects for the category
  },
  {}, // Category 2 ...
];

// Structure of filter array
const filtersStructure = {
  // Filter 1
  filterName: {
    filterName: "", // title of filter
    filterList: ["", ""], // array of filter values of type String
  },
  filter2: {}, // Filter 2 ...
};

// Structure of product array
const productsStructure = [
  // Product 1
  {
    filter1: "", // filter1 value
    filter2: "", // filter2 value
    title: "", // title of product
    category: "", // category of product
    price: 1, // price of product in INR
    imgs: ["", ""], // array of images of product
    specs: ["", ""], // Array or String of specs of product -> If Array, then render as list else if String, then render as single line
    inStock: 20, // quantity in stock of product -> If 0, then hide from the store, or less than 10, then show a "Very few left" or play with this value
    eta: 20, // estimated time of arrival of product in mins
    id: "", // unique id of product
    rating: 0.0, // rating of product
  },
];

// Actual Data
const categories = {
  Mobiles: {
    title: "Mobiles",
    keywords: [],
    filters: {
      Brand: {
        filterName: "Brand",
        filterList: [
          "Apple",
          "Samsung",
          "Redmi",
          "Jio",
          "OnePlus",
          "Realme",
          "Oppo",
          "Vivo",
          "Mi",
        ],
      },
      RAM: {
        filterName: "RAM",
        filterList: ["4 MB", "2 GB", "4 GB", "6 GB", "8 GB"],
      },
    },
  },
  Books: {
    title: "Books",
    keywords: "",
    filters: {
      Language: {
        filterName: "Language",
        filterList: ["English", "Hindi", "Marathi"],
      },
      Genre: {
        filterName: "Genre",
        filterList: ["Fiction", "Historical", "Mystery", "Romance", "Poetry"],
      },
    },
  },
  Clothings: {
    title: "Clothings",
    keywords: "",
    filters: {
      For: {
        filterName: "For",
        filterList: ["Kids", "Men", "Women"],
      },
    },
  },
  Beauty: {
    title: "Beauty",
    keywords: "",
    filters: {
      Type: {
        filterName: "Type",
        filterList: [
          "Bath and Body",
          "Fragrance",
          "Skin Care",
          "Hair Care",
          "Makeup",
        ],
      },
    },
  },
  Furniture: {
    title: "Furniture",
    keywords: "",
    filters: {
      Type: {
        filterName: "Type",
        filterList: ["Office Chair", "Desk", "Beds", "Sofas", "Wardrobes"],
      },
    },
  },
  Laptops: {
    title: "Laptops",
    keywords: "",
    filters: {
      For: {
        filterName: "For",
        filterList: [
          "Students",
          "Travel",
          "Coding",
          "Gaming",
          "Content Creation",
        ],
      },
      Brand: {
        filterName: "Brand",
        filterList: ["Acer", "Dell", "HP", "Lenovo", "Asus", "Apple"],
      },
      RAM: {
        filterName: "RAM",
        filterList: ["4 GB", "8 GB", "16 GB", "32 GB", "64 GB"],
      },
      Processor: {
        filterName: "Processor",
        filterList: ["Intel", "AMD"],
      },
      DisplaySize: {
        filterName: "Display Size",
        filterList: ["14", "15.6", "16"],
      },
      HasSSD: {
        filterName: "Has SSD?",
        filterList: ["Yes", "No"],
      },
    },
  },
};

// Products
export const ProductData = [
  {
    Brand: "Redmi",
    RAM: "2 GB", // filters
    title: "Redmi 9A (Nature Green, 2GB RAM, 32GB Storage)",
    category: "Mobiles",
    price: 6999,
    imgs: [iphonXR1, appleLaptop1, iphonXR1, appleLaptop1],
    quantity: 1,
    specs: [
      // Always check whether this is Array or String, if Array -> Bulleded List else if String -> Para
      "13MP rear camera with AI portrait, AI scene recognition, HDR, pro mode | 5MP front camera.",
      "16.58 centimeters (6.53 inch) HD+ multi-touch capacitive touchscreen with 1600 x 720 pixels resolution, 268 ppi pixel density and 20:9 aspect ratio",
      "Memory, Storage & SIM: 2GB RAM, 32GB internal memory expandable up to 512GB | Dual SIM (nano+nano) + Dedicated SD card slot",
      "Android v10 operating system with upto 2.0GHz clock speed Mediatek Helio G25 octa core processor",
      "5000mAH lithium-polymer large battery with 10W wired charger in-box",
    ],
    inStock: 40, // if less than 10, then display "Only {9} left!", else don't show anything.
    eta: 30, // in mins
    id: "m1",
    rating: 4.2,
    reviews: [
      {
        name: "Shubham",
        title: "Don't buy this phone",
        content: `Both 13 MP and 5MP Camera quality is good. Have lot of pre installed apps. 
          But can be uninstalled if not required. Overall good performance . I am using Asus zenfone max and according to me far better than Asus except Camera quality. It comes in 5000 mah battery and one can't get a better option at this price range. Go for it. It's really goodAfter one week useEdit:- please don't buy this phone. It hangs a lot and sometimes there is problem in touch screen.`,
        rating: 1,
      },
      {
        name: "Swanand",
        title: "One of the good choice for low budget phone",
        content: `If you are looking for low budget phone this can be a good choice for you.
        If you wanna android phone just for day to day work then it's really good.
        On playing heavy games it will hange obviously. Camera is fine at this range. When you start your new device it take some time but later it will work smoothly.
        Phone is light weight with a good look`,
        rating: "4",
      },
      {
        name: "Sanskar",
        title:
          "Simply excellent. Read complete review written after my 30 days of experience",
        content: `Excellent mobile for daily use @7500/-. Don't belive in negative reviews at all. If course the product parts made in China, entire assembly, software all are of India. Even this mobile have no bloat ware or Chinese apps and it's 3gb variant is excellent and black colour looks great.
          Camera is good at it's price range and has autofocus and AI potrait feature.
          Regarding battery is really huge and with normal daily usage it lasts for about 24 hrs as of my experience. With heavy usage and gaming it lasts for 7-10 hrs.
          Regarding gaming, since it has gaming processor helio G25 (equal to Snapdragon 625), and it's hyperdrive technology, no lag in gaming and better network connectivity makes games more aweful.`,
        rating: "5",
      },
    ],
  },
  {
    Brand: "Samsung",
    RAM: "6 GB",
    title: "Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)",
    category: "Mobiles",
    price: 14999,
    imgs: [Vivo, gamingLaptop1],
    quantity: 1,
    specs: [
      "Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera",
      "6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display , FHD+ Resolution (2340 x 1080) , 404 ppi pixel density and 16M color support",
      "Android v10.0 operating system with 2.3GHz + 1.7GHz Exynos 9611 Octa core processor , 6GB RAM, 128GB internal memory expandable up to 512GB and dual SIM",
      "6000 mAh Battery",
    ],
    inStock: 50,
    eta: 20,
    id: "m2",
    rating: 4.7,
    reviews: [
      {
        name: "Rohit",
        title: "Best mobile in buget",
        content: "I higely recoomend this mobile",
        rating: 5,
      },
      {
        name: "Doraemon",
        title: "Value for money",
        content:
          "Really a good budget phone with big battery. Camera performance also awesome, but in pro mode there no control for shutter speed and while changing the iso i don't feel any differences. I need more update on camera modes. Phone performance and charging speed is good. Except camera modes i love this phone.",
        rating: 4,
      },
      {
        name: "Nobita",
        title: "Best in the market with this price range",
        content:
          "A Descent phone Definitely not for pro pubg player but can work fine Super amoled gives it best performance Descent camera Improved Selfie camera compared to M30 Long battery life Nice Security No ads unlike MI Works smoothly",
        rating: 5,
      },
    ],
  },
  {
    popular: true,
    Brand: "Apple",
    RAM: "6 GB",
    title: "Apple iPhone 12 Pro Max (128GB)",
    category: "Mobiles",
    price: 119999,
    imgs: [SamsungM311, mensjeans],
    quantity: 1,
    specs: [
      "6.7-inch (17 cm diagonal) Super Retina XDR display",
      "Ceramic Shield, tougher than any smartphone glass",
      "A14 Bionic chip, the fastest chip ever in a smartphone",
      "Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording",
    ],
    inStock: 1,
    eta: 5,
    id: "m3",
    rating: 4.3,
    reviews: [
      {
        name: "Johhny S",
        title: "This took one of my kidneys. But worth it",
        content:
          "Impressed! I’ve tested it with iphone11 and other iphones, it’s remarkable. It has unquestionably better video quality and touch sensitivity. The screen is bigger than I thought. I loved the Gold variant. But if u have a 11 max or a X max I wouldn’t suggest for an upgradation. I feel that the next iphone will have way more cooler features so wouldn’t hurt to wait. My previous iphone was 6, so in my case am totally peachy with this phone. Though it has a ceramic glass wouldn’t hurt to buy a screen guard. If u can afford it u can totally go 4 it.",
        rating: 5,
      },
      {
        name: "Arjun",
        title: "The best iPhone in 2020. Phone of the year.",
        content:
          "This is the best iPhone yes. The Max model gives you the better screen and overall is a camera beast. I would highly recommend this to anyone. Regarding value for money, its sad that we live in a country where Falling Rupee, Import Duty and High GST are the reasons for such high poricing. A rich country like USA pays only $1099 (Rs. 81,500) whereas its priced a whopping Rs. 48,400 more in India. Thats slmost 60% more. Shame!",
        rating: "5",
      },
      {
        name: "Sahith",
        title: "Best & Biggest iPhone i ever owned 🥰",
        content:
          "Just no words, what a beauty. Upgrading from iPhone X, this feels so big and heavy. But do not has much discomfort while using, you will get used to it.Make sure to get a decent Screen guard and clear case just to safeguard this beauty.",
        rating: "4",
      },
    ],
  },
  {
    Brand: "OnePlus",
    RAM: "8 GB",
    title: "OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)",
    category: "Mobiles",
    price: 24999,
    imgs: [appleLaptop2, gamingLaptop2],
    quantity: 1,
    specs: [
      "64MP+8MP+2MP triple rear camera with 1080p video at 30/60 fps, 4k 30 fps | 16MP front camera with 1080p video at 30/60 fps",
      "6.43-inch, 90Hz fluid AMOLED display with 2400 x 1080 pixels resolution | 410ppi",
      "Memory, Storage & SIM: 8GB RAM | 128GB internal memory on UFS 2.1 storage system",
      "Dual SIM (nano + nano) | OnePlus Nord CE currently supports dual 4G SIM Cards or a single 5G SIM + 4G SIM",
    ],
    inStock: 5,
    eta: 10,
    id: "m4",
    rating: 4.9,
    reviews: [
      {
        name: "Bakwas",
        title: "Bakwas phone",
        content: "Bakwas phone",
        rating: 1,
      },
      {
        name: "Vikas",
        title: "Good overall",
        content: `The best part of the phone is it's super simple and user friendly operating system. Camera doesn't oversaturate colours and captures decent photos. Battery charging is super fast. People argue that this is overpriced in this segment but I guess ease of using the phone and mainly the OS wouldn't be so good in other comparable phones. It is super light and handy.
  
        Edit: taking away 1 star from the review after a month's usage.
        Phone app lags all the time. Phone starts ringing when I receive a call while the name of caller appears 5 seconds later. This is very annoying. Similar issue while calling. Hope some software update fixes this issue.`,
        rating: "4",
      },
      {
        name: "Smooth John",
        title: "Smooth user experience",
        content:
          "Very nice Phone with really nice features! I didn't even know I needed a phone but it is so good ",
        rating: "5",
      },
    ],
  },
  {
    Brand: "Jio",
    RAM: "4 MB",
    title: "Jio Phone 3 (Black, 4 MB RAM, 4GB Storage)",
    category: "Mobiles",
    price: 1999,
    imgs: [saaree, oppophone1],
    quantity: 1,
    specs: [
      "2MP rear and 0.3MP front camera",
      "Internal Storage 4GB",
      "1500mAh battery",
      "Access to Jio apps 1 cr+ songs with JioMusic, 6000+ movies with JioCinema",
    ],
    inStock: 50,
    eta: 2,
    id: "m5",
    rating: 3.5,
    reviews: [
      {
        name: "BabaKun",
        title: "Good for My Dad",
        content:
          "Like really I was looking for a phone in which I can be always connected with my family but they didn't want a smartphone. So really good for filling the niche",
        rating: 4,
      },
      {
        name: "Ambani",
        title: "Buy This",
        content: "Very good Must Buy!",
        rating: 5,
      },
      {
        name: "Average Consumer",
        title: "Ok",
        content: "ok for like daily use but not much",
        rating: 3,
      },
    ],
  },
  {
    Brand: "Realme",
    RAM: "6 GB",
    title: "realme narzo 30 (Racing Blue, 6GB RAM, 128GB Storage)",
    category: "Mobiles",
    price: 14999,
    imgs: [oppophone1, codingLaptop1],
    quantity: 1,
    specs: [
      "6 GB RAM | 128 GB ROM | Expandable Upto 256 GB",
      "16.51 cm (6.5 inch) Full HD+ Display",
      "48MP + 2MP + 2MP | 16MP Front Camera",
      "5000 mAh Battery",
      "MediaTek Helio G95 Processor",
    ],
    inStock: 20,
    eta: 30,
    id: "m6",
    rating: 4,
    reviews: [
      {
        name: "Navin Kumar",
        title: "Amazing Product",
        content:
          "Like really I was looking for a phone in which I can be always connected with my family but they didn't want a smartphone. So really good for filling the nicheAll the things are nice. Only macro camera is not powerful. Good product go for it. Gorgeous. And the charger is also very heavy.",
        rating: 5,
      },
      {
        name: "Manish",
        title: "THE PROCESSING POWER IS PHENOMENAL HELIO G95 IS A BEAST",
        content:
          "Overall a good phone camera performance is decent enough in this price point the front camera though does a great job because of sony imx471 sensor ultrawide on the back would be great the macro and b/w sensor is not that useful battery life is good for an average user iam getting a screen on time of about 45-50 minutes using 10% battery so it can give you about 8-9 hours of screen time daily the charging is powerful and charges quickly In short its a gaming phone The antutu score os this device is around 350k which is greater than redmi note 10 pro max score of 300k",
        rating: 4,
      },
    ],
  },
  {
    Brand: "Oppo",
    RAM: "4 GB",
    title: "OPPO A54 (Starry Blue, 4GB RAM, 128GB Storage)",
    category: "Mobiles",
    price: 15490,
    imgs: [oppophone1, oppophone2],
    quantity: 1,
    specs: [
      "6.51' Inch (16.5cm) HD+ Puch-hole Display with 1600x720 pixels. Larger screen to body ratio of 89.2%.|Side Fingerprint Sensor.",
      "MediaTek Helio P35 GPU IMG GE8320 @ 680 MHz| Powerful 2.3 GHz Octa-core processor, support LPDDR4X memory",
      "13MP Quad Camera ( 13MP Main + 2MP Macro + 2MP Bokeh Lens) | 16MP Front Camera.",
      "5000 mAh lithium polymer battery",
      "Memory, Storage & SIM: 4GB RAM | 128GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (4G+4G).| Color OS 7.2 based on Android 10.0 operating system.",
    ],
    inStock: 2,
    eta: 15,
    id: "m7",
    rating: 4.2,
    reviews: [
      {
        name: "Alwin",
        title: "Good Phone",
        content: "Good phone working fine good battery thanks",
        rating: 5,
      },
      {
        name: "Ankita",
        title: "Extremely slow.",
        content:
          "Okay so this product is not expensive, affordable and very beautiful, this is only good thing about it. Phone freezes a lot and when someone calls, it keeps vibrating without showing any number on the screen. I bought this phone in may 2021. And this is July 2021. I hate this phone already",
        rating: 2,
      },
    ],
  },
  {
    Brand: "Vivo",
    RAM: "8 GB",
    title: "Vivo S1 Pro (Jazzy Blue, 8GB RAM, 128GB Storage)",
    category: "Mobiles",
    price: 29999,
    imgs: [vivo1],
    quantity: 1,
    specs: [
      "48+8+2+2MP rear camera | 32MP front camera Front camera",
      "Memory, Storage & SIM: 8GB RAM, 128GB internal memory | Dual SIM (nano+nano) dual-standby (4G+4G)",
      "Android v9 based on OS 9.1 operating system with Qualcomm Snapdragon 665AIE octa core processor",
      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
      "In display fingerprint",
    ],
    inStock: 0,
    eta: 50,
    id: "m8",
    rating: 5,
    reviews: [
      {
        name: "Blaze",
        title: "Fast and great deal",
        content: "Thanks, please manufacture more",
        rating: 5,
      },
    ],
  },
  {
    Brand: "Mi",
    RAM: "8 GB",
    title: "Mi 11X 5G Cosmic Black 8GB RAM 128GB ROM",
    category: "Mobiles",
    price: 31999,
    imgs: [miphone1],
    quantity: 1,
    specs: [
      "Processor: Qualcomm Snapdragon 870 5G with Kryo 585 Octa-core; 7nm process; Up to 3.2GHz clock speed; Liquidcool technology",
      "Camera: 48 MP Triple Rear camera with 8MP Ultra-wide and 5MP Super macro | 20 MP Front camera",
      "Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 2.76mm ultra tiny punch hole; HDR 10+ support; 360Hz touch sampling, MEMC technology",
      "Battery: 4520 mAH large battery with 33W fast charger in-box and Type-C connectivity",
      "Hands-Free access to Alexa: Alexa on your phone lets you make phone calls, open apps, control smart home devices, access the library of Alexa skills, and more using just your voice while on-the-go. Download the Alexa app and complete hands-free setup to get started. Just ask - and Alexa will respond instantly",
    ],
    inStock: 8,
    eta: 50,
    id: "m9",
    rating: 4,
    reviews: [
      {
        name: "Nitea Ghosh",
        title: "Waste of money",
        content:
          "Very bad experience, i am going to return it, i am facing touch issue very much",
        rating: 1,
      },
    ],
  },
  {
    Brand: "Apple",
    RAM: "6 GB",
    title: "Apple iPhone XR (64GB) - White",
    category: "Mobiles",
    price: 41999,
    imgs: [iphonXR1, iphonXR2],
    quantity: 1,
    specs: [
      "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
      "Water and dust resistant (1 meter for up to 30 minutes, IP67)",
      "Single 12MP Wide camera with Portrait mode, Portrait Lighting, Depth Control, Smart HDR, and 4K video up to 60fps",
      "7MP TrueDepth front camera system with Portrait mode, Portrait Lighting, Depth Control, and 1080p video",
      "Face ID for secure authentication",
      "A12 Bionic with second-generation Neural Engine",
    ],
    inStock: 8,
    eta: 20,
    id: "m10",
    rating: 4.5,
    reviews: [
      {
        name: "Darshan Sanghvi",
        title: "Fabulous!",
        content:
          "Thanks, the device was received well packed and before time! The device is fabulous, it's like love at first sight! It doesn't feel like a 2018 device, the speed, the sensors, the touch is pretty amazing! A12 Bionic works well! 3GB RAM is sufficient to run the phone, COD, BGMI and NFS can be played without lag. Face ID is fast and accurate to unlock the device in dark! In low to moderate usage, battery supports 30+ hours and in heavy usage, battery supports 20+ hours. This one doesn't have Adapter and Earphones, but you can buy them separately! Bought for 43K (128GB) during Prime Day Sale! Overall a value for money device! A good device to start if you’re moving to Apple from Android or upgrading from previous generation iPhones. Thank You Apple!",
        rating: 5,
      },
      {
        name: "Sushma",
        title: "Economical Phone",
        content:
          "The phone is not lacking in any sphere. The halmark quality of iPhone is telltale. The size is very handy and convenient. Charging cord is working only on one side like USB cord but then, the charging is very fast. Battery is very long lasting, better than 6000 mah batteries of Android. Picture quality better than so called 4 camera android. Go for it without a second thought. Charger not provided in the box, is freely available outside. Must buy a good bluetooth headset also to enjoy the phone.",
        rating: 5,
      },
    ],
  },
  {
    popular: true,
    Language: "English",
    Genre: "Fiction",
    title: "The Monk Who Sold His Ferrari",
    category: "Books",
    price: 159,
    imgs: [oppophone1],
    quantity: 1,
    specs:
      "A renowned inspirational fiction, The Monk Who Sold His Ferrari is a revealing story that offers the readers a simple yet profound way to live life. The plot of this story revolves around Julian Mantle, a lawyer who has made his fortune and name in the profession. A sudden heart-attack creates havoc in the successful lawyer’s life. Jolted by the sudden onset of the illness, his practice comes to a standstill. He ponders over material success being worth it all, renounces all of it and leaves for India.",
    inStock: 50,
    eta: 5,
    id: "b1",
    rating: 4.0,
    reviews: [
      {
        name: "Takumi",
        title: "I sold my ae86 after this",
        content:
          "Very nice thriller story It inspired me to sell my car like the monk.",
        rating: 5,
      },
      {
        name: "Om",
        title: "My kids liked It",
        content:
          "Was fine as my kids liked it thats all it matters ultimately, however i would say its a little overpriced for its quality and",
        rating: 3,
      },
      {
        name: "Shyam",
        title: "Very nice read",
        content: "I thourougly enjoyed the content of this",
        rating: 4,
      },
    ],
  },
  {
    Language: "English",
    Genre: "Historical",
    title: "The Immortals of Meluha (Shiva Trilogy)",
    category: "Books",
    price: 299,
    imgs: [meluha],
    quantity: 1,
    specs:
      "The Immortals of Meluha is a series of short stories by the Indian author, K. S. Shukla, that tell the story of the Immortals of Meluha, who are the most powerful and powerful figures in the history of the Indian subcontinent.",
    inStock: 50,
    eta: 5,
    id: "b2",
    rating: 4.1,
    reviews: [
      {
        name: "Himanshu",
        title: "Amazing",
        content: `We'll I'm not a great critic but here's my honest review about what I felt after reading this book.
        At first I was hesitant to buy the book thinking that it would contain the same unbelievable fictional aspects where the gods can fly and cure the incurable diseases by their touch. I was blown away by the simplicity of the protagonist. He didn't have any powers, instead he had the skill and intelligence which led to his rise to become a Mahadev.
        The story is well narrated with twists and turns of comedy, drama, rage and emotions which leaves you hooked till you read the last chapter and then, the other two books. The characters are well developed making you feel their pain and happiness.
        10/10`,
        rating: 4,
      },
      {
        name: "Divyani",
        title: "Too much like a dramatic Script of a TV show",
        content: `I got this thanks to its popularity but unfortunately its a little too dramatic for me, it reads like a script for a Zee TV show which I don't watch but know about thanks to some family members fascinations.......
        There is no character development, poor scripting, no historical research has gone into this I can presume since their are facts that don't match with what's written along with others........
        Also Lord Shiva is not an angry God but when he will get angry its the end or so say the Purans but Lord Shiva is perpetually angry in this book, vendetta is raging in his veins, revenge is his middle name and for what......`,
        rating: 1,
      },
      {
        name: "Vaishnavi",
        title: "Could have been better",
        content:
          "Mediocre writing at best. Hindu mythology is quite rich and author benifits from choosing it. Besides one trick of imputing a benign, logical rationale (which i can hope were the case in reality) to hindu customs, the author doesnt have much to write about. Its feels like just another hero's journey.",
        rating: 2,
      },
    ],
  },
  {
    Language: "English",
    Genre: "Romance",
    title: "Wuthering Heights (Emily Brontë)",
    category: "Books",
    price: 69,
    imgs: [Wuthering],
    quantity: 1,
    specs:
      "Wuthering Heights is a story of love, hate, social status, and revenge set in the moorlands of Northern England at the end of the 18th century. The novel follows the repercussions of the ill-fated love between the impetuous, strong-willed protagonists Catherine “Cathy” Earnshaw and Heathcliff. The story is narrated in diary-like entries by Lockwood, a tenant of one of Heathcliff’s estates. Lockwood annotates and gathers the story told to him by Nelly Dean, the housekeeper, and also records his present-day interactions to create the frame of the story. The events taking place in Wuthering Heights span a 40-year period.",
    inStock: 50,
    eta: 1,
    id: "b3",
    rating: 4.0,
    reviews: [
      {
        name: "Elle",
        title: "I Tried it But,",
        content: `I never expected this book to be as flagrantly, unforgivably bad as it was.
  
        To start, Bronte's technical choice of narrating the story of the primary characters by having the housekeeper explain everything to a tenant 20 years after it happened completely kills suspense and intimacy.`,
        rating: 1,
      },
      {
        name: "Sophie",
        title: "Interestingly enough",
        content:
          "Ah the classics. Everybody can read their own agenda in them. So, first a short plot guide for dinner conversations when one needs to fake acculturation, and then on to the critics’ view.",
        rating: 2,
      },
      {
        name: "American Dragon",
        title: "Childhood Memory",
        content: `I first read this in AP English Literature - senior year of high school. This book is dense and thick and confusing, and with a class full of haters, it was hard to wrap my head around it. I subsequently read it three or four more times for classes in college and every time I read it, I loved it more.`,
        rating: 5,
      },
    ],
  },
  {
    Language: "Hindi",
    Genre: "Mystery",
    title: "Byomkesh Bakshi ki Rahasyamayi Kahaniyan",
    category: "Books",
    price: 139,
    imgs: [bumkeshbakshi],
    quantity: 1,
    specs:
      "सारदेंदु बंद्योपाध्याय की विशिष्टता उनके जासूसी लेखन के अतिरिक्त उनकी अद्वितीय लेखन-शैली के साथ-साथ उनके चरित्रों का सूक्ष्म जीवंत चित्रण है। बीसवीं सदी के प्रारंभ के बंगाल में लेखक और पाठक समान रूप से अपराध और जासूसी साहित्य को नीची निगाहों से देखते थे। सारदेंदु बंद्योपाध्याय ने पहली बार उस लेखन को सम्मानीय स्थान दिलाया। इसका एक बड़ा कारण यह था कि उनके पूर्व के लेखक पंचकोरी दे और दिनेंद्र कुमार अंग्रेजी के जासूसी लेखक आर्थर कोनान, डोएल, एडगर एलन पो, जी.के. चेस्टरसन तथा अगाथा क्रिस्टी से प्रभावित होकर लिखते थे, जबकि सारदेंदु के चरित्र और स्थान अन्य जासूसी उपन्यासों के विपरीत, भारतीय मूल और स्थल के परिवेश में जीते हैं। उनके लेखन का विनोदी स्वभाव पाठक को अनायास कथा के दौरान गुदगुदाता रहता है। ब्योमकेश का साहित्य न केवल अभूतपूर्व जासूसी साहित्य है बल्कि सभी समय और काल में, समाज के सभी वर्गों के युवाओं और वृद्धों में समान रूप से सदैव लोकप्रिय बना रहा है। पाठक इन रहस्य भरी कहानियों को उनके जीवंत लेखन के लिए, अंत जानने के बावजूद, बार-बार पढ़ने के लिए लालायित रहता है। किसी भी लोकप्रिय साहित्य में यह एक अद्वितीय उपलब्धि मानी जाती है और यही उपलब्धि सारदेंदु के ब्योमकेश बक्शी साहित्य को सत्यजीत राय के प्रसिद्ध उपन्यास ‘फेलूदा के कारनामे’ के समान हमारे समय के ‘क्लासिक’ का स्थान दिलाती है।",
    inStock: 50,
    eta: 1,
    id: "b4",
    rating: 4.6,
    reviews: [
      {
        name: "Tony",
        title: "One of the best detective stories book ever.",
        content: `Fantastic. Simply superb. I thought after watching it's series on TV I might not like reading it. But, it was an amazing experience. Due to the above-mentioned fear, I couldn't buy it in the first time but only after a couple of days after thinking a couple of times. But, once I bought it, I couldn't stop. Finished it in less than a week's time. Totally enjoyed it. Highly recommended. Don't miss for anything. Wish I could write something like this!`,
        rating: 4,
      },
      {
        name: "Ram Singh",
        title: " One of the Best Story Book",
        content:
          "It is an honour to review the Story book of Byomkesh Sir. He was fantastic and Wise. His assumptions were so accurate. The main theme of the book is successful. Nice book.",
        rating: 3,
      },
      {
        name: "Shizuka",
        title: "Don't trust seller.",
        content: `I ordered it at low price from Amazon but when the book reached, what i seen was one page miss print. So i reordered the book but second time they confirmed the order at high price. But as i was buying it to gift someone on her birthday, i ordered it. When i opened to check the miss prints, all the pages were well printed. But when the person to whom i gifted it, opened the book what she seen was missing pages. Example - after 112 page number you jump to direct page no. 129. I mean where are the pages? It all destroyed the emotions of the gift. I will not buy any product from seller 'Cloudtale' at all cost.`,
        rating: 4,
      },
    ],
  },
  {
    Language: "English",
    Genre: "Historical",
    title: "Pride and Prejudice",
    category: "Books",
    price: 79,
    imgs: [miphone1],
    quantity: 1,
    specs:
      "The story follows the main character Elizabeth Bennet as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of early 19th-century England. Elizabeth is the second of five daughters of country gentleman living near the fictional town of meryton in Hertfordshire, near London. The story begins as the people of rural meryton scurry to marry their daughters off to Charles Bingley, a dashing and eligible Bachelor who has taken an estate near the Bennet. At the villagers welcoming ball, Elizabeth meets up with a formidable adversary: bingley’s closest friend, the Cold, prideful, extremely wealthy Fitzwilliam Darcy, who piques her to new heights of antagonism. When Darcy arrogantly urges Bingley to give up his burgeoning courtship of Elizabeth sister, misunderstanding threatens to bury all he loves in turmoil and regret",
    inStock: 50,
    eta: 1,
    id: "b5",
    rating: 4.3,
    reviews: [
      {
        name: "raze",
        title: "Boom",
        content:
          "Imagine having a pride when you get blown up and shattered like a bot",
        rating: 4,
      },
      {
        name: "Max Walters",
        title: "Simply Amazing",
        content:
          "My partner really loved it , she said that its really potrays the issues which you might need to face but might not be able to solve cause of pride. I say it was like a really good investment for my partner as she liked it.",
        rating: 4,
      },
      {
        name: "Robert Williams",
        title: "Imagine Dealing with",
        content:
          "Issues potrayed in the book, can really be disturbing right ? It can be really hard on you sometimes, as it can be really real sometimes",
        rating: 4,
      },
    ],
  },

  {
    For: "Students",
    Brand: "HP",
    RAM: "8 GB",
    Processor: "AMD",
    DisplaySize: "15.6",
    HasSSD: "No",
    title:
      "HP 15 (2021) Thin & Light Ryzen 3-3250 Laptop, 8 GB RAM, 1TB HDD, 39.62 cms (15.6`) FHD Screen, Windows 10, MS Office (15s-gr0011AU)",
    category: "Laptops",
    price: 37590,
    imgs: [studentLaptophp1, studentLaptophp2],
    quantity: 1,

    specs: [
      "Display: 15.6-inch FHD (1920 x 1080), IPS, micro-edge, anti-glare, 250 nits, 45% NTSC",
      "Processor: AMD ‎Ryzen 3",
      "Processor Speed: ‎2.6 GHz",
      "RAM Size: ‎8 GB",
      "Hard Drive Size: 1 TB",
      "Graphics Chipset: AMD Radeon Vega 6 Graphics",
      "Operating System: ‎Windows 10 Home",
    ],
    inStock: 11,
    eta: 120,
    id: "l1",
    rating: 3.8,
    reviews: [
      {
        name: "Swag",
        title: "I really liked this product 👍",
        content:
          "After seeing the reviews I was confused. But I decided to go for this and it got delivered within 1 day. I really liked this product. Looks premium, built quality is also good and also fast. It's a good laptop under 36k. As of now, this is my review and if there will be any issue, will let you know.",
        rating: 5,
      },
      {
        name: "Himanshu Karkhanis",
        title: "Reasonable performance so far (it is only 3 days)",
        content:
          "Firstly for the correct information of all potential buyers - I have had a good experience of HP laptops. Secondly i had budget constraints (below 35k)... so I had to go for one with only HDD, not SSD. I would have loved hybrid types as those work excellent. Thus I opted for this laptop with no SSD, only 1TB HDD, however i preferred 8GB RAM... it has been 3 days and we have been using it for Zoom long meetings..and general surfing (no multimedia use yet). So far there are no visible issues. The fan sometimes gives out a slight burning smell and I assume it is because the circuitry is new... I shall monitor for more days and give another review on this. The laptop's nice feature is the CORTANA support by which windows got configured smoothly, with little intervention. it did take lot of time to boot initially, but now boots up fine.... Havent faced any sound or heat issues yet. Screen output quality could have been better..... to get the optimum brightness you have to raise the brightness to almost the limit. Sound output is not that great..... so far so good. will post again after a month of use.",
        rating: 4,
      },
      {
        name: "Shantanu Verma",
        title: "Decent laptop, good customer support during setup",
        content:
          "I purchased GR0011AU (1TB HDD no SSD, Ryzen 3 3250). Economical Laptop with decent performance. Battery backup around 5.5 to 6 hrs on streaming video via wifi and general browsing. I avoided purchasing extended warranty online. Instead buy from the HP helpline (number attached in photo). Registration and setup of MS Office Home and Student 2019 is tricky as the laptop has Office 365 installed as default. This (365) has to be uninstalled and the Office H&S 2019 image (3.5GB) has to be downloaded and set up. I am doing it all through the HP helpline and they are helpful.. Overall decent/good laptop for my basic requirements and very good customer support, atleast during setup.",
        rating: 4,
      },
    ],
  },
  {
    For: "Travel",
    Brand: "Dell",
    RAM: "4 GB",
    Processor: "Intel",
    DisplaySize: "15.6",
    HasSSD: "Yes",
    title:
      "Dell Inspiron 3501 15.6` FHD Display Laptop (i3-1115G4 / 4GB / 256GB SSD / Integrated Graphics / Win10 + MSO / Accent Black)",
    category: "Laptops",
    price: 38890,
    imgs: [travelLaptop1, travelLaptop2],
    quantity: 1,
    specs: [
      "Processor:11th Generation Intel Core i3-1115G4 Processor (6MB Cache, up to 4.1 GHz)",
      "Memory & Storage: 4GB, 4Gx1, DDR4, 2666MHz | 256GB M.2 PCIe NVMe Solid State Drive",
      "Display: 15.6-inch FHD (1920 x 1080) Anti-glare LED Backlight Narrow Border WVA Display",
      "Graphics: Intel UHD Graphics with shared graphics memory",
      "Operating System & Software: Windows 10 Home Single Language | Microsoft Office Home and Student 2019",
      "I/O ports: USB 3.2 Gen 1 (x2), USB2.0 (x1), HDMI 1.4(x1),One SD-card slot ,RJ45 - 10/100Mbps",
    ],
    inStock: 19,
    eta: 180,
    id: "l2",
    rating: 4.3,
    reviews: [
      {
        name: "Adesh Gaurav",
        title: "Very good DELL laptop",
        content:
          "I got a nice and genuine DELL laptop. It is working and is in good condition. Very much happy with my purchase. For the reference I bought it from LOWEST PRICE SHOP seller.",
        rating: 5,
      },
      {
        name: "Deepak",
        title:
          "This laptop very good sceen and display quality is very nice and keyboard quality is very good",
        content:
          "Screen quality very nice, battery is good and camera quality is some good, I am perchase this laptop office work",
        rating: 4,
      },
    ],
  },
  {
    For: "Coding",
    Brand: "Lenovo",
    RAM: "8 GB",
    Processor: "Intel",
    DisplaySize: "15.6",
    HasSSD: "Yes",
    title:
      "Lenovo IdeaPad Slim 3 10th Gen Intel Core i5 15.6` (39.62cms) Full HD IPS Thin and Light Laptop (8GB/512GB SSD/Windows 10/MS Office 2019/Fingerprint Reader/Platinum Grey/1.85Kg)",
    category: "Laptops",
    price: 57200,
    imgs: [codingLaptop1.jpg],
    quantity: 1,
    specs: [
      "Processor: 10th Gen Intel Core i5-1035G1 | Speed: 1.0 GHz (Base) - 3.6 GHz (Max) | 4 Cores | 6MB Cache",
      "OS: Pre-Loaded Windows 10 Home with Lifetime Validity",
      "Pre-Installed: MS Office Home and Student 2019",
      "Memory and Storage: 8GB RAM DDR4-2666, Upgradable up to 12GB | 512 GB SSD",
      "Display: 15.` Full HD (1920x1080) | Brightness: 250 nits | Anti-Glare | IPS Technology",
      "Design: 1.99 cm Thin and 1.85 kg Light | Narrow Bezel | Fingerprint Reader",
      "Battery Life: 6 Hours | Rapid Charge (Up to 80% in 1 Hour)",
    ],
    inStock: 29,
    eta: 60,
    id: "l3",
    rating: 4.3,
    reviews: [
      {
        name: "Sushabhan Biswas",
        title: "Good Product in a Handsome Budget, but Battery not so strong.",
        content: `I have been using this Product for 2 weeks. The Pros & Cons are following:
            Pros: 1. System speed is very fast, as 7.75 gb is usable RAM.
            2. Slim fit & good outlook as well.
            Cons:
            1. Battery drains too fast, battery power not really good.
            2. Adapter size is too short, this creates problem while charging from a socket which is little bit away.
            Apart from the upper points, also check the warranty window after buying it, as for my case, I have to mail to Lenovo for updating my Warranty details (It was not updated properly).`,
        rating: 4,
      },
      {
        name: "Sésh",
        title:
          "Good purchase, overall; and a few points I do hope they use to make improvements",
        content: `Found this laptop to be v sleek, overall.
            Like the keyboard (find the keys to be softer than most other laptop keyboards; more 'pleasant'? for typing, relatively speaking, though not quite as pleasant as it is w a MacBookPro).
            Like the way the touchpad has been positioned slightly to the left.
            Also like the fingerprint sensor doubling up as the power on/off button.
            Front-facing cam quality also relatively good, along with wide coverage of (user) background.
            
            Would have preferred more RAM along with the whole pkg.
            Would have preferred more SSD storage space for this budget.
            
            Budget-wise, feel this is priced up by about 20%, and I think that it will sell more units if Lenovo brings it down accordingly.
            
            Overall, defn a good buy, and I'd recommend it for anyone who wants this config of laptop for their business/home purposes.`,
        rating: 4,
      },
    ],
  },
  {
    popular: true,
    For: "Gaming",
    Brand: "Asus",
    RAM: "16 GB",
    Processor: "AMD",
    DisplaySize: "14",
    HasSSD: "Yes",
    title:
      "ASUS ROG Zephyrus G14, 14` (35.56 cms) QHD, Ryzen 9 4900HS, GTX 1660Ti Max-Q 6GB GDDR6 Graphics, Gaming Laptop (16GB/1TB SSD/MS Office 2019/Windows 10/ White/Anime Matrix/1.7 Kg)",
    category: "Laptops",
    price: 111990,
    imgs: [gamingLaptop1, gamingLaptop2],
    quantity: 1,
    specs: [
      "Processor: AMD Ryzen 9 4900HS Processor, 3.0 GHz (8MB Cache, up to 4.3 GHz, 8 Cores, 16 Threads)",
      "Memory: 16GB (2x 8GB) DDR4 3200MHz Dual-Channel RAM, Upgradeable up to 24GB using 1x SO-DIMM Slot",
      "Storage: 1TB M.2 NVMe PCIe 3.0 SSD",
      "Graphics: Dedicated NVIDIA GeForce GTX 1660Ti Max-Q GDDR6 6GB VRAM",
      "Display: 14-inch (16:9) QHD (2560x1440), 300 nits Brightness, Anti-Glare IPS-level panel, 100% sRGB, Pantone Validated, Adaptive sync, 85% screen-to-body ratio",
      "Software Included: Pre-installed MS Office Home and Student 2019 | Operating System: Pre-loaded Windows 10 Home (64bit) with lifetime validity",
      "Design & battery: NanoEdge bezels | Metallic Body | with AniMe Matrix display| 6,536 CNC Milled Dot Matrix Design| Honeycomb Reinforcement Chassis | Thin and Light Laptop| 19.9mm Thin | Laptop Weight: 1.70 Kg | 76WHrs, 4-cell Lithium-Polymer Battery",
    ],
    inStock: 9,
    eta: 270,
    id: "l4",
    rating: 4.4,
    reviews: [
      {
        name: "Abhinav Mehta",
        title: "Great Laptop, you can go for it, but …",
        content: `I am facing no issues as of now, a great laptop.
          Pros :- High performance, thanks to Ryzen 9, Graphics card can handle any game (I played GTA V, and also screen recorded it, screen recording didn’t lag, and I like that), I liked the AniMe Matrix, a great part of the laptop, and the armoury crate. No issue in my Backlit keyboard.
          
          Cons :- No webcam (ASUS should have added a webcam at such a high price point)
          Gets heated quickly, but is manageable, and no other issue.
          No Ethernet port (ASUS, what the heck is wrong with you? I mean, seriously, majority of Laptops have Ethernet port 😂😂)
          
          Overall, a great purchase. Will update the review after a month’s usage, with some pics.
          `,
        rating: 4,
      },
      {
        name: "Jothi",
        title: "Not good quality",
        content: `Very disappointed to let you all know that keyboard button came out within a month of purchase`,
        rating: 2,
      },
    ],
  },
  {
    popular: true,
    For: "Content Creation",
    Brand: "Apple",
    RAM: "16 GB",
    Processor: "Intel",
    DisplaySize: "16",
    HasSSD: "No",
    title:
      "Apple MacBook Pro 2019 (16-inch/40.65 cm, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey",
    category: "Laptops",
    price: 215490,
    imgs: [appleLaptop1, appleLaptop2],
    quantity: 1,
    specs: [
      "Processor: Ninth-generation 8-core Intel Core i9 processor",
      "Memory: Stunning 40.65cm (16-inch) Retina display with True Tone technology",
      "Storage: 1TB M.2 NVMe PCIe 3.0 SSD",
      "Graphics: AMD Radeon Pro 5500M graphics with GDDR6 memory",
      "Display: Stunning 40.65cm (16-inch) Retina display with True Tone technology",
      "Battery: Up to 11 hours of battery life",
    ],
    inStock: 2,
    eta: 30,
    id: "l5",
    rating: 4.3,
    reviews: [
      {
        name: "Venkateesh",
        title: "Excellent Product from Apple",
        content: `After 3yrs of problems with Butterfly keyboard & Thermal Problem with Corei9 Apple Finally fixed those loop holes in this Model. It's almost perfect. Good for Professional use. I'm Little disappointed with Apple though., because there s no customization available for India. I hope In future they will introduce it. About the Product 5 Star Solid.
          I already own a MacBook Pro Mid 2012 still kicking. I always love quality products that apple delivery. Thanks`,
        rating: 5,
      },
      {
        name: "Vamsi Krishna",
        title: "Not a great laptop from Apple",
        content: `Writing this review after using for more than 8 months . Everything is very nice in performance except the below things
          1. It's heating excessively with in 5 to 10 minutes of opening (just for playing a song in youtube with full volume the temperature is as high as 85 to 98 degrees)
          2. charging is disintegrating very fast (in cases like when you are doing some work on something like AutoDesk & simultaneously if a browser is running --- only for 2 apps running charge disintegration shouldn’t happen right)
          3. some times it's beach-balling even it's having octa core & 16 GB RAM`,
        rating: 4,
      },
    ],
  },
];

// the hero carousel Data

export const productCarousel = [
  {
    _id: 1,
    title1: "sunlight Power",
    title2: "real power Supply",
    details: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              reiciendis rerum Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit.`,
    qualities: [
      "20,000h of high votage",
      "20,000h of high votage",
      "20,000h of high votage",
    ],
    price: "$50",
    image: image,
  },

  {
    _id: 2,
    title1: "sunlight Power",
    title2: "real power Supply",
    details: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              reiciendis rerum Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit.`,
    qualities: [
      "20,000h of high votage",
      "20,000h of high votage",
      "20,000h of high votage",
    ],
    price: "$50",
    image: image,
  },
  {
    _id: 3,
    title1: "sunlight Power",
    title2: "real power Supply",
    details: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              reiciendis rerum Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit.`,
    qualities: [
      "20,000h of high votage",
      "20,000h of high votage",
      "20,000h of high votage",
    ],
    price: "$50",
    image: image,
  },
];
//

export const BestOffer = [
  {
    image: offer,
    advert: "solar Pannel + lead Inveter + free delivery",
    price: "$200",

    Details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quis",
  },
  {
    image: image,
    advert: "solar Pannel + lead Inveter + free delivery",
    price: "$200",

    Details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quis",
  },
];

export const BannerData = [
  {
    _id: 1,
    image: image,
    title1: "mordern light",
    title2: "Solor energy",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quis adipisicing elit. Velit, ",
    qualities: [
      "long lasting Battery",
      "NoiseLess Power Supply",
      "24/7 Steady power Suppy",
    ],
  },

  {
    _id: 1,
    image: image,
    title1: "mordern light",
    title2: "Solor energy",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quis adipisicing elit. Velit, ",
    qualities: [
      "long lasting Battery",
      "NoiseLess Power Supply",
      "24/7 Steady power Suppy",
    ],
  },
];

export const Brand = [photos, photos1, photos2, photos3, photos4];
