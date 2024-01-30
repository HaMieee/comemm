import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProfileUser.module.scss";
import { BiTennisBall } from "react-icons/bi";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import axios from "axios";
import { isEmpty } from "lodash";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../redux/slices/userSlice";

let cx = classNames.bind(styles);

function ProfileUser() {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [user, setUser] = useState({})
  const [inputValue, setInputValue] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [showBtnUpdate, setShowBtnUpdate] = useState(false)
  const dispatch = useDispatch()
  const dataStorage = JSON.parse(localStorage.getItem("user")) || null;

  const userState = useSelector((state) => state.user)

  useEffect(() => {
    dispatch({
      type: `${userAction.getUserPending}_saga`,
      payload: dataStorage.userId
    })
  }, [])

  useEffect(() => {
    setUser(userState.user)
  }, [userState])

  useEffect(() => {
    if (!isEmpty(inputValue.newPassword)) {
      setShowBtnUpdate(true)
    } else {
      setShowBtnUpdate(false)
    }
  }, [inputValue.newPassword])

  const handleClick = () => {
    setShowChangePassword(!showChangePassword);
  };

  const logout = () => {
    localStorage.clear()
    window.location.href = '/login'
  }

  const checkPassword = async () => {
    let isValid = false
    const users = await axios.get("http://localhost:3000/users");
    const findUser = users.data.find(u => u.id === user.id && u.password === inputValue.oldPassword)
    if (!isEmpty(findUser)) {
      console.log('success')
      isValid = true
    } else {
      console.log('failed')
      isValid = false
    }
    return isValid
  }

  const checkConfirmPassword = () => {
    let isValid = false
    if (inputValue.newPassword === inputValue.confirmPassword) {
      isValid = true
    } else {
      isValid = false
    }
    return isValid;
  };

  const updatePassword = async () => {
    const updateUser = {...user, password: inputValue.newPassword}
    await axios.put(`http://localhost:3000/users/${user.id}`, updateUser);
  }

  const handleSubmit = async () => {
    if (await checkPassword()) {
      if (checkConfirmPassword()) {
        try {
          updatePassword()
          toast.success('Thay đổi mật khẩu thành công!', { position: toast.POSITION.TOP_RIGHT })
          setInputValue({
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
          })
        } catch (e) {
          console.log(e.message)
        }
      } else {
       toast.error('Mật khẩu nhập không đúng',{position:toast.POSITION.TOP_RIGHT})
      }
    } else {
      console.log('Nhập sai mật khẩu cũ')
    }
  }



  return (
    <>
      <Header />
      <div className={cx("profile")}>
        <div className={cx("container")}>
          <h1>Xin chào, {user.name}</h1>
          <h2>Thông tin tài khoản:</h2>
          <div className={cx("content")}>
            <div className={cx("from_group")}>
              <label>Họ tên *</label>
              <input value={user.name}/>
            </div>
            <div className={cx("from_group")}>
              <label>Email *</label>
              <input value={user.email}/>
            </div>
            <div className={cx("from_group")}>
              <label>SĐT </label>
              <input value={user.phoneNumber}/>
            </div>
          </div>
          {showChangePassword && (
            <div className={cx("content_changePassword")}>
              <div className={cx("from_group")}>
                <label>Mật khẩu cũ *</label>
                <input type="password" value={inputValue.oldPassword} onChange={(e) => setInputValue({
                  ...inputValue,
                  oldPassword: e.target.value
                })}/>
              </div>
              <div className={cx("from_group")}>
                <label>Mật khẩu mới *</label>
                <input type="password" value={inputValue.newPassword} onChange={(e) => setInputValue({
                  ...inputValue,
                  newPassword: e.target.value
                })}/>
              </div>
              <div className={cx("from_group")}>
                <label>Nhập lại mật khẩu mới* </label>
                <input  type="password" value={inputValue.confirmPassword} onChange={(e) => setInputValue({
                  ...inputValue,
                  confirmPassword: e.target.value
                })}/>
              </div>
            </div>
          )}
          <p className={cx("change_password")} onClick={handleClick}>
            {showChangePassword ? 'Hủy thay đổi mật khẩu' : 'Thay đổi mật khẩu'}
          </p>
          {showBtnUpdate ? <button className={cx("update")} onClick={handleSubmit}>cập nhật tài khoản</button> : ''}
          <button className={cx("update")} onClick={logout}>Đăng Xuất</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProfileUser;
