import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { isEmpty } from "lodash";
import axios from "axios";
let cx = classNames.bind(styles);

const Product = () => {
  const [dataProducts, setDataProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/productNew");
      return response;
    } catch (e) {
      console.log(e.message);
    }
  };

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

  console.log(dataProducts);

  return (
    <div className={cx("product")}>
      <div className={cx("product_wrapper")}>
        <h2>SẢN PHẨM MỚI RA MẮT</h2>
        <div className={cx("product_box")}>
          {!isEmpty(dataProducts) &&
            dataProducts.map((product) => (
              <div className={cx("product_box_item")} key={product.id}>
                <img src={product.imgUrl} alt=""></img>
                <p>{product.name}</p>
                <div className={cx("price")}>
                  <p className={cx("new_price")}><span>$ </span>{product.price}</p>
                  <p className={cx("old_price")}><span>$ </span>{product.oldPrice}</p>
                </div>
                <button>Mua hàng</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
