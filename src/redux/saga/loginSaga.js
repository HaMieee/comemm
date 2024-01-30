import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { loginAction } from "../slices/loginSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userAction } from "../slices/userSlice";

const fetchUsers = async (payload) => {
  return await axios.get("http://localhost:3000/users", payload);
};

const handleLogin = function* (action) {
    console.log('aloo???')
  try {
    yield put({
      type: userAction.loginPending.type,
    });
    const response = yield call(() => fetchUsers(action.payload));
    const users = response.data.data;
    const user = users.map(
      (u) =>
        u.email === action.payload.email &&
        u.password === action.payload.password
    );
    console.log('>>> User: ', user);
    if (user) {
        yield put({
            type: userAction.loginSuccess.type,
            payload: user,
          });
          localStorage.setItem('user', JSON.stringify(user.token))
          window.location.href = '/'
          toast.success(`Xin chào ${user.name}`,{ position: toast.POSITION.TOP_RIGHT })
    }

  } catch (e) {
    yield put({
      type: userAction.addUserError.type,
      payload: { message: e.message },
    });
    toast.error(`login fail`,{ position: toast.POSITION.TOP_RIGHT })
  }
};

const loginSaga = function* () {
  yield takeLatest(`${userAction.loginPending}_saga`, handleLogin);
};

export default loginSaga;
