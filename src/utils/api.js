
export default {
  countries: 'https://disease.sh/v2/countries',
  globalStatus: 'https://disease.sh/v2/all',
  userLocation: ({ latitude, longitude }) => `https://geocode.xyz/${latitude},${longitude}?geoit=json`,
};
