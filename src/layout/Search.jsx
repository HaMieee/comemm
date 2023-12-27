import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";

let cx = classNames.bind(styles);

function Search({ dataProducts, onShow }) {
  // const [result, setResult] = useState(dataProducts)


  return (
    <div className={cx("box_search")}>
      {onShow ? (
        <div className={cx("wrapper")}>
          <div className={cx("list_product")}>
            {!isEmpty(dataProducts) ? (
              dataProducts.map((product) => (
                <div className={cx("product")} key={product.id}>
                  <img src={product.imgUrl} alt="" className={cx("img")} />
                  <Link to={`/product/detail/${product.id}`}>
                    <div className={cx("content")}>
                      <p>Sản phẩm</p>
                      <p>{product.name}</p>
                      <span className={cx("old_price")}>
                        <span> $</span> {product.oldPrice}
                      </span>
                      <span className={cx("new_price")}>
                        <span> $</span> {product.price}{" "}
                      </span>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className={cx('empty')}>Không tìm thấy sản phẩm!!!</div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Search;
