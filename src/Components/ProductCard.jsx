import React from 'react'
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';



function ProductCard({product}) {

  const cart=useContext(CartContext)
 console.log(cart.Cartitems);
//  console.log(cart.setCartitems);
 

  // console.log(product.id);
  
  return (



    <div
           
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-center "
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-gray-600">₹100000 {product.price}</p>
              <button onClick={()=>cart.setCartitems([...cart.cartitems,{productname:product.title,price:product.price,id:product.id,image:product.image}]) }  className="mt-3 w-full bg-[#A084DC] text-white py-2 rounded-lg hover:bg-[#8c6cd4] transition">
                Add to Cart
              </button>
            </div>
          </div>
  )
}

export default ProductCard