import { Routes, Route } from "react-router-dom";
import "./App.css";

import Shopping from "./pages/shopping/Shopping";
import Contactus from "./pages/contactUs";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/contact-us" element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
