import React from 'react'
import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

let cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx('banner')}>
        <div className={cx('banner_img')}>
          <div><img src='https://comem.vn/images/banners/banner-second-1-desktop.jpg' alt=''></img></div>
           <div> <img src='https://comem.vn/images/banners/banner-second-2-desktop.jpg' alt=''></img></div>
        </div>
    </div>
  )
}

export default Banner