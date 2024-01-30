import { fork } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import userSaga from './useSaga';
import cartSaga from './cartSaga';

const rootSaga = function* () {
    yield fork(userSaga);
    yield fork(loginSaga);
    yield fork(cartSaga);
};

export default rootSaga;