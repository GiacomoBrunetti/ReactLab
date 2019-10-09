import _pickBy from 'lodash/pickBy';
import moment from 'moment';

import { types as productsTypes } from '../actions/products';
import { types as authTypes } from '../actions/auth';

const initialState = {
  productList: [],
}

export default function plannerReducer(state = initialState, action) {
  const response = action.response || {};
  switch (action.type) {
    case productsTypes.PLANNER_DATA.SUCCESS:
      return {
        ...state,
        productList: response,
      }
    default:
      return state
  }
}
