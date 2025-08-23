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

 const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<ErrorPage/>,
    children:[
      {path:'/', element:<Home/>},
      {path:"/Product",element:<Products/>},
      {path:"/Checkout",element:<Checkout/>},
      {path:"/ProductDetails",element:<ProductDetails/>},
      {path:"/Contactus",element:<Contact/>},
      {path:"/Aboutus",element:<About/>}]
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
    </>
  )
}

export default App
