import classNames from "classnames/bind";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import InputSearch from "../component/input/InputSearch";
import styles from "./Header.module.scss";

let cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx("app")}>
      <div className={cx("wrapper")}>
        <div className={cx("site_header")}>
          <div className={cx("header_logo")}>
            <Link to={"/"}>
              <img style={{ width: "140px" }} src="logo.jpg" alt="logo" />
            </Link>
          </div>
          <InputSearch />
          <div className={cx("header_custom")}>
            <div className={cx("home")}>
              <span className={cx("icon_home")}>
                <IoHome />
              </span>
              <h6 style={{fontSize:"16px", marginTop:"24px"}}>Hệ thống khách sạn</h6>
            </div>
            <Link to={"/login"}>
              <div className={cx("icon_admin")}>
                <span>
                  <IoPersonSharp />
                </span>
              </div>
            </Link>
            <div className={cx("icon_heart")}>
              <span>
                <FaHeart />
              </span>
            </div>
            <div className={cx("book_btn")}>
              <a className={cx("popup-with-form")} href="#test-form">
                Book A Room
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("header_item")}>
        <div className={cx("header_item1")}>
          <ul className={cx("header_item1_menu")}>
            <li>Trang Chủ</li>
            <li>Giới Thiệu</li>
            <li>Hệ Thống Phòng</li>
            <li>Tin Tức</li>
            <li>Liên Hệ</li>
            <li>Khác</li>
          </ul>
        </div>
        <div className={cx("header_item2")}>
          <ul className={cx("header_item2_menu")}>
            <li>Về AiHotel</li>
            <li className={cx("blog")}>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
