import { combineReducers } from 'redux';
import board from './board';

//for future use, we might have more reducers
export default combineReducers({
  checkers: board
});