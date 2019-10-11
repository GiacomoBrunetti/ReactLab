export const actions = {
  SET_KEYWORDS: 'SET_KEYWORDS',
  CLEAR_SEARCH: 'CLEAR_SEARCH',
  SEARCH_PRODUCTS: {
    REQUEST: 'SEARCH_PRODUCTS_REQUEST',
    SUCCESS: 'SEARCH_PRODUCTS_SUCCESS',
    FAILURE: 'SEARCH_PRODUCTS_FAILURE',
  },
};

export function triggerSetKeywords(keywords) {
  return {
    type: actions.SET_KEYWORDS,
    payload: keywords,
  }
}

export function triggerClearSearch() {
  return {
    type: actions.CLEAR_SEARCH,
  };
}

export function triggerSearchProducts(keywords) {
  return {
    type: actions.SEARCH_PRODUCTS.REQUEST,
    payload: keywords,
  }
}
