
const INITIAL_STATE = {
  location: window.location,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOCATION': {
      return { ...state, location: action.payload };
    }
    default:
      return { ...state };
  }
}
