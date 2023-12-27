import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./CartReview.module.scss";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { RiDeleteBin3Line } from "react-icons/ri";
import { IoAddOutline, IoRemove } from "react-icons/io5";
import { isEmpty } from "lodash";
import { deleteCart, fetchCart, updateCart } from "../../services/cart.service";
import { createBill } from "../../services/bill.service";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let cx = classNames.bind(styles);

function CartReview() {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState({});

  const [inputValue, setInputvalue] = useState({
    ship: 2,
    sale: 0,
    totalPrice: 0,
  });
  const [inputFormBill, setInputFormBill] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    note: "",
  });
  const dataStorage = JSON.parse(localStorage.getItem("user")) || null;
  const { id } = dataStorage || 0;

  const navigate = useNavigate();

  useEffect(() => {
    setUser(dataStorage);
    setInputFormBill({
      ...inputFormBill,
      name: dataStorage.name,
      email: dataStorage.email,
      phoneNumber: dataStorage.phoneNumber,
    });
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      if (!isEmpty(id)) {
        const result = await fetchCart(id);
        setCart(result);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleTotal = () => {
    let sumPrice = 0;
    let sumProduct = 0;
    if (!isEmpty(cart)) {
      cart.products.map((product) => {
        sumPrice = sumPrice + product.price * product.amount;
        sumProduct = sumProduct + product.amount;
      });
    }
    return { sumPrice, sumProduct };
  };

  const handleTotalBill = () => {
    let sum = handleTotal().sumPrice;
    return (sum = sum + inputValue.ship - inputValue.sale);
  };

  const addAmountProduct = async (productId) => {
    const productUpdate = cart.products.find(
      (product) => product.id == productId
    );
    productUpdate.amount++;
    try {
      await updateCart(cart.id, cart);
      fetchData();
    } catch (e) {
      console.log(e.message);
    }
  };

  const removeAmountProduct = async (productId) => {
    const productUpdate = cart.products.find(
      (product) => product.id == productId
    );
    productUpdate.amount--;
    try {
      await updateCart(cart.id, cart);
      fetchData();
    } catch (e) {
      console.log(e.message);
    }
  };

  const deleteProduct = async (i) => {
    cart.products.splice(i, 1);
    try {
      await updateCart(cart.id, cart);
      fetchData();
      window.location.reload()
    } catch (e) {
      console.log(e.message);
    }
  };

  const checkValid = () => {
    let isCheck;
    if (
      isEmpty(inputFormBill.address) ||
      isEmpty(inputFormBill.email) ||
      isEmpty(inputFormBill.phoneNumber)
    ) {
      isCheck = false;
    } else {
      isCheck = true;
    }
    return isCheck;
  };

  const addBill = async () => {
    if (checkValid()) {
      const bill = {
        userId: id,
        products: cart.products,
        totalPrice: handleTotalBill(),
        totalProduct: handleTotal().sumProduct,
        infoBill: {
          name: inputFormBill.name,
          email: inputFormBill.email,
          phoneNumber: inputFormBill.phoneNumber,
          address: inputFormBill.address,
          note: inputFormBill.note,
        },
      };
      try {
        await createBill(bill);
        await deleteCart(cart.id);
        navigate("/bills");
        {toast.success('Bạn đã đặt hàng thành công', { position: toast.POSITION.TOP_RIGHT })}
      } catch (e) {
        console.log(e.message);
      }
    } else {
      toast.error('Các trường không được để trống', { position: toast.POSITION.TOP_RIGHT })
    }
  };

  return (
    <>
      <Header />
      <div className={cx("cart_site") }>
        <div className={cx("cart_container")}>
          <div className={cx("checkout_content")}>
            <div className={cx("checkout_form_infor")}>
              <h2>Thông tin nhận hàng</h2>
              <div className={cx("form_inner")}>
                <input
                  className={cx("form_control")}
                  value={inputFormBill.name}
                  placeholder="Họ tên"
                  onChange={(e) =>
                    setInputFormBill({
                      ...inputFormBill,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  className={cx("form_control")}
                  placeholder="Số điện thoại"
                  value={inputFormBill.phoneNumber}
                  onChange={(e) =>
                    setInputFormBill({
                      ...inputFormBill,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </div>

              <div className={cx("form_inner")}>
                <input readOnly
                  className={cx("form_control")}
                  placeholder="Để lại email để nhận thông tin đơn hàng"
                  value={inputFormBill.email}
                  onChange={(e) =>
                    setInputFormBill({
                      ...inputFormBill,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <div className={cx("form_inner")}>
                <textarea
                  className={cx("form_control")}
                  placeholder="Địa chỉ"
                  value={inputFormBill.address}
                  onChange={(e) =>
                    setInputFormBill({
                      ...inputFormBill,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              {/* <div className={cx("form_selection")}>
                <input placeholder="Tỉnh" className={cx("selection")} />
                <input placeholder="Huyện" className={cx("selection")} />
                <input placeholder="Xã" className={cx("selection")} />
              </div> */}

              <div className={cx("form_memo")}>
                <textarea
                  placeholder="Ghi chú thêm (ví dụ: giao vào giờ hành chính)"
                  className={cx("form_text")}
                  onChange={(e) =>
                    setInputFormBill({
                      ...inputFormBill,
                      note: e.target.value,
                    })
                  }
                />
              </div>

              <div className={cx("form_memo")}></div>
            </div>
            <div className={cx("payment_method")}>
              <h2>Chọn hình thức thanh toán</h2>
              <div className={cx("item")}>
                <div className={cx("item_box")}>
                  <input type="radio" checked name="payment" />
                  <img
                    className={cx("img_payment")}
                    src="https://assets.comem.vn/images/checkout/shipping-box.svg"
                    alt=""
                  />
                  <span style={{marginRight: " 28px"}}>Thanh toán khi nhận hàng</span>
                </div>
                <div className={cx("item_box")}>
                  <input type="radio" value={"default"} name="payment" />
                  <img
                    className={cx("img_payment")}
                    src="https://assets.comem.vn/images/checkout/vnpay.png"
                    alt=""
                  />
                  <span style={{marginRight: " 48px"}}>Thẻ ATM/ Thẻ tín dụng</span>
                </div>

                <div className={cx("item_box")}>
                  <input type="radio" name="payment" />
                  <img
                    className={cx("img_payment")}
                    src="https://assets.comem.vn/images/checkout/zalo_payv2.png"
                    alt=""
                  />
                  <span style={{marginRight: " 68px"}}>Ví điện tử ZaloPay</span>
                </div>

                <div className={cx("item_box")}>
                  <input type="radio" name="payment" />
                  <img
                    className={cx("img_payment")}
                    src="https://assets.comem.vn/images/checkout/momo.png"
                    alt=""
                  />
                  <span style={{marginRight: "140px"}}>Ví Mono</span>
                </div>
              </div>
            </div>
            <div className={cx("checkout")}>
              <button onClick={addBill} >Xác nhận đặt hàng</button>
            </div>
              
          </div>
          <div className={cx("checkout_cart")}style={{marginRight:'54px'}} >
            <div className={cx("cart_widget")}>
              <h2>Giỏ hàng của bạn</h2>
              <hr></hr>

              {!isEmpty(cart) &&
                cart.products.map((item, index) => {
                  return (
                    <>
                      <div className={cx("product")}>
                        <div className={cx("cart_item")}>
                          <img
                            className={cx("image")}
                            src={item.imgUrl}
                            alt=""
                          ></img>
                          <div className={cx("content")}>
                            <div className={cx("top")}>
                              <p className={cx("title")}>{item.name}</p>
                              <span onClick={() => deleteProduct(index)}>
                                <RiDeleteBin3Line />
                                Xóa
                            
                              </span>
                  
                            </div>
                            <div className={cx("bottom")}>
                              <div className={cx("quantity")}>
                                <span
                                  onClick={() => removeAmountProduct(item.id)}
                                >
                                  <IoRemove />
                                </span>
                                <input value={item.amount} />
                                <span onClick={() => addAmountProduct(item.id)}>
                                  <IoAddOutline />
                                </span>
                              </div>
                              <div className={cx("price")}>
                                <span className={cx("old_price")}>
                                  {/* <span>$ </span> */}
                                  {item.oldPrice}
                                  <span>đ </span>
                                </span>
                                <span className={cx("new_price")}>
                                  {" "}
                                  {item.price * item.amount}
                                  <span>đ </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>

            <div className={cx("money")}>
              <p>Thêm dấu phẩy giữa các mã để sử dụng nhiều mã</p>
              <div className={cx("checkout_coupon")}>
                <input placeholder="Mã giảm giá" />
                <button>Áp dụng</button>
              </div>
              <div className={cx("item_money")}>
                <span>Tổng giá trị đơn hàng:</span>
                <span style={{ fontWeight: "700" }}>
                  <span>$ </span>
                  {handleTotal().sumPrice}
                </span>
              </div>

              <div className={cx("item_money")}>
                <span>Phí giao hàng:</span>
                <span style={{ fontWeight: "700" }}>
                  <span>$ </span>
                  {inputValue.ship}
                </span>
              </div>

              <div className={cx("item_money")}>
                <span>Giảm giá:</span>
                <span style={{ fontWeight: "700" }}>
                  - <span>$</span>
                  {inputValue.sale}
                </span>
              </div>
              <hr></hr>
              <div className={cx("item_money")}>
                <span>Tổng thanh toán:</span>
                <span
                  style={{
                    fontSize: "1.6rem",
                    color: "#fd7b09",
                    fontWeight: "700",
                  }}
                >
                  <span>$ </span> {handleTotalBill()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartReview;
