import { createContext, useState } from "react";

     export const  CartContext= createContext(null)



 export const CartContextProvider=(props)=>{
            const [Cartitems,setCartitems]= useState([])  


 console.log(Cartitems);
 

    return (
         <CartContext value={{Cartitems,setCartitems}}>
             {props.children}
         </CartContext>
    )
 }