export default class WeatherService {
  _apiBase =
    'https://api.openweathermap.org/data/2.5/weather?id=3067696&units=metric&appid=2a605a628b0fafb83b8e21785b607418';

  getWeather = async () => {
    const res = await fetch(this._apiBase);

    if (!res.ok) {
      throw new Error('could not fetch');
    }

    const weather = await res.json();

    return this._transform(weather);
  };

  _transform(weather) {
    let weatherCondition;

    if (weather.weather[0].main === 'Thunderstorm')
      weatherCondition = 'thunderstorm';
    if (
      weather.weather[0].main === 'Drizzle' ||
      weather.weather[0].main === 'Rain'
    )
      weatherCondition = 'rain';
    if (weather.weather[0].main === 'Snow') weatherCondition = 'snow';
    if (weather.weather[0].id.toString()[0] === '7') weatherCondition = 'clear';
    if (weather.weather[0].id.toString()[0] === '8') weatherCondition = 'clear';

    return {
      weatherCondition,
      temp: Math.round(weather.main.temp),
      pressure: weather.main.pressure,
      humidity: weather.main.humidity,
      windSpeed: weather.wind.speed,
    };
  }
}
