import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import EventCard from "../../components/Common/Cards/EventCard";
import { getAllItems } from "../../api/getReq.api";
import { useState, useEffect } from "react";
import SideBar from "../../components/Layout/SideBar";
import UnderConstructionPage from "../../components/Common/Construction";

interface EventItem {
  image: string;
  name: string;
  description: string;
  address: string;
  phone_number: string;
  website: string;
}

export default function Recommended() {
  const [items, setItems] = useState<EventItem[]>([]); // Explicitly set the type to EventItem[]

  useEffect(() => {
    async function loadItems() {
      const res = await getAllItems("/events/api/events/");
      setItems(res.data);
      console.log(res);
    }
    loadItems();
  }, []);

  const [winWidth, setWinWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <EventCard key={item.name} {...item} /> // No more type error here
        ))}
      </div>
      <UnderConstructionPage />
      <Footer />
    </>
  );
}