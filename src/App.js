import NavbarContainer from "./components/navbar/NavbarContainer";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/content/Content";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top : 0, behavior : 'auto'});
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <NavbarContainer />
      <ScrollToTop />
      <Content />
    </Router>
  );
}

export default App;
