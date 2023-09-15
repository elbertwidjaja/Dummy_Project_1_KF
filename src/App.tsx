import { Routes, Route } from "react-router-dom";
import "./App.css";

import Shopping from "./pages/shopping/Shopping";
import Contactus from "./pages/contactUs";
import Home from "./pages/home";
import Category from "./pages/category";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
