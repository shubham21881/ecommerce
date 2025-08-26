import React from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
function NavBar() {
  const {Cartitem}=useContext(CartContext)
  // console.log(Cartitem.length);
  
  return (
    <div  className='bg-[#BFACE2] py-3 fixed w-full'>
        <nav className='flex justify-around items-center '>
            <div className='cursor-pointer'>LOGO</div>

            <div className=' hidden sm:flex'>
                <ul className='flex justify-around items-center gap-5'>
                   <NavLink to={'/'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } > <li className=' cursor-pointer border-2 hover:border-white px-4'>Home</li></NavLink>
                   <NavLink to={'/Product'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } > <li className=' cursor-pointer border-2 hover:border-white px-4'>Products</li></NavLink>
                   <NavLink to={'/CartPage'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } > <li className=' relative cursor-pointer border-2 hover:border-white px-4'>Cart{ Cartitem.length?<span className='  absolute top-[-11px] w-[20px] rounded-2xl text-white bg-red-600 text-center '>{Cartitem.length}</span>:<span className=' hidden absolute top-[-11px] w-[20px] rounded-2xl text-white bg-red-600 text-center '>{Cartitem.length}</span>}</li></NavLink>
                   <NavLink to={'/Aboutus'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } ><li className=' cursor-pointer border-2 hover:border-white px-4'>About US</li></NavLink>
                   <NavLink to={'/Contactus'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } ><li className=' cursor-pointer border-2 hover:border-white px-4'>Contact Us</li></NavLink>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar