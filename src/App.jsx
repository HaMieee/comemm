import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from "./redux/store";
import Home from "./pages/home/Home";
import SingUp from "./pages/user/singup/SingUp";
import Login from "./pages/user/login/Login";

import ProfileUser from "./component/profile/ProfileUser";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singUp" element={<SingUp />} />
          <Route path="/profile" element={<ProfileUser />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
