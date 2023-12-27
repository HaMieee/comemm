import React, { useEffect, useState } from "react";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";

import classNames from "classnames/bind";
import styles from "./SingUp.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "lodash";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let cx = classNames.bind(styles);
function SingUp() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const checkInValid = () => {
    let isValid = false
    if (
    !isEmpty(fullName) &&
    !isEmpty(phoneNumber) &&
    !isEmpty(email) &&
    !isEmpty(password) &&
    !isEmpty(confirmPassword)
    ) {
      isValid = true
    } else {
      isValid = false
    }
    return isValid
  }

  const checkPassword = () => {
    let isValid = false
    if (password === confirmPassword) {
      isValid = true
    } else {
      isValid = false
    }
    return isValid;
  };

  const handleSubmit = async () => {
    if (checkInValid()) {
      if (checkPassword()) {
        const payload = {
          name: fullName,
          phoneNumber: phoneNumber,
          email: email,
          password: password,
          token: 'ACCESS_TOKEN',
        };
        try {
          await axios.post("http://localhost:3000/users", payload);
          toast.success('Đăng ký tài khoản thành công',{ position: toast.POSITION.TOP_RIGHT })
          window.location.href = '/login'
        } catch (e) {
          console.log(e.message);
        }
      } else {
        toast.error('Mật khẩu không khớp',{ position: toast.POSITION.TOP_RIGHT })
      }
    } else {
      toast.error('Các trường không được để trống',{ position: toast.POSITION.TOP_RIGHT })
    }
  };

  return (
    <>
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("form_login")}>
          <h2>Đăng Ký Tài Khoản</h2>
          <input
            type="text"
            placeholder="Họ tên(*)"
            value={fullName}
            onChange={handleFullNameChange}
          />
          <input
            type="text"
            placeholder="SĐT(*)"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <input
            type="email"
            placeholder="Email(*)"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Nhập mật khẩu(*)"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            type="password"
            placeholder="Nhập lại mật khẩu(*)"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <div className={cx("btn_group")}>
            <Link to={"/login"}>
              <span>Về trang đăng nhập</span>
            </Link>
            <button type="submit" onClick={handleSubmit}>
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingUp;
