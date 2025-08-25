import React, { useState } from 'react'

function Cartitems({item,onRemove}) {

    const [Quality,setQuantity]=useState(1) 

    const increment=()=>{
      setQuantity(Quality+1)
    }
    const decrement=()=>{
      if(Quality===1){
        return
      }
      setQuantity(Quality-1)
    }


  // console.log(Cart.Cartitem);
  // console.log(item);
  
  
  return (
    <div className='flex   items-center gap-7 p-4 bg-[#BFACE2]  border-2 border-white'>
       <div className='flex   justify-center items-center gap-2 p-2'>
        <img src={item.image} alt={item.productname} width={100} height={100} />
        <p>{item.productname}</p>
      
        
       </div>
       <div>price:{item.price}</div>
       <div  className='flex gap-2 '>
        <button onClick={()=> increment()} className='w-[30px]  rounded-2xl bg-[#645CBB]  text-white cursor-pointer flex justify-center items-center'>+</button>
         {Quality}
         <button onClick={()=>decrement()} className='w-[30px]  rounded-2xl bg-[#645CBB]  text-white cursor-pointer flex justify-center items-center'>-</button>
       </div>
       <div>
        total:{item.price*Quality}
       </div>
       <div>
        <button onClick={()=>onRemove(item.id)} className=' w-[100px] py-2 bg-[#645CBB]  text-white cursor-pointer flex justify-center items-center'>Remove</button>
       </div>
       
       
    </div>
  )
}

export default Cartitems