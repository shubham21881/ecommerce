import { createContext, useEffect, useState } from "react";
import axios from "axios";
import AllProduct from "../Data/Product";


  export   const  ProductContext= createContext(null)


export const ProductContextProvider=(props)=>{


     
    const [Productitems,SetProductitems]= useState([])
    const [loading,setloading]=useState(true)



    //fetching data
     useEffect(()=>{
      
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            SetProductitems(res.data)
            setloading(false)
        }).catch((err)=>{
            console.error("error in fetching time",err)
            setloading(false)
        })

    },[])
    


    // console.log(Productitems);
    





    return (
        <ProductContext value={{Productitems,SetProductitems,loading}}>
            {props.children}
        </ProductContext>
    )










}