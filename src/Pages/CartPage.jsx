import Cartitems from "../Components/Cartitems";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


function CartPage() {
    const {Cartitem,setCartitems}=useContext(CartContext)
   
const incrementquantity=(ID)=>{
setCartitems(Cartitem.map((item)=>item.id===ID ? {...item,quantity:item.quantity+1}:item))
}
 const decrementquantity=(ID)=>{
  
  setCartitems(Cartitem.map((item)=>item.id===ID  ? {...item,quantity:item.quantity>1 ?item.quantity-1:1}:item))
 }



    // console.log(Cartitem);

// const [Quality,setQuantity]=useState(1)
    const RemoveFromCart=(Id)=>{
     const updatedCart= Cartitem.filter((item)=>item.id !==Id)
              setCartitems(updatedCart)
    }

     
      const subtotal=Cartitem.reduce((a,b)=>{ 
        return a+b.price*b.quantity
      },0)
     
console.log(subtotal);



    
  return (
    <div className="p-6 max-w-3xl mx-auto pt-15">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>
            {
                Cartitem.map((item)=>(
                    <Cartitems key={item.id} item={item} onRemove={RemoveFromCart} onincrement={incrementquantity} ondecrement={decrementquantity}/>
                ))
            }
      
      {/* Checkout Button */}
      <div className="text-center"><h1 className="font-extrabold">SubTotal:{subtotal}</h1></div>
       
       <NavLink to={'/Checkout'}>
         <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 mt-4">
            Checkout
        </button>
       </NavLink>


    </div>
  );
}

export default CartPage;

     