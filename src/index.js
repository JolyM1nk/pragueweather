import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './main.scss';

import App from './components/app/app';
import ErrorBoundary from './components/error-boundary/error-boundary';
import { ServiceProvider } from './components/service-context/service-context';

import store from './store';
import WeatherService from './services/weatherService';

const weatherService = new WeatherService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <ServiceProvider value={weatherService}>
        <App />
      </ServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
