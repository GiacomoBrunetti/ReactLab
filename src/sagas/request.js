import {
  call, put, fork, select,
} from 'redux-saga/effects';
import { apiRequest } from '../services/api';

const getAuthToken = state => state.authReducer.token;

export function* makeApiRequest(
  types,
  path,
  args,
  optionsArg,
  requiresAuth=true,
  query,
  passThroughData,
  timed=false
  ) {
  let options = optionsArg;
  if (requiresAuth) {
    const authToken = yield select(getAuthToken);
    options = {
      ...optionsArg,
      headers: {
        Authorization: `jwt ${authToken}`,
        'Content-Type': 'application/json',
      },
    }
  }
  try {
    const response = yield call(apiRequest, path, args, options, query, timed);
    yield put({ type: types.SUCCESS, response, ...passThroughData });
  } catch (error) {
    yield put({ type: types.FAILURE, error, ...passThroughData });
  }
}

// export function* requestMany(ids, type, path, requiresAuth) {
//   for (let id of ids) {// eslint-disable-line
//     try {
//       yield fork(makeApiRequest, type, path, id, {}, requiresAuth);
//     } catch (error) {
//       console.warn(error);
//     }
//   }
// }

// export function* makeCmsRequest(types, path) {
//   try {
//     const response = yield call(cmsRequest, path);
//     yield put({ type: types.SUCCESS, response });
//   } catch (error) {
//     yield put({ type: types.FAILURE, error });
//   }
// }
