import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // delay so page finishes rendering first
   
      window.scrollTo(0,0);
    
  }, [pathname]);

  return null;
};

export default ScrollToTop;
