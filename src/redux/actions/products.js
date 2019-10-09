export const actions = {
  FREQ: {
    REQUEST: 'P_FREQ_REQUEST',
    SUCCESS: 'P_FREQ_SUCCESS',
    FAILURE: 'P_FREQ_FAILURE',
    },
  OFFER: {
    REQUEST: 'P_OFFER_REQUEST',
    SUCCESS: 'P_OFFER_SUCCESS',
    FAILURE: 'P_OFFER_FAILURE',
  },
  EARLY: {
    REQUEST: 'P_EARLY_REQUEST',
    SUCCESS: 'P_EARLY_SUCCESS',
    FAILURE: 'P_EARLY_FAILURE',
  },
  PEAK: {
    REQUEST: 'P_PEAK_REQUEST',
    SUCCESS: 'P_PEAK_SUCCESS',
    FAILURE: 'P_PEAK_FAILURE',
  },
  LATE: {
    REQUEST: 'P_LATE_REQUEST',
    SUCCESS: 'P_LATE_SUCCESS',
    FAILURE: 'P_LATE_FAILURE',
  },
  NOT_SEASONAL: {
    REQUEST: 'P_NOT_SEASONAL_REQUEST',
    SUCCESS: 'P_NOT_SEASONAL_SUCCESS',
    FAILURE: 'P_NOT_SEASONAL_FAILURE',
  }
}

export function triggerProductsForTab(tabName) {
  return {
    type: actions[tabName.toUpperCase()].REQUEST,
    payload: tabName
  }
}