import { actions as auth } from '../actions/auth';


const initialState = {
  loggedIn: false,
  token: '',
  loginFailed: false,
  readOnlyNoPrices: false,
  readOnly: false,
  passwordReset: null,
  passwordChanged: null,
  customerName: '',
  username: '',
  policyId: null,
  acceptedPrivacyPolicy: false,
};

export default function authState(state = initialState, action) {
  switch (action.type) {
    case auth.LOGIN.SUCCESS: {
      const loggedIn = !!action.payload.token;
      // global.first_login = action.first_login || false;
      return {
        loggedIn,
        token: action.payload.token,
        // Note that loginFailed is stored separately from
        // loggedIn as its initial value is 'false'.
        // loginFailed: false,
        // readOnly: action.payload.read_only_access || false,
        // readOnlyNoPrices: action.payload.read_only_no_prices || false,
        // customerName: action.payload.customer_name || '',
        // username: action.payload.user_email || '',
        // acceptedPrivacyPolicy: action.payload.accepted_privacy_policy,
        // policyId: action.payload.privacy_policy_id,
      };
    }
    case auth.LOGIN.FAILURE: {
      return {
        ...initialState,
        loginFailed: true,
      }
    }
    case auth.LOGOUT.SUCCESS:
    case auth.LOGOUT.FAILURE:
      return initialState
    case auth.PW_RESET.SUCCESS:
      return {
        ...initialState,
        emailSent: true,
      }
    case auth.PW_RESET.FAILURE:
      return {
        ...initialState,
        userNotFound: true,
      }
    case auth.PW_CHANGE.SUCCESS:
      global.passwordChanged = true
      return {
        ...initialState,
        passwordChanged: true,
      }
    case auth.PW_CHANGE.FAILURE:
      global.passwordChanged = false
      return {
        ...initialState,
        noMatch: true,
      }
    // case auth.PRIVACY_POLICY.SUCCESS:
    //   return {
    //     ...state,
    //     acceptedPrivacyPolicy: action.response.accepted,
    //   }
    // case auth.PRIVACY_POLICY.FAILURE:
    //   return state
    // case auth.GET_MISSING_DATA.SUCCESS:
    //   return {
    //     ...state,
    //     customerName: action.response.customer_name,
    //     username: action.response.user_email,
    //     policyId: action.response.policy_id || null,
    //     readOnly: action.response.read_only_access || false,
    //     readOnlyNoPrices: action.response.read_only_no_prices || false,
    //   }
    // case auth.GET_MISSING_DATA.FAILURE:
    //   return state
    default:
      return state
  }
}
