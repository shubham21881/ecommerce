// src/pages/Products.jsx
import React from "react";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";
import ProductCard from "../Components/ProductCard";
import { NavLink } from "react-router-dom";

const Products = () => {
  // Sample products (later you can fetch from API or context)
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2499,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 2999,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      name: "Gaming Keyboard",
      price: 1499,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 999,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 6,
      name: "Laptop Bag",
      price: 799,
      image: "https://via.placeholder.com/300x200",
    },
  ];
    
  const Allproducts= useContext(ProductContext)
  const Cart =useContext(CartContext)

// console.log(Allproducts.Productitems.map((item)=>{
//        return item.title
// }));



  return (
    <div className="w-full py-16 px-6 md:px-12">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Products
      </h1>

      {/* Products Grid */}
      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        
        {Allproducts.Productitems.map((product) => (
          
          <NavLink to={`ProductDetails/${product.id}`}>
            <ProductCard key={product.id} product={product}/>
          </NavLink>
        ))}

      </div>
    </div>
  );
};

export default Products;
