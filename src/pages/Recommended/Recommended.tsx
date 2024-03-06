import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EventCard from "../../components/Atoms/EventCard";
import { getAllItems } from "../../api/featured.api";
import { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";

export default function Recommended() {
  // item is a data array, setItems is a func to set the data
  const [items, setItems] = useState([]); // [] to make empty array, not null
  // --- backend info, useEffect to use as soon as the page starts
  useEffect(() => {
    // async function for it to run in the background
    async function loadItems() {
      const res = await getAllItems();
      setItems(res.data); // to save the response data
      console.log(res); // for dev purpose
    }
    loadItems();
  }, []);

  // widht handler for responsiveness
  let [winWidth, setWinWidth] = useState(window.innerWidth);
  // updates width in state
  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // SideBar show/hide toggle states
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar />
      <div className="mb-5 text-center text-4xl font-semibold ">
        Recommended
      </div>
      {winWidth > 768 && (
        <button
          onClick={toggleSidebar}
          className="fixed right-5 top-16 z-50 rounded-full bg-gray-800 p-3 text-white shadow-lg"
        >
          See More
        </button>
      )}

      <SideBar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item) => (
          <EventCard event={item} />
        ))}
      </div>
      <div style={{ height: "32px", width: "100%" }}></div>
      <Footer />
    </>
  );
}
