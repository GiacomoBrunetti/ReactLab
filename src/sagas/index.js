import { all, call, spawn } from 'redux-saga/effects';
import { login } from './auth';

export default function* rootSaga() {
  const sagas = [
    login,
  ];
  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}
/**
 * This strategy maps our child sagas to spawned generators (detaching them from the root parent)
 * which start our sagas as subtasks in a try block.
 * Our saga will run until termination, and then be automatically restarted.
 * The catch block harmlessly handles any error that may have been thrown by, and terminated, our saga.
*/

