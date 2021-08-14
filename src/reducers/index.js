const initialState = {
  loading: false,
  error: false,
  weather: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_REQUESTED':
      return { loading: true, error: false, weather: {} };

    case 'FETCH_WEATHER_FAILURE':
      return { loading: false, error: true, weather: {} };

    case 'FETCH_WEATHER_SUCCESS':
      return { loading: false, error: false, weather: action.payload };

    default:
      return state;
  }
};

export default reducer;
