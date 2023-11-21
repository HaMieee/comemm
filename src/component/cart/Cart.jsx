import React, { useState } from "react";
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { IoCart} from "react-icons/io5";
let cx = classNames.bind(styles);

function Cart() {
const [count, setCount] = useState(0);

  return (
    <div className={cx("icon_cart")}>
      <IoCart />
      <div className={cx("icon_count")}>{count}</div>
    </div>
  );
}

export default Cart;
