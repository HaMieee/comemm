import React from 'react'
import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
let cx = classNames.bind(styles);

function Blog() {
  return (
    <div className={cx('blog')}>
        <div className={cx('container')}>
            <h2>Blog làm đẹp</h2>
            <div className={cx('container_text')}>
                <span>
                Là phụ nữ, nhất định phải xinh đẹp và tự tin. Hãy cùng Cỏ mềm HomeLab<br></br>
                khám phá những bí quyết làm đẹp thú vị nhé!
                </span>
            </div>
        </div>
        <div className={cx('blog_img')}>
          <img src='https://static.comem.vn/uploads/October2023/cac-loai-chat-cam-trong-my-pham-1_12_m.jpg' alt=''/>
          <img src='https://static.comem.vn/uploads/September2023/bao-bi-my-pham-co-mem_m.png' alt=''/>
          <img src='https://static.comem.vn/uploads/December2022/kinh-nghiem-phan-biet-nuoc-hoa-that-gia_92_m.jpg' alt=''/>
          <img src='https://static.comem.vn/uploads/December2022/kem-duong-trang-da-mat-danh-cho-ba-bau_m.jpg' alt=''/>
        </div>
    </div>
  )
}

export default Blog