import Slider from "../../components/Slider"
import { getAllItems } from "../../api/featured.api"
import { useState, useEffect } from "react"

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
  // items of api data states definition
  const [items, setItems] = useState<ItemType[]>([]); // [] to make empty array, not null using tsx

  // gets data from from the API (useEffect runs as soon as page starts)
  useEffect(() => {
    // async function for it to run in the background
    async function loadItems() {
      const res = await getAllItems();
      setItems(res.data); // to save the response data
      console.log(res); // for dev purpose
    }
    loadItems();
  }, []);
  // returned featured slider 
  return (
    <Slider items={items}/>
  )
}
