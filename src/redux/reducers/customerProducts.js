import { actions as productsTypes } from '../actions/customerProducts';

const initialState = {
  early: new Array(),
  peak: new Array(),
  late: new Array(),
  offer: new Array(),
  frequent: new Array(),
}


export default function customerProductsReducer(state = initialState, action = {}) {
  let codes;

  switch (action.type) {
    case productsTypes.FREQ.SUCCESS: {
      codes = action.response && action.response.map(prd => prd.code);
      return {
        ...state,
        frequent: codes
      };
    }
    case productsTypes.OFFER.SUCCESS: {
      codes = action.response && action.response.map(prd => prd.code);
      return {
        ...state,
        offer: codes
      };
    }
    case productsTypes.EARLY.SUCCESS: {
      codes = action.response && action.response.map(prd => prd.code);
      return {
        ...state,
        early: codes
      };
    }
    case productsTypes.PEAK.SUCCESS: {
      codes = action.response && action.response.map(prd => prd.code);
      return {
        ...state,
        peak: codes
      };
    }
    case productsTypes.LATE.SUCCESS: {
      codes = action.response && action.response.map(prd => prd.code);
      return {
        ...state,
        late: codes
      };
    }
    default:
      return state;
  }
}
