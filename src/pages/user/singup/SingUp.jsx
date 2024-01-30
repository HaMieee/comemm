import React from "react";
import Footer from "../../../layout/Footer";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SingUp.module.scss";
import Header from "../../../layout/Header";

let cx = classNames.bind(styles);
function SingUp() {
  return (
    <>
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("form_login")}>
          <h2>Đăng Ký Tài Khoản</h2>
          <input type="text" placeholder="Họ tên(*)" />
          <input type="text" placeholder="SĐT(*)" />
          <input type="email" placeholder="Email(*)" />
          <input type="password" placeholder="Nhập mật khẩu(*)" />
          <input type="password" placeholder="Nhập lại mật khẩu(*)" />
          <div className={cx("btn_group")}>
            <Link to={"/login"}>
              <span>Về trang đăng nhập</span>
            </Link>
            <button type="submit">Đăng ký</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingUp;
