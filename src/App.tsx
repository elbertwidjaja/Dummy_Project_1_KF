import { Routes, Route } from "react-router-dom";
import "./App.css";
import Payment from "./pages/payment";
import Product from "./pages/product";
import CheckoutForm from "./components/CheckoutForm";
import Shopping from "./pages/shopping/Shopping";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Shopping />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact-us" element={<CheckoutForm />} />
      </Routes>
    </div>
  );
}

export default App;
