import React from "react";
import classNames from "classnames/bind";
import styles from "./Slide.module.scss";
import { FaPiggyBank } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaShippingFast } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
let cx = classNames.bind(styles);

function Slide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <Slider {...settings}>
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%" }}
            src="https://static.comem.vn/uploads/November2023/2294x796_(2).jpg"
            alt=""
          />
        </div>
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%" }}
            src="https://static.comem.vn/uploads/September2023/6.jpg"
            alt="Slide 1"
          />
        </div>
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%" }}
            src="https://static.comem.vn/uploads/July2023/1a51e9aec24712194b56.jpg"
            alt="Slide 2"
          />
        </div>
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%" }}
            src="https://static.comem.vn/uploads/October2023/2294x796-3.jpg"
            alt="Slide 3"
          />
        </div>
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%" }}
            src="https://static.comem.vn/uploads/August2023/2294x796.jpg"
            alt="Slide 4"
          />
        </div>
        <div style={{ width: "100%" }}>
          <img
            style={{ width: "100%" }}
            src="https://static.comem.vn/uploads/November2023/Fix_size_(1).jpg"
            alt="Slide 4"
          />
        </div>
      </Slider>

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
    </>
  );
}

export default Slide;
