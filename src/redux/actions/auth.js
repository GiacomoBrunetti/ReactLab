export const actions = {
  'LOGIN': {
    'REQUEST': 'LOGIN_R',
    'SUCCESS': 'LOGIN_S',
    'FAILURE': 'LOGIN_F',
  },
  'LOGOUT': {
    'REQUEST': 'LOGOUT_R',
    'SUCCESS': 'LOGOUT_S',
    'FAILURE': 'LOGOUT_F',
  },
  'PW_RESET': {
    'REQUEST': 'PW_RESET_R',
    'SUCCESS': 'PW_RESET_S',
    'FAILURE': 'PW_RESET_F',
  },
  'PW_CHANGE': {
    'REQUEST': 'PW_CHANGE_R',
    'SUCCESS': 'PW_CHANGE_S',
    'FAILURE': 'PW_CHANGE_F',
  },
}

/** LOGIN */
export function triggerLoginRequest(credentials) {
  return { type: actions.LOGIN.REQUEST, payload: {...credentials} };
};
export function triggerLoginSuccess(loginResponse) {
  return { type: actions.LOGIN.SUCCESS, payload: {...loginResponse} };
};
export function triggerLoginFailure(loginResponse) {
  return { type: actions.LOGIN.FAILURE, payload: {...loginResponse} };
};

/** LOGOUT */
export function triggerLogoutRequest() {
  return { type: actions.LOGOUT.REQUEST };
};
export function triggerLogoutSuccess() {
  return { type: actions.LOGOUT.SUCCESS };
};
export function triggerLogoutFailure() {
  return { type: actions.LOGOUT.FAILURE };
};

/** PW_RESET */
export function triggerPasswordResetRequest(credentials) {
  return { type: actions.PW_RESET.REQUEST, payload: [...credentials] };
};
export function triggerPasswordResetSuccess() {
  return { type: actions.PW_RESET.SUCCESS };
};
export function triggerPasswordResetFailure(error) {
  return { type: actions.PW_RESET.FAILURE, payload: { error } };
};

/** PW_RESET */
export function triggerPasswordChangeRequest(credentials) {
  return { type: actions.PW_CHANGE.REQUEST, payload: [...credentials] };
};
export function triggerPasswordChangeSuccess() {
  return { type: actions.PW_CHANGE.SUCCESS };
};
export function triggerPasswordChangeFailure(error) {
  return { type: actions.PW_CHANGE.FAILURE, payload: { error } };
};
