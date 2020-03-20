export default {
  countries: 'https://corona.lmao.ninja/countries',
  globalStatus: 'https://corona.lmao.ninja/all',
  userLocation: ({ latitude, longitude }) => `https://geocode.xyz/${latitude},${longitude}?geoit=json`,
};
