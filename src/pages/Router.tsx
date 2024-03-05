// "components" for routs handling
import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages to set the routes to
import Store from "./Store";
import About from "./About";
import Recommended from "./Recommended";
import Blog from "./Blog";
import App from "../App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* route setting */}
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
