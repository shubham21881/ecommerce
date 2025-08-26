import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function Cartitems({item,onRemove,onincrement,ondecrement}) {

  const {Cartitem,setCartitems}=useContext(CartContext)

 
  


  return (
    <div className='flex   items-center gap-7 p-4 bg-[#BFACE2]  border-2 border-white'>
       <div className='flex   justify-center items-center gap-2 p-2'>
        <img src={item.image} alt={item.productname} width={100} height={100} />
        <p>{item.productname}</p>
      
        
       </div>
       <div>price:{item.price}</div>
       <div  className='flex gap-2 '>
        <button onClick={()=>onincrement(item.id)} className='w-[30px]  rounded-2xl bg-[#645CBB]  text-white cursor-pointer flex justify-center items-center'>+</button>
         {item.quantity}
         <button onClick={()=>ondecrement(item.id)}  className='w-[30px]  rounded-2xl bg-[#645CBB]  text-white cursor-pointer flex justify-center items-center'>-</button>
       </div>
       <div>
        total:{item.price*item.quantity}
       </div>
       <div>
        <button onClick={()=>onRemove(item.id)} className=' w-[100px] py-2 bg-[#645CBB]  text-white cursor-pointer flex justify-center items-center'>Remove</button>
       </div>
       
       
    </div>
  )
}

export default Cartitems

// onClick={()=>itemQuantitydecrement(item.id)}
// onClick={()=> itemQuantityincrement(item.id)}