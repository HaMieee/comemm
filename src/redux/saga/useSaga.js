import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { userAction } from "../slices/userSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const createUser = async (payload) => {
  return await axios.post("http://localhost:3000/users", payload);
};

const handleCreateUser = function* (action) {
  try {
    yield put({
      type: userAction.addUserPending.type,
    });
    const response = yield call(() => createUser(action.payload));
    const user = response.data.data;
    delete user.password;
    yield put({
      type: userAction.addUserSuccess.type,
      payload: user,
    });
  } catch (e) {
    yield put({
      type: userAction.addUserError.type,
      payload: { message: e.message },
    });
  }
};

const fetchUsers = async () => {
  return await axios.get("http://localhost:3000/users");
};

const fetchUserById = async (userId) => {
  return await axios.get(`http://localhost:3000/users/${userId}`);
};

const handleFetchUser = function* (action) {
  try {
    yield put({
      type: userAction.getUserPending.type,
    });
    const response = yield call(() => fetchUserById(action.payload));
    const user = response.data;
    delete user.password;
    yield put({
      type: userAction.getUserSuccess,
      payload: user,
    });
  } catch (e) {
    yield put({
      type: userAction.getUserError,
      payload: { message: e.message },
    });
    toast.error(`login fail`, { position: toast.POSITION.TOP_RIGHT });
  }
};

const handleLogin = function* (action) {
  try {
    yield put({
      type: userAction.loginPending.type,
    });
    const response = yield call(fetchUsers);
    const users = response.data;
    const user = users.find(
      (u) =>
        u.email === action.payload.email &&
        u.password === action.payload.password
    );
    if (user) {
      yield put({
        type: userAction.loginSuccess.type,
        payload: user,
      });
      localStorage.setItem("user", JSON.stringify({token: user.token, userId: user.id}));
      window.location.href = "/";
      toast.success(`Xin chào ${user.name}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  } catch (e) {
    yield put({
      type: userAction.addUserError.type,
      payload: { message: e.message },
    });
    toast.error(`login fail`, { position: toast.POSITION.TOP_RIGHT });
  }
};

const userSaga = function* () {
  yield takeLatest(`${userAction.addUserPending}_saga`, handleCreateUser);
  yield takeLatest(`${userAction.loginPending}_saga`, handleLogin);
  yield takeLatest(`${userAction.getUserPending}_saga`, handleFetchUser);
};

export default userSaga;
