 import { useParams } from "react-router-dom";
import React from "react";

import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";
import { CartContext } from '../Context/CartContext';

const ProductDetails = () => {
  const cart=useContext(CartContext)
  
  const { id } = useParams(); 
  
  const {Productitems}= useContext(ProductContext)
  console.log(Productitems);
  
   
  const product=Productitems.find((p)=>p.id===Number(id))

 if (!product) {
    return <h2>Product Not Found</h2>;
  }


console.log(product);


  return (
    <div className="w-full py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-4 text-lg">₹{product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="flex gap-4">
           <button onClick={(e)=>{
                   e.stopPropagation()
                   e.preventDefault()
                  return cart.setCartitems((prevcart)=>{
                            const existing=prevcart.find((item)=>item.id===product.id);
                            if(existing){
                              return prevcart.map((item)=>item.id===product.id? {...item,quantity:item.quantity+1}:item);
                            }else{
                              return [...prevcart,{ productname: product.title,price: product.price,id: product.id,quantity: 1,image:product.image}]
                            }
              })} }  
              className="mt-3 w-full bg-[#A084DC] text-white py-2 rounded-lg hover:bg-[#8c6cd4] transition">
                Add to Cart
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
