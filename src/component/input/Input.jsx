import {IoSearchSharp} from "react-icons/io5";

import classNames from 'classnames/bind';

import styles from './Input.module.scss';

let cx = classNames.bind(styles);

function Input() {
  return (
    <div className={cx("header_search")}>
        <input className={cx("input_search")} placeholder="Tìm kiếm sản phẩm, danh mục mong muốn..." />
        <button className={cx("icon_search")}><span><IoSearchSharp/></span></button>
      </div>
  )
}

export default Input