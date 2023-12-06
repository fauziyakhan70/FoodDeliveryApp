import "./App.css";
import Home from "./screens/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import SingUp from "./screens/SingUp";
import About from "./screens/About";
import Registration from "./screens/Registration";
import CartPage from './components/CartPage';
import { CartProvider } from "./components/ContextReducer";
import OrderPage from './components/OrderPage';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderPage />} /> {/* Change here */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
