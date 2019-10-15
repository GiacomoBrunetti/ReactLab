import { combineReducers } from 'redux';
import authReducer from './auth';
import customerProductsReducer from './customerProducts';
import orderingReducer from './ordering';
import searchReducer from './search';
import productsReducer from './products';

const rootReducer = combineReducers({
  authReducer,
  customerProductsReducer,
  orderingReducer,
  productsReducer,
  searchReducer,
})

export default rootReducer;
