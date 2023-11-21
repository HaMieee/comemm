import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Productdetails.module.scss";
import { BiSolidCheckCircle, BiSolidCommentError } from "react-icons/bi";
import { useParams } from "react-router-dom";
import axios from "axios";

let cx = classNames.bind(styles);

function Productdetails() {
  
  const [product, setProduct] = useState({});
  const [dataProducts, setDataProducts] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const data = await fetchData();
        setDataProducts(data.data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchDataProducts();
  }, []);

  useEffect(() => {
    console.log(">>> ID: ", id);
    console.log(">>> list product: ", dataProducts);

    const product = dataProducts.find((product) => product.id == id);
    console.log(">>> Product: ", product);
    setProduct(product);
  }, [id, dataProducts]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/productNew");
      return response;
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className={cx("product_detail")}>
      <div className={cx("container")}>
        <div className={cx("product_img")}>
          <img className={cx("img_item")} src={product?.imgUrl} alt="" />
          <div className={cx("wrapt_pt")}>
            <div className={cx("ship")}>
              <h4>Phí ship</h4>
              <ul>
                <li>Nội thành Hà Nội - 20.000đ</li>
                <li>Các tỉnh còn lại - 25.000đ</li>
              </ul>
            </div>
            <div className={cx("ship")}>
              <h4>Thời gian ship dự kiến </h4>
              <ul>
                <li>Hà Nội, TP.HCM: 1-2 ngày</li>
                <li>Các tỉnh còn lại: 2-5 ngày</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: "15px", marginRight: "40px" }}>
            <span style={{ color: "#e67e22" }}>
              <BiSolidCheckCircle />
            </span>
            <span
              style={{
                color: "#e67e22",
                fontWeight: "600",
                fontSize: "1.2rem",
              }}
            >
              Miễn phí{" "}
            </span>{" "}
            đổi trả sản phẩm lỗi do vận chuyển, sản xuất
          </p>
        </div>
        <div className={cx("product_summary")}>
          <h2>{product?.name}</h2>
          <h2><span>$</span>{product?.price}</h2>
          <div className={cx("product_box")}>
            <div className={cx("quantity")}>
              <span>+</span>
              <input value={1} className={cx("")} />
              <span>-</span>
            </div>
            <button>Thêm sản phẩm </button>
          </div>

          <div className={cx("promo")}>
            <div className={cx("item")}>
              <span className={cx("label")}>
                Qùa tặng{" "}
                <span>
                  <BiSolidCommentError />
                </span>
              </span>
              <span> Mua 2 chai Nước súc miệng Tặng 1 Xịt thơm miệng</span>
            </div>
            <div className={cx("item")}>
              <span className={cx("label")}>
                Ưu đãi độc quyền{" "}
                <span>
                  <BiSolidCommentError />
                </span>{" "}
              </span>
              <span className={cx("title")}>
                Mua Serum HA Tơ Tằm Tặng Tẩy Trang
              </span>
            </div>
            <div className={cx("item")}>
              <span className={cx("label")}>
                -10% + Tặng trà sâm{" "}
                <span>
                  <BiSolidCommentError />
                </span>
              </span>
              <span className={cx("title")}>
                Khi mua combo Serum và Kem dưỡng Sâm 1700
              </span>
            </div>
            <div className={cx("item")}>
              <span className={cx("label")}>
                Mua 5 tặng 1{" "}
                <span>
                  <BiSolidCommentError />
                </span>
              </span>
              <span className={cx("title")}>Lá tắm thảo dược cho bé</span>
            </div>
            <div className={cx("item")}>
              <span className={cx("label")}>
                Mua 2 tặng 1{" "}
                <span>
                  <BiSolidCommentError />
                </span>{" "}
              </span>
              <span className={cx("title")}>
                Mua combo 2 mặt nạ vitamin C tặng 1 mặt nạ cùng loại
              </span>
            </div>
            <div className={cx("item")}>
              <span className={cx("label")}>
                Qùa tặng 20/11{" "}
                <span>
                  <BiSolidCommentError />
                </span>
              </span>
              <span className={cx("title")}>
                Mua quà tặng giáo viên nhận ngay trà gạo lứt và hộp quà sang
                trọng
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("context")}>
        <h2>Thông tin sản phẩm</h2>
        <div className={cx("infor")}>
          Nằm trong bộ sản phẩm chăm sóc da chiết xuất từ Sơ-ri,{" "}
          <span style={{ color: "green", fontWeight: "600" }}>
            kem dưỡng sáng da mờ nám Sơ-ri Vitamin C
          </span>{" "}
          giúp cấp ẩm cho da, làm sáng da, hỗ trợ làm mờ nếp nhăn, đốm nâu, vết
          nám trên da, đem lại làn da căng mịn. Cùng Cỏ khám phá vì sao nên chọn
          dòng kem dưỡng này trong chu trình skincare hàng ngày nhé!
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
