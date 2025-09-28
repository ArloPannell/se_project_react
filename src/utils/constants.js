const wtwImages = [
  {
    name: "headerLogo",
    image: new URL("../assets/imgWtwLogo.svg", import.meta.url).href,
  },
  {
    name: "AlanTuring",
    image: new URL("../assets/Alan-Turing.png", import.meta.url).href,
  },
  {
    name: "headerAvatar",
    image: new URL("../assets/imgHeaderAvatar.svg", import.meta.url).href,
  },
  {
    name: "dayCloudy",
    image: new URL("../assets/weatherCards/imgDayCloudy.svg", import.meta.url)
      .href,
  },
  {
    name: "dayFog",
    image: new URL("../assets/weatherCards/imgDayFog.svg", import.meta.url)
      .href,
  },
  {
    name: "dayRain",
    image: new URL("../assets/weatherCards/imgDayRain.svg", import.meta.url)
      .href,
  },
  {
    name: "daySnow",
    image: new URL("../assets/weatherCards/imgDaySnow.svg", import.meta.url)
      .href,
  },
  {
    name: "dayStorm",
    image: new URL("../assets/weatherCards/imgDayStorm.svg", import.meta.url)
      .href,
  },
  {
    name: "dayClear",
    image: new URL("../assets/weatherCards/imgDayClear.svg", import.meta.url)
      .href,
  },
  {
    name: "nightCloudy",
    image: new URL("../assets/weatherCards/imgNightCloudy.svg", import.meta.url)
      .href,
  },
  {
    name: "nightFog",
    image: new URL("../assets/weatherCards/imgNightFog.svg", import.meta.url)
      .href,
  },
  {
    name: "nightRain",
    image: new URL("../assets/weatherCards/imgNightRain.svg", import.meta.url)
      .href,
  },
  {
    name: "nightSnow",
    image: new URL("../assets/weatherCards/imgNightSnow.svg", import.meta.url)
      .href,
  },
  {
    name: "nightStorm",
    image: new URL("../assets/weatherCards/imgNightStorm.svg", import.meta.url)
      .href,
  },
  {
    name: "nightClear",
    image: new URL("../assets/weatherCards/imgNightClear.svg", import.meta.url)
      .href,
  },
];

const weatherDefaults = {
  weatherTemp: [999, 999],
  tempType: "F",
  imgWeather: "nightRain",
  weatherType: "cold",
  location: "Mexico",
  description: "Fluffy",
};

const defaultClothingItems = [
  {
    _id: 1,
    name: "Boot",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Boot.png?etag=0953a2ea59f1c6ebc832fabacdc9c70e",
  },
  {
    _id: 2,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 3,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
  {
    _id: 4,
    name: "Dress",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Dress.png?etag=1f9cd32a311ab139cab43494883720bf",
  },
  {
    _id: 5,
    name: "Hoodie",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 6,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 7,
    name: "Jeans",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jeans.png?etag=58345e8bef1ce5f95ac882e71d309e6c",
  },
  {
    _id: 8,
    name: "Loafers",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Loafers.png?etag=dc2d6e1ca7b297597406e35c40aef030",
  },
  {
    _id: 9,
    name: "Sandals",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sandals.png?etag=9bea85a77c0306586d2b71a33b626d41",
  },
  {
    _id: 10,
    name: "Scarf",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Scarf.png?etag=74efbee93810c926b5507e862c6cb76c",
  },
  {
    _id: 11,
    name: "Shorts",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Shorts.png?etag=d728c496643f610de8d8fea92dd915ba",
  },
  {
    _id: 12,
    name: "Skirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Skirt.png?etag=27a6bea7e1b63218820d615876fa31d1",
  },
  {
    _id: 13,
    name: "Sneakers",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 14,
    name: "Sunglasses",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sunglasses.png?etag=a1bced9e331d36cb278c45df51150432",
  },
  {
    _id: 15,
    name: "Sweatshirt",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sweatshirt.png?etag=008a9674757bea2e0bdb31242e364be0",
  },
  {
    _id: 16,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
];

const weatherIDMap = [
  { id: 200, type: "Storm" },
  { id: 201, type: "Storm" },
  { id: 202, type: "Storm" },
  { id: 210, type: "Storm" },
  { id: 211, type: "Storm" },
  { id: 212, type: "Storm" },
  { id: 221, type: "Storm" },
  { id: 230, type: "Storm" },
  { id: 231, type: "Storm" },
  { id: 232, type: "Storm" },
  { id: 300, type: "Rain" },
  { id: 301, type: "Rain" },
  { id: 302, type: "Rain" },
  { id: 310, type: "Rain" },
  { id: 311, type: "Rain" },
  { id: 312, type: "Rain" },
  { id: 313, type: "Rain" },
  { id: 314, type: "Rain" },
  { id: 321, type: "Rain" },
  { id: 500, type: "Rain" },
  { id: 501, type: "Rain" },
  { id: 502, type: "Rain" },
  { id: 503, type: "Rain" },
  { id: 504, type: "Rain" },
  { id: 511, type: "Rain" },
  { id: 520, type: "Rain" },
  { id: 521, type: "Rain" },
  { id: 522, type: "Rain" },
  { id: 531, type: "Rain" },
  { id: 600, type: "Snow" },
  { id: 601, type: "Snow" },
  { id: 602, type: "Snow" },
  { id: 611, type: "Snow" },
  { id: 612, type: "Snow" },
  { id: 613, type: "Snow" },
  { id: 615, type: "Snow" },
  { id: 616, type: "Snow" },
  { id: 620, type: "Snow" },
  { id: 621, type: "Snow" },
  { id: 622, type: "Snow" },
  { id: 701, type: "Fog" },
  { id: 711, type: "Fog" },
  { id: 721, type: "Fog" },
  { id: 731, type: "Fog" },
  { id: 741, type: "Fog" },
  { id: 761, type: "Fog" },
  { id: 762, type: "Fog" },
  { id: 771, type: "Fog" },
  { id: 781, type: "Fog" },
  { id: 800, type: "Clear" },
  { id: 801, type: "Cloudy" },
  { id: 802, type: "Cloudy" },
  { id: 803, type: "Cloudy" },
  { id: 804, type: "Cloudy" },
];

export { wtwImages, defaultClothingItems, weatherIDMap, weatherDefaults };
