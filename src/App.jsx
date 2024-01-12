import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import Philosophy from "./pages/Philosophy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="blog" element={<Blog />} />
          <Route path="philosophy" element={<Philosophy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
