import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { IoCart } from "react-icons/io5";
import CartDetail from "../cartDetail/CartDetail";
import { Link } from "react-router-dom";
let cx = classNames.bind(styles);

const Cart = (props) => {
  const { dataCart } = props

  return (
    <Link to={"/cart"}>
    <div className={cx("icon_cart")}>
      <IoCart />
      <div className={cx('list_cart')}>
        <CartDetail dataCart={dataCart}/>
      </div>
      <div className={cx("icon_count")}>{dataCart?.products?.length || 0}</div>
    </div>
    </Link>
  );
}

export default Cart;
