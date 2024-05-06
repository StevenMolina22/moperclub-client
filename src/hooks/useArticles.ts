import { useEffect, useState } from "react";
import { getAllItems } from "../api/getReq.api";

// articles items type definition
type ArticlesType = {
  title: string;
  image: string;
};
const useArticles = (endpoint: string) => {
  // --- api data
  const [items, setItems] = useState<ArticlesType[]>([]);

  useEffect(() => {
    // Handle get response from API
    async function loadItems() {
      const res = await getAllItems(endpoint);
      setItems(res.data);
      console.log(res); // for dev purpose
    }
    loadItems();
  }, [endpoint]);

  const articles = items;

  return { articles };
};

export default useArticles;
