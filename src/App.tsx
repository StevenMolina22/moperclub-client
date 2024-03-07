// "components" for routs handling
import { Routes, Route } from "react-router-dom";
// pages to set the routes to
import Store from "./pages/Store/Store";
import About from "./pages/About/About";
import Recommended from "./pages/Recommended/Recommended";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";

function App() {
  return (
    // <BrowserRouter>
      <Routes>
        {/* route setting */}
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
