// src/pages/Home.jsx
import React from "react";
import NavBar from "../Components/NavBar";
import ProductCard from "../Components/ProductCard";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";


const Home = () => {

 const featuredProduct=useContext(ProductContext)
  
  const threefeaturedproduct=featuredProduct.Productitems.slice(0,3);
 
      //  const threefeaturedproduct=featuredProduct.slice(0,3)


  return (   
    <div className="w-full">
       {/* <NavBar/> */}
      {/* Hero Section */}
      <section className="bg-[#A084DC] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to ShopEasy
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the best deals on fashion, electronics, and more!
        </p>
        <NavLink to={'/Product'} > <button className="bg-white text-[#A084DC] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Shop Now
        </button> </NavLink>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {/* Product Card Example */}
          {
            threefeaturedproduct.map((itm)=>(
                      // console.log(itm.id);
                      
              <ProductCard key={itm.id} product={itm} />
            ))
          }
          
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Join our newsletter
        </h2>
        <p className="mb-6 text-gray-600">
          Get updates on new arrivals and special offers.
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none w-72"
          />
          <button
            type="submit"
            className="bg-[#A084DC] text-white px-6 py-3 rounded-lg hover:bg-[#8c6cd4] transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
