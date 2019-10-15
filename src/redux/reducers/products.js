import _pickBy from 'lodash/pickBy';
// import moment from 'moment';

import { actions as productsTypes } from '../actions/products';
import { actions as authTypes } from '../actions/auth';

const initialState = {
  products: new Object(),
}

export default function productsReducer(state = initialState, action = {}) {
  const response = action.response || {}
  switch (action.type) {
    case authTypes.LOGOUT.SUCCESS:
      return initialState
    case productsTypes.FREQ.SUCCESS:
    case productsTypes.OFFER.SUCCESS:
    case productsTypes.EARLY.SUCCESS:
    case productsTypes.PEAK.SUCCESS:
    case productsTypes.LATE.SUCCESS:
    case productsTypes.NOT_SEASONAL.SUCCESS: {
      const newProducts = {...state.products}
      for (let i = response.length-1; i >= 0; i--) {
        const prd = response[i];
        newProducts[prd.code] = prd;
      }
      return {
        ...state,
        products: newProducts
      }
    }
    default:
      return state
  }
}
