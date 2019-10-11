import { takeEvery } from 'redux-saga/effects';
import { actions as searchTypes } from 'natoora/src/redux/actions/search';
import { makeApiRequest } from './request';

// Convenience functions
// ---------------------
function* makeSearchRequest(action) {
  if (action.keywords.length >= 3) {
    const query = { product: action.payload.keywords };
    yield makeApiRequest(
      searchTypes.SEARCH_PRODUCTS,
      'search-products',
      '',
      { method: 'GET' },
      true,
      query,
    );
  }
};

// Sagas
// -----
export function* searchProducts() {
  try {
    yield takeEvery(
      searchTypes.SEARCH_PRODUCTS.REQUEST,
      makeSearchRequest,
    );
  } catch (err) {
    console.warn(err)
  }
};
