 import { useParams } from "react-router-dom";
import React from "react";
// import { useParams } from "react-router-dom"; // if using react-router
import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";


const ProductDetails = () => {
  // For demo, we'll use static product data (you can fetch by ID later)
  const { id } = useParams(); // product ID from URL
  
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
            <button  className="bg-[#A084DC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8c6cd4] transition">
              Add to Cart
            </button>
            <button className="border-2 border-[#A084DC] text-[#A084DC] px-6 py-3 rounded-lg font-semibold hover:bg-[#A084DC] hover:text-white transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
