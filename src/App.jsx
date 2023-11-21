import Banner from "./component/banner/Banner"
import Product from "./component/product/Product"
import Productdetails from "./component/productdetails/Productdetails"
// import 'bootstrap/dist/css/bootstrap.min.css'
import Blog from "./layout/Blog"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import {Routes,Route} from 'react-router-dom'

function App() {
 
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/"  element={<Product />}/>
        <Route path="/product/detail/:id"  element={<Productdetails />}/>
      </Routes>
      <Banner/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
