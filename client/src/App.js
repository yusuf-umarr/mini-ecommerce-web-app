import "./App.css";
import NavBar from "./component/navBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./screen/homeScreen";
import { Footer } from "./component/fotter";
import ProductScreen from "./screen/productScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product-screen" element={<ProductScreen />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
