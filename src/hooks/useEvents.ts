import { useState, useEffect } from 'react';
import { getAllItems } from '../api/getReq.api';

// api date type definition
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

const useEvents = (endpoint: string) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [events, setEvents] = useState<CardType[]>([]);

  useEffect(() => {
    async function loadItems() {
      const res = await getAllItems(endpoint);
      setItems(res.data);
    }
    loadItems();
  }, [endpoint]);

  useEffect(() => {
    const mappedEvents = items.slice(0, 4).map((item) => ({
      id: item.id,
      title: item.name,
      body: item.description,
      address: item.address,
      image: item.image,
    }));
    setEvents(mappedEvents);
  }, [items]);

  return { events };
};

export default useEvents;