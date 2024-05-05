import { useEffect, useState } from "react";
import { getAllItems } from "../api/getReq.api";

// articles items type definition
type ArticlesType = {
  title: string;
  image: string;
};
const useArticles = () => {
  const endpoint: string = "/blog/api/posts/";
  // const serverLocal: string = "https://localhost:8000/blog/api/posts/"
  // --- api data
  const [items, setItems] = useState<ArticlesType[]>([]);
  // when component starts
  useEffect(() => {
    // async await func
    async function loadItems() {
      const res = await getAllItems(endpoint);
      setItems(res.data);
      // for dev
      console.log(res);
    }
    loadItems();
  }, []);
  const articles = items
  return ({articles}
    
  )
}

export default useArticles