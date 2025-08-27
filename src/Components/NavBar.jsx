import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
function NavBar() {
  const {Cartitem}=useContext(CartContext)
  // console.log(Cartitem.length);
  const [isOpen,setisopen]=useState(false)
 

  return (
    <div  className='bg-[#BFACE2] py-3 fixed w-full'>
        <nav className='flex justify-around items-center '>
           <div className={ `sm:hidden block absolute top-[50px]  bg-[#BFACE2]/90  w-full pt-5 pb-5 transition-all duration-1000 ease-in-out ${isOpen? 'translate-x-0 opacity-100':'translate-x-[-300px]   opacity-0'}   `}>
                <ul className='flex  flex-col justify-around items-center gap-5'>
                   <NavLink onClick={()=>setisopen(false)} to={'/'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } > <li className=' cursor-pointer border-2 hover:border-white px-4 font-extrabold'>Home</li></NavLink>
                   <NavLink onClick={()=>setisopen(false)} to={'/Product'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } > <li className=' cursor-pointer border-2 hover:border-white px-4 font-extrabold'>Products</li></NavLink>
                   <NavLink onClick={()=>setisopen(false)} to={'/CartPage'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } > <li className=' relative cursor-pointer border-2 hover:border-white px-4 font-extrabold'>Cart</li></NavLink>
                   <NavLink onClick={()=>setisopen(false)} to={'/Aboutus'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } ><li className=' cursor-pointer border-2 hover:border-white px-4 font-extrabold'>About US</li></NavLink>
                   <NavLink onClick={()=>setisopen(false)} to={'/Contactus'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } ><li className=' cursor-pointer border-2 hover:border-white px-4 font-extrabold'>Contact Us</li></NavLink>
                </ul>
            </div>
          <span onClick={()=>setisopen(!isOpen)} className='sm:hidden'><GiHamburgerMenu /></span>
          <NavLink to={'/'}>

            <div onClick={()=>setisopen(false)} className='cursor-pointer'><h1 className="text-2xl font-bold text-white">ShopEasy</h1></div>
          </NavLink>

            <div className=' hidden sm:block'>
                <ul className='flex justify-around items-center gap-5'>
                   <NavLink to={'/'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } > <li className=' cursor-pointer border-2 hover:border-white px-4'>Home</li></NavLink>
                   <NavLink to={'/Product'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } > <li className=' cursor-pointer border-2 hover:border-white px-4'>Products</li></NavLink>
                   <NavLink to={'/CartPage'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } > <li className=' relative cursor-pointer border-2 hover:border-white px-4'>Cart{ Cartitem.length?<span className='  absolute top-[-11px] w-6 h-6 rounded-full text-white bg-red-600 text-center '>{Cartitem.length}</span>:<span className=' hidden absolute top-[-11px] w-[20px] rounded-2xl text-white bg-red-600 text-center '>{Cartitem.length}</span>}</li></NavLink>
                   <NavLink to={'/Aboutus'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } ><li className=' cursor-pointer border-2 hover:border-white px-4'>About US</li></NavLink>
                   <NavLink to={'/Contactus'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } ><li className=' cursor-pointer border-2 hover:border-white px-4'>Contact Us</li></NavLink>
                </ul>
            </div>
            <span onClick={()=>setisopen(false)} className='sm:hidden'><NavLink to={'/CartPage'}  > <li className=' relative cursor-pointer list-none   px-4'><FaCartShopping />{ Cartitem.length?<span className='  absolute top-[-18px] left-[30] w-5 h-5  flex justify-center items-center rounded-full text-white bg-red-600 text-center '>{Cartitem.length}</span>:<span className=' hidden absolute top-[-11px]  rounded-2xl text-white bg-red-600 text-center '>{Cartitem.length}</span>}</li></NavLink></span>
        </nav>
    </div>
  )
}

export default NavBar