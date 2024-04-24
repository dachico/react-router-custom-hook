import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const useRouter = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const scrollToRef = (ref) => {
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    switch (path) {
      case "/home":
        scrollToRef(homeRef);
        break;
      case "/about":
        scrollToRef(aboutRef);
        break;
      case "/contact":
        scrollToRef(contactRef);
        break;
      default:
        scrollToRef(aboutRef);
        break;
    }
  }, [location.pathname]);

  return {
    homeRef,
    aboutRef,
    contactRef,
  };
};
