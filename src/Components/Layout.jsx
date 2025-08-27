import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./ScrollToTop";
import { useLocation } from "react-router-dom";


function Layout() {
   const location = useLocation();
  return (
    <div>
        <NavBar/>
        
         <ScrollToTop /> {/* ✅ now inside Router context */}
       
        <motion.div
          key={location.pathname} // important: re-render on route change
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.div>
      


        <Footer/>
    </div>
  )
}

export default Layout