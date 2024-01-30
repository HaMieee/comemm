import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Productdetails.module.scss";
import { BiSolidCheckCircle, BiSolidCommentError } from "react-icons/bi";
import { IoAddOutline, IoRemove } from "react-icons/io5";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createCart,
  fetchCart,
  updateCart,
} from "../../services/cart.service";
import { isEmpty, } from "lodash";

let cx = classNames.bind(styles);

function Productdetails() {
  const [product, setProduct] = useState({});
  const [dataProducts, setDataProducts] = useState([]);
  const [inputValue, setInputValue] = useState(1);
  const [cart, setCart] = useState([]);
  const dataStorage = JSON.parse(localStorage.getItem("user"));
  const userId = dataStorage.userId;

  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCart(userId);
        setCart(result);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [userId]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    const product = dataProducts.find((product) => product.id == id);
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

  // const handleAddToCart = () => {
  //   dispatch(addToCart(product));
  //   //  setInputValue(prevValue => prevValue + 1);
  // };

  const checkDuplicateProduct = () => {
    // let isDuplicate;
    const checkProduct = cart.products.find((product) => product.id == id);
    if (!isEmpty(checkProduct)) {
      // isDuplicate = true;
      console.log(checkProduct.amount)
      checkProduct.amount = checkProduct.amount + inputValue;
      updateCart(cart.id, cart)
      console.log(">>>: ", cart.products);
    } else {
      // isDuplicate = false;
      cart.products.push(product)
      setCart({
        ...cart,
      })
      updateCart(cart.id, cart)
    }
    // return isDuplicate;
  };

  const handleCreateCart = async () => {
    product.amount = inputValue;
    if (!isEmpty(cart)) {
      checkDuplicateProduct()
      console.log("update cart success");
      window.location.reload()
    } else {
      const addProduct = {
        userId: userId,
        products: [product],
      };
      createCart(addProduct);
      console.log("add new cart");
      window.location.reload()
    }

    setInputValue(1);
  };

  const handleAddAmount = () => {
    setInputValue((prevValue) => prevValue + 1);
  };

  const handleRemoveAmount = () => {
    if (inputValue <= 1) {
      setInputValue(1)
    } else {
      setInputValue((prevValue) => prevValue - 1);
    }
  };

  const handleInputValueChange = (e) => {
    console.log(e.target.value)
    if (e.target.value > 100) {
      toast.error('Bạn nhập quá số lượng',{ position: toast.POSITION.TOP_RIGHT })
      setInputValue(100)
    } else {
      setInputValue(e.target.value)
    }
  }

  return (
    <>
      <Header dataCart={cart} />
      <div className={cx("product_detail")}>
        <div className={cx("container")}>
          <div className={cx("product_img")}>
            <img className={cx("img_item")} src={product?.imgUrl} alt="" />
            <div className={cx("wrapt_pt")}>
              <div className={cx("ship")}>
                <h4>Phí ship</h4>
                <ul>
                  <li>Nội thành Hà Nội - $2</li>
                  <li>Các tỉnh còn lại - $2.5</li>
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
            <h2>
              <span>$</span>
              {product?.price}
            </h2>
            <div className={cx("product_box")}>
              <div className={cx("quantity")}>
                <span onClick={handleRemoveAmount}>
                  <IoRemove />
                </span>
                <input value={inputValue} 
                  onChange={(e) => handleInputValueChange(e)}
                />
                <span onClick={handleAddAmount}>
                  <IoAddOutline />
                </span>
              </div>
              <button onClick={handleCreateCart}>Thêm sản phẩm </button>
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
            giúp cấp ẩm cho da, làm sáng da, hỗ trợ làm mờ nếp nhăn, đốm nâu,
            vết nám trên da, đem lại làn da căng mịn. Cùng Cỏ khám phá vì sao
            nên chọn dòng kem dưỡng này trong chu trình skincare hàng ngày nhé!
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Productdetails;
