import classNames from "classnames/bind";
import styles from "./CartDetail.module.scss";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import { fetchCart } from "../../services/cart.service";


let cx = classNames.bind(styles);

const CartDetail = (props) => {
  const [cart, setCart] = useState([]);
  const dataStorage = JSON.parse(localStorage.getItem('user')) || null
  const { id } = dataStorage || 0

  const { dataCart } = props

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isEmpty(id)) {
          const result = await fetchCart(id)
          setCart(result)
        }
      } catch (e) {
        console.log(e.message)
      }
    }
    fetchData()
  }, []);

  return (
    <div className={cx("cart_detail")}>
      <div className={cx("cart_list")}>
        {/* {!isEmpty(cart) &&
          cart.products.map((item) => {
            return (
              <Link to={`/product/detail/${item.id}`} key={item?.id}>
                <div className={cx("cart_item")}>
                  <img className={cx("img_product")} src={item?.imgUrl} alt="" />
                  <div className={cx("content")}>
                    <div className={cx("title")}>
                      {item?.name} x <span>{item?.amount}</span>
                    </div>
                    <div className={cx("price")}>${item?.price}</div>
                  </div>
                </div>
              </Link>
            );
          })} */}

{!isEmpty(dataCart) &&
          dataCart?.products.map((item) => {
            return (
              <Link to={`/product/detail/${item.id}`} key={item?.id}>
                <div className={cx("cart_item")}>
                  <img className={cx("img_product")} src={item?.imgUrl} alt="" />
                  <div className={cx("content")}>
                    <div className={cx("title")}>
                      {item?.name} x <span>{item?.amount}</span>
                    </div>
                    <div className={cx("price")}>{item?.price}đ</div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default CartDetail;
