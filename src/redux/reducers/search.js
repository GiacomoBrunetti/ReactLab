import { actions as searchTypes } from '../actions/search';

const initialState = {
  keywords: '',
  results: [],
}

export default function searchReducer(state = initialState, action) {
  const payload = action.payload || {};
  switch (action.type) {
    case searchTypes.SET_KEYWORDS:
      return {
        ...state,
        keywords: payload,
      }
    case searchTypes.CLEAR_SEARCH:
      return {
        keywords: '',
        results: [],
      };
    case searchTypes.SEARCH_PRODUCTS.SUCCESS: {
      let results = [];
      for (let i = 0; i < Object.keys(action.response).length; i++) {
        results.push(action.response[i])
      }
      if (results.length === 0) {
        results = [];
      }
      return {
        ...state,
        results,
      }
    }
    default:
      return state;
  }
};
