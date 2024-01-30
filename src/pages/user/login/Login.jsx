import React from "react";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


let cx = classNames.bind(styles);

function Login() {
  return (
    <>
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <h1>Đăng nhập</h1>
          <div className={cx("form_login")}>
            <input type="text" placeholder="Email của bạn" />
            <input type="password" placeholder="Nhập mật khẩu" />
            <button type="submit">Đăng Nhập</button>
            <p>
              Bạn chưa có tài khoản? Vui lòng đăng ký Tài khoản mới
              <Link to={"/singup"}>
                <span>tại đây</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
