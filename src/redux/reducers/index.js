import { combineReducers } from 'redux';
import authState from './auth';
import orderingState from './ordering';

const rootReducer = combineReducers({
  authState,
  orderingState,
})

export default rootReducer;
