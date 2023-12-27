import classNames from "classnames/bind";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { fetchBill } from "../../services/bill.service";
import styles from "./BillDetail.module.scss";
let cx = classNames.bind(styles);

function BillDetail() {
  const [bill, setBill] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchBill(id);
      setBill(response.data);
    };
    fetchData();
  }, [id]);

  if (isEmpty(bill)) {
    return "";
  }

  return (
    <>
      <Header />
      <div className={cx("bill_detail")}>
        <div className={cx("wrapper")}>
          <div className={cx("container")}>
            <h1>Thông tin đơn hàng của {bill.infoBill.name}</h1>
            <div className={cx("list_product")}>
              {bill.products.map((product) => (
                <div className={cx("product")} key={product.id}>
                  <img className={cx("img")} src={product.imgUrl} alt="" />
                  <p>
                    {product.name} <span style={{color:'orange'}}> x{product.amount}</span>
                  </p>

                  <p>
                    <span>$ </span> {product.price}
                  </p>
                </div>
              ))}
            </div>
            <div className={cx("money")}>
            
              <div className={cx("sum")}>
                <span>Số lượng sản phẩm:</span>
                <span>{bill.totalProduct}</span>
              </div>
              <div className={cx("sum")}>
                <span>Phí vận chuyển:</span>
                <span>
                  <span>$ </span>2
                </span>
              </div>
              <div className={cx("sum")}>
                <span>Tổng giá trị đơn hàng:</span>
                <span>
                  <span>$ </span> {bill.totalPrice}
                </span>
              </div>
            </div>
          </div>
          <div className={cx("profile")}>
            <h1>Thông tin nhận hàng</h1>
            <div className={cx("box_profile")}>
              <div className={cx("item_profile")}>
                <span>Tên người nhận: </span>
                <span>{bill.infoBill.name}</span>
              </div>
              <div className={cx("item_profile")}>
                <span>Số điện thoại: </span>
                <span>{bill.infoBill.phoneNumber}</span>
              </div>
              <div className={cx("item_profile")}>
                <span>Địa chỉ: </span>
                <span>{bill.infoBill.address}</span>
              </div>
              <div className={cx("item_profile")}>
                <span>Ghi chú: </span>
                <span>{bill.infoBill.note}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BillDetail;
