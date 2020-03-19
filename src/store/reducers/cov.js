
const INITIAL_STATE = {
  countries: {
    all: [],
    top10: [],
  },
  global_info: {
    total_active_cases: 0,
    total_serious_cases: 0,
    total_new_deaths_today: 0,
    total_new_cases_today: 0,
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
        return { ...state, global_info: action.payload }
      }
      case 'SET_COUNTRIES_STATUS': {
        return { ...state, countries: action.payload }
      }
      default:
        return { ...state };
    }
  }