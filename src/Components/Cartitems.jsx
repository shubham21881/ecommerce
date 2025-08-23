import React from 'react'

function Cartitems() {
  return (
    <div className='flex   items-center gap-7 p-1 bg-[#BFACE2]  border-2 border-white'>
       <div className='flex  flex-col justify-center items-center gap-2 p-2'>
        <img src="https://placehold.co/80" alt="" />
        <p>product name</p>
        <p>small discription</p>
        <div>
        <button className=' w-[100px] py-2 bg-[#645CBB]  text-white cursor-pointer flex justify-center items-center'>Remove</button>
       </div>
       </div>
       <div>price:12000</div>
       <div  className='flex gap-2 '>
        <button className='w-[30px]  rounded-2xl bg-[#645CBB]  text-white cursor-pointer flex justify-center items-center'>+</button>
         0
         <button className='w-[30px]  rounded-2xl bg-[#645CBB]  text-white cursor-pointer flex justify-center items-center'>-</button>
       </div>
       <div>
        total:12000
       </div>
       
       
    </div>
  )
}

export default Cartitems