export const actions = {
  FREQ: {
    REQUEST: 'CP_FREQ_REQUEST',
    SUCCESS: 'CP_FREQ_SUCCESS',
    FAILURE: 'CP_FREQ_FAILURE',
    },
  OFFER: {
    REQUEST: 'CP_OFFER_REQUEST',
    SUCCESS: 'CP_OFFER_SUCCESS',
    FAILURE: 'CP_OFFER_FAILURE',
  },
  EARLY: {
    REQUEST: 'CP_EARLY_REQUEST',
    SUCCESS: 'CP_EARLY_SUCCESS',
    FAILURE: 'CP_EARLY_FAILURE',
  },
  PEAK: {
    REQUEST: 'CP_PEAK_REQUEST',
    SUCCESS: 'CP_PEAK_SUCCESS',
    FAILURE: 'CP_PEAK_FAILURE',
  },
  LATE: {
    REQUEST: 'CP_LATE_REQUEST',
    SUCCESS: 'CP_LATE_SUCCESS',
    FAILURE: 'CP_LATE_FAILURE',
  },
  NOT_SEASONAL: {
    REQUEST: 'CP_NOT_SEASONAL_REQUEST',
    SUCCESS: 'CP_NOT_SEASONAL_SUCCESS',
    FAILURE: 'CP_NOT_SEASONAL_FAILURE',
  }
}

export function triggerCustomerProductsForTab(tabName) {
  return {
    type: actions[tabName.toUpperCase()].REQUEST,
    payload: tabName
  }
}