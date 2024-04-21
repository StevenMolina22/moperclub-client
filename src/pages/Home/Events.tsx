// import { getAllItems } from "../../api/featured.api";
import { getAllItems } from "../../api/getItems.api";
import InteractiveCards from "../../components/InteractiveCards";
import { useState, useEffect } from "react";

// api date type defintion
type ItemType = {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
};

export default function Events() {
  // use vite estructure to get the server url
  const endpoint = "/events/api/events/";
  // items of api data states definition
  const [items, setItems] = useState<ItemType[]>([]); // [] to make empty array, not null using tsx

  // gets data from from the API (useEffect runs as soon as page starts)
  useEffect(() => {
    // async function for it to run in the background
    async function loadItems() {
      const res = await getAllItems(endpoint);
      setItems(res.data); // to save the response data
    }
    loadItems();
  }, []);
  const displayedItems = items.slice(0, 4);
  return (
    <InteractiveCards title="Eventos para ti" cardsContent={displayedItems} />
  );
}
