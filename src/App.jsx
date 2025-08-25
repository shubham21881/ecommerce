import { useState } from 'react'
import NavBar from './Components/NavBar'
import ProductCard from './Components/ProductCard'
import Cartitems from './Components/Cartitems'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import Checkout from './Pages/Checkout'
import Contact from './Pages/Contact'
import Layout from './Components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About'
import ErrorPage from './Pages/ErrorPage'
import CartPage from './Pages/Cartpage'

 const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {path:'/', element:<Home/>},
      {path:"/Product",element:<Products/>},
      {path:"/CartPage",element:<CartPage/>},
      {path:"/ProductDetails",element:<ProductDetails/>},
      {path:"/Contactus",element:<Contact/>},
      {path:"/Aboutus",element:<About/>},
      {path:'/Checkout',element:<Checkout/>}
    ]
  }
 ])






function App() {


  return (
    <>
    {/* <About/> */}
    {/* <Contact/> */}
    {/* <Home/> */}
    {/* <Products/> */}
      {/* <NavBar/>
     <ProductCard/>
      <Cartitems/>
      <Footer/> */}
    {/* <ProductDetails/> */}
    {/* <Checkout/> */}
      <RouterProvider router={router}/>
      {/* <CartPage/> */}
    </>
  )
}

export default App
