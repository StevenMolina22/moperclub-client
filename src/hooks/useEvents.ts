import { useState, useEffect } from 'react';
import useApiData from './useApiData';

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
  const { data: items, isLoading, error } = useApiData<ItemType>(endpoint);
  const [events, setEvents] = useState<CardType[]>([]);

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

  return { events, isLoading, error };
};

export default useEvents;