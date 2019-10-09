import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import {triggerOrderItemRequest, triggerOrderItemSuccess, triggerLoginRequest} from './actions';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(triggerLoginRequest({username: 'giacomo@natoora.com'}))
// store.dispatch(triggerLoginSuccess({ token: '#422222'}));
store.dispatch(triggerOrderItemRequest({customerProductId: 12, quantity: 2, unit: 'KG'}));
store.dispatch(triggerOrderItemSuccess({
  id: 1,
  customer_product: 12,
  quantity_ordered: 2,
  unit_ordered: 'KG',
  sample: false,
}));


unsubscribe();
