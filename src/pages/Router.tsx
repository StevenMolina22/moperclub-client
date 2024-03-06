// "components" for routs handling
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages to set the routes to
import Store from "./Store/Store.tsx";
import About from "../About";
import Recommended from "./Recommended/Recommended";
import Blog from "./Blog/Blog";
import App from "../App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* route setting */}
        <Route path="/" element={<App />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
