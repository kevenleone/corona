
const INITIAL_STATE = {
  location: window.location,
  loading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOCATION': {
      return { ...state, location: action.payload };
    }
    case 'TOGGLE_LOADING': {
      return { ...state, loading: !state.loading };
    }
    default:
      return { ...state };
  }
}
