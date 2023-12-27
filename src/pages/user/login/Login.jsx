import React, { useEffect, useState } from "react";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "lodash";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let cx = classNames.bind(styles);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const checkUser = async () => {
    const users = await axios.get("http://localhost:3000/users");
    const user = users.data.find(u => u.email === email && u.password === password)
    if (!isEmpty(user)) {
      console.log(user);
      delete user.password
      localStorage.setItem('user', JSON.stringify(user))
      toast.success(`Xin chào ${user.name}`,{ position: toast.POSITION.TOP_RIGHT })
      window.location.href = '/'
    } else {
      toast.error('Bạn đã nhập sai thông tin',{ position: toast.POSITION.TOP_RIGHT })
    }
  };

  const handleSubmit = () => {
    checkUser();
  };

  return (
    <>
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <h1>Đăng nhập</h1>
          <div className={cx("form_login")}>
            <input
              type="text"
              placeholder="Email của bạn"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit" onClick={handleSubmit}>
              Đăng Nhập
            </button>
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
