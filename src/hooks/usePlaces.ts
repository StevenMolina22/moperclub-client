import { useEffect, useState } from "react";
import { getAllItems } from "../api/getReq.api";
// api date type defintion
type ItemType = {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
};
type CardType = {
  id: number;
  title: string;
  body: string;
  image: string;
  address: string;
};

const usePlaces = (endpoint: string) => {
  // items of api data states definition
  const [items, setItems] = useState<ItemType[]>([]); // [] to make empty array, not null using tsx
  const [places, setPlaces] = useState<CardType[]>([]);

  // gets data from from the API (useEffect runs as soon as page starts)
  useEffect(() => {
    // async function for it to run in the background
    async function loadItems() {
      const res = await getAllItems(endpoint);
      setItems(res.data); // to save the response data
      console.log(res); // for dev purpose
    }
    loadItems();
  }, [endpoint]);

  useEffect(() => {
    // Map each item from items array to match the keys expected by ItemType
    const mappedPlaces = items.slice(0, 4).map((item) => ({
      id: item.id,
      title: item.name,
      body: item.description,
      address: item.address,
      image: item.image,
    }));
    setPlaces(mappedPlaces);
  }, [items]);
  return {places};
};

export default usePlaces;
