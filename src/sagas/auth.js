import { takeEvery } from 'redux-saga/effects';
import { actions as authTypes } from '../redux/actions/auth';
import { makeApiRequest } from './request';
// import navigationService from '../services/navigationService';


// helper functions
function* disableFCMDevice(action) {
  yield makeApiRequest(
    authTypes.LOGOUT,
    `fcm-devices?token=${action.token}`,
    '',
    { method: 'GET' },
    true,
  )
}

function* requestAuthMissingData() {
  yield makeApiRequest(
    authTypes.GET_MISSING_DATA,
    'user-missing-data',
    '',
    { method: 'GET' },
    true,
  )
}

function* loginRequest(action) {
  yield makeApiRequest(
    authTypes.LOGIN,
    'auth/login/',
    '',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: action.payload.username,
        password: action.payload.password,
    }),
  },
  false,
  );
}


// Sagas
// -----
export function* login() {
  try {
    yield takeEvery(
      authTypes.LOGIN.REQUEST,
      loginRequest,
    );
  } catch (err) {
    console.warn('error', err);
  }
}

export function* logout() {
  try {
    yield takeEvery(
      authTypes.LOGOUT.REQUEST,
      disableFCMDevice,
    )
  } catch (e) {
    console.warn(e)
  }
}

export function* sendEmail() {
  try {
    yield takeEvery(
      authTypes.PASSWORD_RESET.REQUEST,
      action => makeApiRequest(authTypes.PASSWORD_RESET,
        `api/forgot-password?email=${action.username}`, '',
        { method: 'GET' }, false),
    );
  } catch (err) {
    console.warn('error', err);
  }
}

export function* changePassword() {
  try {
    yield takeEvery(
      authTypes.PASSWORD_CHANGE.REQUEST,
      action => makeApiRequest(authTypes.PASSWORD_CHANGE,
        `change-password/?user=${global.user}&current_password=${action.currentPassword}&password=${action.password}&confirm_password=${action.confirmPassword}`, '',
        { method: 'GET' }, false),
    );
  } catch (err) {
    console.warn(err);
  }
}

export function* afterAcceptedPrivacyPolicy() {
  try {
    yield takeEvery(
      authTypes.PRIVACY_POLICY.REQUEST,
      action => makeApiRequest(
        authTypes.PRIVACY_POLICY,
        `privacy-policy/${action.policyId}`,
        '',
        {
          method: 'PUT',
          body: JSON.stringify({
            accepted: true
          })
        },
        true,
      ),
    );
  } catch (e) {
    console.warn(e)
  }
}

export function* getAuthMissingData() {
  try {
    yield takeEvery(
      authTypes.GET_MISSING_DATA.REQUEST,
      requestAuthMissingData
    );
  } catch (e) {
    console.warn(e)
  }
}
