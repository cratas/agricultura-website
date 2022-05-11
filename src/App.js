import NavbarContainer from "./components/navbar/NavbarContainer";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./components/content/Content";

function App() {
  return (
    <Router>
      <NavbarContainer />
      <Content />
    </Router>
  );
}

export default App;
