import classNames from "classnames/bind";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../component/cart/Cart";
import InputSearch from "../component/input/InputSearch";
import { fetchCart } from "../services/cart.service";
import styles from "./Header.module.scss";

let cx = classNames.bind(styles);

const Header = (props) => {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [cart, setCart] = useState({});
  const dataStorage = JSON.parse(localStorage.getItem("user")) || null;
  const { id } = dataStorage || 0;

  const user = JSON.parse(localStorage.getItem("user"));

  const { dataCart } = props;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isEmpty(id)) {
          const result = await fetchCart(id);
          setCart(result);
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   setCart({
  //     ...cart,
  //     products: dataCart.products
  //   })
  // }, [props])

  return (
    <div className={cx("app")}>
      <div className={cx("wrapper")}>
        <div className={cx("site_header")}>
          <div className={cx("header_logo")}>
            <Link to={"/"}>
              <img
                src="https://res.cloudinary.com/dhoclobux/image/upload/v1701760717/comem/logo2_bqeykw.png"
                alt="logo"
              />
            </Link>
          </div>
          <InputSearch />
          <div className={cx("header_custom")}>
            <div className={cx("home")}>
              <span className={cx("icon_home")}>
                <IoHome />
              </span>
              Hệ thống cửa hàng
            </div>

            {user ? (
              <Link to={"/profile"}>
                <div className={cx("icon_admin")}>
                  <span>
                    <IoPersonSharp />
                  </span>
                  <span className={cx("name")}>{user.name}</span>
                </div>
              </Link>
            ) : (
              <Link to={"/login"}>
                <div className={cx("icon_admin")}>
                  <span>
                    <IoPersonSharp />
                  </span>
                </div>
              </Link>
            )}

            <div className={cx("icon_heart")}>
              <span onClick={() => navigate('/bills')}>
                <FaHeart />
              </span>
            </div>
            <Cart dataCart={cart} />
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
      </div>
    </div>
  );
};

export default Header;
