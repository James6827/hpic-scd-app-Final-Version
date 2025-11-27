//this handles scrolling pages and wehn navigating to a new page it scrolls to the top
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);   // scroll to top on page change
  }, [pathname]);

  return null;
}
