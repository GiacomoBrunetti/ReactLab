import { combineReducers } from 'redux';
import authReducer from './auth';
import orderingReducer from './ordering';
import searchReducer from './search';

const rootReducer = combineReducers({
  authReducer,
  orderingReducer,
  searchReducer,
})

export default rootReducer;
