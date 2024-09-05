import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/homePage";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductDetails";
import Carts from "./pages/Carts";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
const App = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
