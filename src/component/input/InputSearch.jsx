import { IoSearchSharp } from "react-icons/io5";

import classNames from "classnames/bind";

import styles from "./Input.module.scss";
import Search from "../../layout/Search";
import { useEffect, useState } from "react";
// import { fetchProducts } from "../../services/product.service";
import { isEmpty } from "lodash";

let cx = classNames.bind(styles);

function InputSearch() {
  const [dataProducts, setDataProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [inputValueSearch, setInputValueSearch] = useState("");
  const [showResultSearch, setShowResultSearch] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetchProducts();
  //     setDataProducts(result);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (isEmpty(inputValueSearch)) {
      setProducts([]);
    } else {
      if (!isEmpty(dataProducts)) {
        const result = dataProducts.filter((p) =>
          p.name.toLowerCase().includes(inputValueSearch.toLowerCase())
        );
        setShowResultSearch(true);
        setProducts(result);
      }
    }
  }, [inputValueSearch]);

  const handleInputSearchBlur = () => {
    setTimeout(() => {
      setShowResultSearch(false);
    }, 500);
  };

  return (
    <>
      <div className={cx("header_search")}>
        <input
          className={cx("input_search")}
          placeholder="Tìm kiếm phòng, danh mục mong muốn..."
          value={inputValueSearch}
          onChange={(e) => setInputValueSearch(e.target.value)}
          onBlur={handleInputSearchBlur}
        />
        <button className={cx("icon_search")}>
          <span>
            <IoSearchSharp />
          </span>
        </button>
      </div>
      <Search dataProducts={products} onShow={showResultSearch} />
    </>
  );
}

export default InputSearch;
