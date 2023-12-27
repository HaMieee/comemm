import { useEffect, useState } from "react";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { fetchBills } from "../../services/bill.service";
import { isEmpty } from "lodash";
import { SlActionUndo } from "react-icons/sl";
import classNames from "classnames/bind";
import styles from "./Bills.module.scss";
import { Link } from "react-router-dom";
let cx = classNames.bind(styles);
function Bills() {
  const [bills, setBills] = useState([]);

  const dataStorage = JSON.parse(localStorage.getItem("user")) || null;
  const { id } = dataStorage || 0;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await fetchBills(id);
      console.log(">>> Bills: ", result);
      setBills(result);
    } catch (e) {
      console.log(e.message);
    }
  };

  //   if (isEmpty(bills)) {
  //     return(
  //         <div>Loading...</div>
  //     )
  //   }

  return (
    <>
      <Header />
      {/* <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Total Product</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {!isEmpty(bills) && bills.map((bill) => {
            return (
              <>
                <tr key={bill.id}>
                  <td>{bill.id}</td>
                  <td>{bill.infoBill.name}</td>
                  <td>{bill.products.length}</td>
                  <td>{bill.totalPrice}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table> */}

      <div className={cx("bills")}>
        <div className={cx("bill_wrapper")}>
          <h1>ĐẶT HÀNG THÀNH CÔNG !</h1>
          <p>
            Cảm ơn anh / chị đã đặt mua hàng tại <span>COMEM.VN</span>
          </p>
          <p>
            Đơn hàng của anh / chị đang được xử lý, comem sẽ sớm giao hàng đến
            anh / chị
          </p>
          <h2>Danh sách sản phẩm bạn đã đã đặt</h2>
          <table className={cx("list_product")}>
            <tr>
              <th>STT</th>
              <th>Tên sản phẩm </th>
              <th>Total Product</th>
              <th>Total Price</th>
              <th>Trạng thái</th>
              <th>Chi tiết đơn hàng</th>
            </tr>

            {!isEmpty(bills) &&
              bills.map((bill, index) => {
                return (
                  <>
                    <tr key={bill.id}>
                      <td>{index + 1}</td>
                      <td>{bill.infoBill.name}</td>
                      <td>{bill.totalProduct}</td>
                      <td>{bill.totalPrice}</td>
                      <td>Đang xử lý</td>
                      <td>
                        <Link to={`/bill/detail/${bill.id}`}>xem chi tiết</Link>
                      </td>
                    </tr>
                  </>
                );
              })}
          </table>
          <Link to="/">
            <div className={cx("oderl")}>
              <button className={cx("btn_request")}>
                <span className={cx("icon")}>
                  <SlActionUndo />
                </span>
                Tiếp tục mua hàng
              </button>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bills;
