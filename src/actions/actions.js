const weatherRequest = { type: 'FETCH_WEATHER_REQUESTED' };
const weatherFailure = { type: 'FETCH_WEATHER_FAILURE' };
const weatherSuccess = (payload) => ({
  type: 'FETCH_WEATHER_SUCCESS',
  payload,
});

export { weatherRequest, weatherFailure, weatherSuccess };
