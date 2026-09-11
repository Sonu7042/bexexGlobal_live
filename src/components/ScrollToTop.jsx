import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // fallback for Lenis / normal scroll
    window.scrollTo({
    top: 0,
    behavior: "smooth",
});
    

    // Lenis adds scroll container, force reset
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
