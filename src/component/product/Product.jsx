import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { GiStarsStack } from "react-icons/gi";
import { isEmpty } from "lodash";
import axios from "axios";
import { Link } from "react-router-dom";



let cx = classNames.bind(styles);

const Product = ({title}) => {
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

  return (
    <div className={cx("product")}>
      <div className={cx("product_wrapper")}>
        <div className={cx("title")}>
          <span>
            <GiStarsStack />
          </span>
          <h2>{title}</h2>
          <span>
            <GiStarsStack />
          </span>
        </div>
        <div className={cx("product_box")}>
          {!isEmpty(dataProducts) &&
            dataProducts.map((product) => (
              <div className={cx("product_box_item")} key={product.id}>
                <img src={product.imgUrl} alt=""></img>
                <Link to={`/product/detail/${product.id}`}>
                  <p>{product.name}</p>
                </Link>
                <div className={cx("price")}>
                  <p className={cx("new_price")}>
                    <span>$ </span>
                    {product.price}
                  </p>
                  <p className={cx("old_price")}>
                    <span>$ </span>
                    {product.oldPrice}
                  </p>
                </div>
                <Link to={`/product/detail/${product.id}`}>
                  <button>Mua hàng</button>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
