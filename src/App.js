import { useState, useEffect } from "react";
import NavbarContainer from "./components/navbar/NavbarContainer";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/content/Content";
import Aos from "aos";
import "aos/dist/aos.css";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

Aos.init({ duration: 500 });

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const loaderWrapperStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const loader = (
    <div style={loaderWrapperStyle}>
      <Spinner animation="border" />
    </div>
  );

  return (
    <>
      {!isLoaded && loader}
      <div style={isLoaded ? { display: "block" } : { display: "none" }}>
        <Router>
          <NavbarContainer />
          <ScrollToTop />
          <Content />
        </Router>
      </div>
    </>
  );
};

export default App;
