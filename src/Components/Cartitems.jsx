import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function Cartitems({ item, onRemove, onincrement, ondecrement }) {
  const { Cartitem, setCartitems } = useContext(CartContext);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-[#BFACE2] border-2 border-white rounded-lg shadow-md">
      
      {/* Product Image & Name */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <img 
          src={item.image} 
          alt={item.productname} 
          className="w-20 h-20 object-contain" 
        />
        <p className="font-semibold text-center md:text-left">{item.productname}</p>
      </div>

      {/* Price */}
      <div className="text-sm md:text-base font-medium">
        Price: ₹{item.price}
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button 
          onClick={() => onincrement(item.id)} 
          className="w-8 h-8 rounded-full bg-[#645CBB] text-white flex justify-center items-center"
        >
          +
        </button>
        <span className="font-bold">{item.quantity}</span>
        <button 
          onClick={() => ondecrement(item.id)} 
          className="w-8 h-8 rounded-full bg-[#645CBB] text-white flex justify-center items-center"
        >
          -
        </button>
      </div>

      {/* Total */}
      <div className="text-sm md:text-base font-semibold">
        Total: ₹{item.price * item.quantity}
      </div>

      {/* Remove Button */}
      <button 
        onClick={() => onRemove(item.id)} 
        className="w-full md:w-[100px] py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
}

export default Cartitems;
