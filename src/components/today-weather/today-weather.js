import React from 'react';
import { connect } from 'react-redux';
import './today-weather.scss';

import cloudy from '../../assets/images/cloudy.png';
import rainy from '../../assets/images/rainy.png';
import snow from '../../assets/images/snow.png';
import thundershtorm from '../../assets/images/thundershtorm.png';

const TodayWeather = ({ temp, wind, pressure, humidity, weatherCondition }) => {
  return (
    <section className="today">
      <div className="today__content">
        <h1 className="today__town">Prague</h1>
        <img src={thundershtorm} alt="weather" className="today__weathericon" />
        <span className="today__temp">
          {temp >= 0 ? '+' : '-'}
          {temp}
          <span>°C</span>
        </span>
        <span className="today__secondary-info">Wind speed: {wind}m/s</span>
        <span className="today__secondary-info">Pressure: {pressure}hPa</span>
        <span className="today__secondary-info">Humidity: {humidity}%</span>
      </div>
      <div className="today__image"></div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    temp: state.weather.temp,
    wind: state.weather.windSpeed,
    pressure: state.weather.pressure,
    humidity: state.weather.humidity,
    weatherCondition: state.weather.weatherCondition,
  };
};

export default connect(mapStateToProps, null)(TodayWeather);
