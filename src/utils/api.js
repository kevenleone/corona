export default {
  countries: 'https://coronavirus-19-api.herokuapp.com/countries',
  globalStatus: 'https://coronavirus-19-api.herokuapp.com/all',
  userLocation: ({ latitude, longitude }) => `https://geocode.xyz/${latitude},${longitude}?geoit=json`,
};
