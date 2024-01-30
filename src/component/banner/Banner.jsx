import React from "react";
import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

let cx = classNames.bind(styles);

function Banner() {
  return (
    <div className={cx("banner ")}>
      <div className={cx("banner_img")}>
        <div>
          <img src="http://127.0.0.1:5500/img/rooms/3.png" alt=""></img>
        </div>
        <div>
          {" "}
          <img src="http://127.0.0.1:5500/img/rooms/4.png" alt=""></img>
        </div>
        <div>
          <img src="http://127.0.0.1:5500/img/rooms/1.png" alt=""></img>
        </div>
        <div>
          {" "}
          <img src="http://127.0.0.1:5500/img/rooms/2.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
