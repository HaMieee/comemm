import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cartSlice from "./slices/cartSlice";
import loginSlice from "./slices/loginSlice";
import rootSaga from "./saga/rootSaga";
import userSlice from "./slices/userSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    login: loginSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
