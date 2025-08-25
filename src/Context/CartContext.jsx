import { createContext, useState } from "react";

     export const  CartContext= createContext(null)



 export const CartContextProvider=(props)=>{
            const [Cartitem,setCartitems]= useState([])  


//  console.log(Cartitems);
 

    return (
         <CartContext.Provider value={{Cartitem,setCartitems}}>
             {props.children}
         </CartContext.Provider>
    )
 }