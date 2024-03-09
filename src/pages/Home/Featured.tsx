import Slider from "../../components/Slider";
import { getAllItems } from "../../api/getItems.api";
import { useState, useEffect } from "react";

// --Type definition for the api data (to be used in the item state definition)
type ItemType = {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
};

export default function Featured() {
  const serverHosted: string = "https://moperclub-server-v2.vercel.app/api/featured/";
  // const serverLocal: string = "https://localhost:8000/api/featured"
  // --- api section
  const [itemsAlt, setItemsAlt] = useState<ItemType[]>([]);

  useEffect(() => {
    async function loadItemsAlt() {
      const res = await getAllItems(serverHosted);
      setItemsAlt(res.data.featured_instances);
      console.log(res);
    }
    loadItemsAlt();
  }, []);

  // returned featured slider
  return <Slider items={itemsAlt} />;
}
