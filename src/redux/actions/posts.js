export const actions = {
  CMS_LOOKUP: {
    REQUEST: 'CMS_LOOKUP_REQUEST',
    SUCCESS: 'CMS_LOOKUP_SUCCESS',
    FAILURE: 'CMS_LOOKUP_FAILURE',
  },
  READ_FEATURE: {
    REQUEST: 'FEATURE_REQUEST',
    SUCCESS: 'FEATURE_SUCCESS',
    FAILURE: 'FEATURE_FAILURE',
  },
  READ_FEATURES: {
    REQUEST: 'FEATURES_REQUEST',
    SUCCESS: 'FEATURES_SUCCESS',
    FAILURE: 'FEATURES_FAILURE',
  },
}

export function cmsLookup() {
  return {
    type: actions.CMS_LOOKUP.REQUEST
  }
}

export const saveReadFeature = featureId => ({ type: actions.READ_FEATURE.REQUEST, payload: featureId })

export const saveReadFeatures = featureIds => ({ type: actions.READ_FEATURES.REQUEST, payload: [...featureIds] })
