import Cartitems from "../Components/Cartitems";

import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


function CartPage() {
    const {Cartitem,setCartitems}=useContext(CartContext)
    console.log(Cartitem);

// const [Quality,setQuantity]=useState(1)
    const RemoveFromCart=(Id)=>{
     const updatedCart= Cartitem.filter((item)=>item.id !==Id)
              setCartitems(updatedCart)
    }





    
  return (
    <div className="p-6 max-w-3xl mx-auto pt-15">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>
            {
                Cartitem.map((item)=>(
                    <Cartitems key={item.id} item={item} onRemove={RemoveFromCart}/>
                ))
            }
      
      {/* Checkout Button */}
      <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 mt-4">
        Checkout
      </button>
    </div>
  );
}

export default CartPage;
