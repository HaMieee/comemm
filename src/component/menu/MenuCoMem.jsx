import React from 'react'
import classNames from "classnames/bind";
import styles from "./MenuCoMem.module.scss";
let cx = classNames.bind(styles);
import { SlArrowRight } from "react-icons/sl";
function MenuCoMem() {
  return (
    <div className={cx('wrapper')}>
    <div className={cx('menu_sale')}>
        <div className={cx('menu_item')}>
            <p>Về cỏ mềm</p>
            <span><SlArrowRight/></span>
        </div>
        <hr></hr>
        <div className={cx('menu_item')}>
            <p>Chuyên gia</p>
            <span><SlArrowRight/></span>
        </div>
        <hr></hr>
        <div className={cx('menu_item')}>
            <p>Nhà máy</p>
            <span><SlArrowRight/></span>
        </div>
        
        <hr></hr>
        <div className={cx('menu_item')}>
            <p>Tin tức</p>
            <span><SlArrowRight/></span>
        </div>
    </div>
</div>
  )
}

export default MenuCoMem