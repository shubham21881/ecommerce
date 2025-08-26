// src/pages/Checkout.jsx
import React from "react";
import Cartitems from "../Components/Cartitems";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";


const Checkout = () => {
 const  {Cartitem}= useContext(CartContext)
 console.log(Cartitem);
 
const finaltotal=Cartitem.reduce((a,b)=>{
  return a+b.price*b.quantity
},0)



  return (
    <div className="w-full py-16 px-6 md:px-20 bg-gray-50">
      <h1 className="text-3xl font-bold mb-10 text-center">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Checkout Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#A084DC]"
                placeholder="write your full name"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#A084DC]"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#A084DC]"
                placeholder="123 Main St, City, Country"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">City</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#A084DC]"
                  placeholder="Lucknow"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Postal Code</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#A084DC]"
                  placeholder="226001"
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-4">Payment Details</h2>
            <div>
              <label className="block mb-1 font-medium">Card Number</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#A084DC]"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Expiry Date</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#A084DC]"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">CVV</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#A084DC]"
                  placeholder="123"
                />
              </div>
            </div>

            <button className="w-full mt-6 bg-[#A084DC] text-white py-3 rounded-lg font-semibold hover:bg-[#8c6cd4] transition">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow-lg h-[750px] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
             

          <div className="space-y-4"> 
          {Cartitem.map((item,index)=>(
              <div key={index} className="flex justify-between">
              <p className="font-bold"><h1>{index+1}</h1>{item.productname}<p>Quantity:{item.quantity}</p></p>
              
              <p>{item.price*item.quantity}</p>
            </div>
          ))}
           
           
            <div className="flex justify-between font-semibold border-t pt-4">
              <p>Total</p>
              <p>{finaltotal}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
