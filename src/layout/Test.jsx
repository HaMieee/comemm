import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchCart } from "../services/cart.service";

const Test = () => {
  const showToast = () => {
    toast.success("Thành công!", { position: toast.POSITION.TOP_RIGHT });
  };

  const handleFetchCart = () => {
    fetchCart('123')
  }

  return (
    <>
      <button onClick={showToast}>show toast</button>
      <button onClick={handleFetchCart} >fetch cart</button>
    </>
  );
};

export default Test;
