import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./redux/store";
import Home from "./pages/home/Home";
import CartReview from "./component/cart_review/CartReview";
import SingUp from "./pages/user/singup/SingUp";
import Login from "./pages/user/login/Login";
import Test from "./layout/test";
import Productdetails from "./component/productdetails/Productdetails";
import ProfileUser from "./component/profile/ProfileUser";
import BillDetail from "./component/bill/BillDetail";
import Bills from "./component/bill/Bills";

function App() {

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singUp" element={<SingUp />} />
          <Route path="/cart" element={<CartReview />} />
          <Route path="/profile" element={<ProfileUser />} />
          <Route path="/product/detail/:id" element={<Productdetails />} />
          <Route path="/toast" element={<Test />} />
          <Route path="/bill/detail/:id" element={<BillDetail />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
