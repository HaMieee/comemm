import React from 'react'
import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
let cx = classNames.bind(styles);

function Blog() {
  return (
    <div className={cx('blog')}>
        <div className={cx('container')}>
            <h2>Blog về khách sạn</h2>
            <div className={cx('container_text')}>
                <span>
                 Hãy cùng AiHotel<br></br>
                khám phá những điều thật  thú vị nhé!
                </span>
            </div>
        </div>
        <div className={cx('blog_img')}>
          <img src='http://127.0.0.1:5500/img/instragram/1.png' alt=''/>
          <img src='http://127.0.0.1:5500/img/instragram/2.png' alt=''/>
          <img src='http://127.0.0.1:5500/img/instragram/3.png' alt=''/>
          <img src='http://127.0.0.1:5500/img/instragram/4.png' alt=''/>
          <img src='http://127.0.0.1:5500/img/instragram/5.png' alt=''/>
        </div>
    </div>
  )
}

export default Blog