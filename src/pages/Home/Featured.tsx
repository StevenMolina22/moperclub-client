import Slider from "../../components/Slider";
import { getAllItemsAlt } from "../../api/featuredAlt.api";
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
  // --- api section
  const [itemsAlt, setItemsAlt] = useState<ItemType[]>([]);

  useEffect(() => {
    async function loadItemsAlt() {
      const res = await getAllItemsAlt();
      setItemsAlt(res.data.featured_instances);
      console.log(res);
    }
    loadItemsAlt();
  }, []);

  // returned featured slider
  return <Slider items={itemsAlt} />;
}
