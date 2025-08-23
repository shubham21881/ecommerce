import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartContextProvider } from "./Context/CartContext.jsx";
import { ProductContextProvider } from "./Context/ProductContext.jsx";




createRoot(document.getElementById("root")).render(
  <StrictMode>
 <ProductContextProvider>
   <CartContextProvider>
      <App />
    </CartContextProvider>
 </ProductContextProvider>
   
  </StrictMode>
);
