import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { cartAction } from "../slices/cartSlice";

const fetchCarts = async () => {
  return await axios.get("http://localhost:3000/carts");
};

const handleFetchCart = function* (action) {
  console.log("in saga cart");
  try {
    yield put({
      type: cartAction.getToCartPending.type,
    });
    const response = yield call(fetchCarts);
    const carts = response.data;
    if (carts) {
      const cart = carts.find((c) => c.userId === action.payload);
      if (cart) {
        yield put({
          type: cartAction.getToCartSuccess.type,
          payload: cart,
        });
      }
    }
  } catch (e) {
    yield put({
      type: cartAction.getToCartError.type,
      payload: { message: e.message },
    });
  }
};

const cartSaga = function* () {
  yield takeLatest(`${cartAction.getToCartPending}_saga`, handleFetchCart);
};

export default cartSaga;
