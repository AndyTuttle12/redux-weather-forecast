import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  state: (state = {
    weather: WeatherReducer
  }) => state
});
console.log(rootReducer.state)
export default rootReducer;
