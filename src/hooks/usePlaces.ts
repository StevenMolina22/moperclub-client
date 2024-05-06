import { useEffect, useState } from "react";
import useApiData from "./useApiData";

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
  const [places, setPlaces] = useState<CardType[]>([]);
  const { data: items, isLoading, error } = useApiData<ItemType>(endpoint);  

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

  return { places, isLoading, error };
};

export default usePlaces;
