import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import SingleProducts from './pages/SingleProducts';
import ProductCatogery from './pages/ProductCatogery';
import ProductSubCat from './pages/ProductSubCat';
import Header from './pages/Header';
import About from './pages/About';
import Reg from './pages/Regsitration';
import Login from './pages/Login';
import { LoginContext } from './LoginContext';
import {useState,useEffect} from "react"
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import Service from './pages/Service';
import Footer from './pages/Footer';
import Reg2 from './pages/Reg2';
import EmailVerify from './pages/EmailVerify';
import AfterVerifyReg from './pages/AfterVerifyReg';

function App() {
  // const[cart,setCart] =useState('')
  // useEffect(()=>{
  //   localStorage.setItem('cart',JSON.stringify(cart))
  // },[cart])
  return (
    <>
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/SingleProducts/:id' element={<SingleProducts/>}></Route>
      <Route path='/productCatogery' element={<ProductCatogery/>}></Route>
      <Route path='/subproductCatogery/:id' element={<ProductSubCat/>}></Route>
      <Route path='/productList/:id' element={<ProductList/>}></Route>
      <Route path='/registration' element={<Reg2/>}></Route>
      <Route path='/emailVerify' element={<EmailVerify/>}></Route>
      <Route path='/emailVerify/registration' element={<AfterVerifyReg/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    <Footer/>
   </Router>
      
      
        </>
  );
}

export default App;
