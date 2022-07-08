import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Routes, Route, Link } from "react-router-dom";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="shop" element={<Shop />} />
        <Route path="/" element={<Shop />} />
        <Route path="review" element={<OrderReview />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="placeorder" element={<PlaceOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
