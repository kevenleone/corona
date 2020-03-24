
const INITIAL_STATE = {
  countries: {
    all: [],
    top10: [],
  },
  globalInfo: {
    cases: 0,
    deaths: 0,
    recovered: 0,
  },
  userLocation: {
    timezone: 'America/Recife',
  },
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_userLocation': {
      return { ...state, userLocation: action.payload };
    }
    case 'SET_GLOBAL_STATUS': {
      return { ...state, globalInfo: action.payload };
    }
    case 'SET_COUNTRIES_STATUS': {
      return { ...state, countries: action.payload };
    }
    default:
      return { ...state };
  }
}
