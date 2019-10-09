import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import rootSaga from '../sagas';
import {triggerOrderItemRequest, triggerOrderItemSuccess, triggerLoginRequest} from './actions';


const persistConfig = {
  key: 'root',
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(triggerLoginRequest({ username: 'giacomo@natoora.com', password: 'b' }))
// store.dispatch(triggerLoginSuccess({ token: '#422222'}));
// store.dispatch(triggerOrderItemRequest({customerProductId: 12, quantity: 2, unit: 'KG'}));
// store.dispatch(triggerOrderItemSuccess({
//   id: 1,
//   customer_product: 12,
//   quantity_ordered: 2,
//   unit_ordered: 'KG',
//   sample: false,
// }));


unsubscribe();
