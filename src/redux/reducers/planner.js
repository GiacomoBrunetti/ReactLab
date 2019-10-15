// import _pickBy from 'lodash/pickBy';
// import moment from 'moment';

import { actions as productsTypes } from '../actions/products';
import { actions as authTypes } from '../actions/auth';
import plannerProducts from '../../seeds/planner';

const initialState = {
  // productList: [],
  productList = plannerProducts,
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
