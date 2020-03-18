
const INITIAL_STATE = {
  countries: {
    all: [],
    top10: [],
  },
  global: {
    total_cases: 0,
    total_deaths: 0,
    total_recovered: 0
  },
  user_location: {
    timezone: 'America/Recife'
  }
};
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'SET_USER_LOCATION': {
        return { ...state, user_location: action.payload }
      }
      case 'SET_GLOBAL_STATUS': {
        return { ...state, global: action.payload }
      }
      case 'SET_COUNTRIES_STATUS': {
        return { ...state, countries: action.payload }
      }
      default:
        return { ...state };
    }
  }