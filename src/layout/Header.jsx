import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FaHeart, FaPiggyBank } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IoCart, IoPersonSharp, IoHome } from "react-icons/io5";
import Input from "../component/input/Input";
import Slide from "./Slide";
import Cart from "../component/cart/Cart";
import { Link } from "react-router-dom";

let cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("app")}>
      <div className={cx("wrapper")}>
        <div className={cx("site_header")}>
          <div className={cx("header_logo")}>
            <Link to={"/"}>
              <img src="src/img/logo2.png" alt="logo" />
            </Link>
          </div>
          <Input />
          <div className={cx("header_custom")}>
            <div className={cx("home")}>
              <span className={cx("icon_home")}>
                <IoHome />
              </span>
              Hệ thống cửa hàng
            </div>
            <div className={cx("icon_admin")}>
              <span>
                <IoPersonSharp />
              </span>
            </div>
            <div className={cx("icon_heart")}>
              <span>
                <FaHeart />
              </span>
            </div>
            <Cart />
          </div>
        </div>
        <div className={cx("header_item")}>
          <div className={cx("header_item1")}>
            <ul className={cx("header_item1_menu")}>
              <li>Sale</li>
              <li>Trang Điểm</li>
              <li>Da</li>
              <li>Tóc</li>
              <li>Cơ Thể</li>
              <li>Em bé</li>
              <li>Hương thơm</li>
              <li>Qùa tặng</li>
              <li>Bộ sản phẩm</li>
              <li>Khác</li>
            </ul>
          </div>
          <div className={cx("header_item2")}>
            <ul className={cx("header_item2_menu")}>
              <li>Về cỏ mềm</li>
              <li>Blog làm đẹp </li>
            </ul>
          </div>
        </div>
        <div className={cx("banner_img")}>
          {/* <img className={cx("img_1")}src="https://static.comem.vn/uploads/September2023/6.jpg " alt /> */}
          <Slide />
        </div>
        <div className={cx("container")}>
          <div className={cx("sub_container")}>
            <div className={cx("icon_ship")}>
              <span>
                <FaShippingFast />
              </span>
            </div>
            <div className={cx("item_text")}>
              <h3>Ship COD toàn quốc</h3>
              <p>Thanh toán khi nhận hàng</p>
            </div>
          </div>
          <div className={cx("sub_container")}>
            <div className={cx("icon_ship")}>
              <span>
                <FaShippingFast />
              </span>
            </div>
            <div className={cx("item_text")}>
              <h3>Miễn phí đổi-trả</h3>
              <p>Đối với sản phẩm lỗi hoặc do vận chuyển </p>
            </div>
          </div>
          <div className={cx("sub_container")}>
            <div className={cx("icon_ship")}>
              <span>
                <MdGroups />
              </span>
            </div>
            <div className={cx("item_text")}>
              <h3>Ưu đãi thành viên</h3>
              <p>Đăng ký thành viên để nhận nhiều ưu đãi</p>
            </div>
          </div>
          <div className={cx("sub_container")}>
            <div className={cx("icon_ship")}>
              <span>
                <FaPiggyBank />
              </span>
            </div>
            <div className={cx("item_text")}>
              <h3>Ưu đãi combo</h3>
              <p>Mua theo combo, càng mua càng rẻ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
