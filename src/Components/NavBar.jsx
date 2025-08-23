import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div  className='bg-[#BFACE2] py-3 '>
        <nav className='flex justify-around items-center '>
            <div className='cursor-pointer'>LOGO</div>
            <div>
                <ul className='flex justify-around items-center gap-5'>
                   <NavLink to={'/'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } > <li className=' cursor-pointer border-2 hover:border-white px-4'>Home</li></NavLink>
                   <NavLink to={'/Product'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } > <li className=' cursor-pointer border-2 hover:border-white px-4'>Products</li></NavLink>
                   <NavLink to={'/Checkout'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } > <li className=' cursor-pointer border-2 hover:border-white px-4'>Cart</li></NavLink>
                    <NavLink to={'/Aboutus'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } ><li className=' cursor-pointer border-2 hover:border-white px-4'>About US</li></NavLink>
                    <NavLink to={'/Contactus'} className={({isActive})=> isActive?"text-[#A084DC] font-bold" : "text-gray-600"  } ><li className=' cursor-pointer border-2 hover:border-white px-4'>Contact Us</li></NavLink>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar