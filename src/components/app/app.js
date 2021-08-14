import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodayWeather from '../today-weather/today-weather';
import ErrorIndicator from '../error-indicator/error-indicator';
import LoadingIndicator from '../loading-indicator/loading-indicator';
import withService from '../hoc/with-service';
import {
  weatherRequest,
  weatherFailure,
  weatherSuccess,
} from '../../actions/actions';

class App extends Component {
  componentDidMount() {
    this.props.requestWeather();
  }

  render() {
    const { loading, error } = this.props;

    if (loading) return <LoadingIndicator />;
    if (error) return <ErrorIndicator />;
    return <TodayWeather />;
  }
}

const mapStateToProps = ({ loading, error }) => {
  return {
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestWeather: () => {
      dispatch(weatherRequest);
      ownProps.service
        .getWeather()
        .then((weather) => dispatch(weatherSuccess(weather)))
        .catch(() => dispatch(weatherFailure()));
    },
  };
};

export default withService()(connect(mapStateToProps, mapDispatchToProps)(App));
