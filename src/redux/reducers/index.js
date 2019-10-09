import { combineReducers } from 'redux';
import authReducer from './auth';
import orderingReducer from './ordering';

const rootReducer = combineReducers({
  authReducer,
  orderingReducer,
})

export default rootReducer;
