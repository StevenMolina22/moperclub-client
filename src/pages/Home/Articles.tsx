import ImagesIcons from "../../components/Layout/ImagesIcons";
import { getAllItems } from "../../api/getItems.api";
import { useState, useEffect } from "react";

// articles items type definition
type ArticlesType = {
  title: string;
  image: string;
}

export default function Articles() {
  const endpoint: string = "/blog/api/posts/";
  // const serverLocal: string = "https://localhost:8000/blog/api/posts/"
  // --- api data 
  const [items, setItems] = useState<ArticlesType[]>([])
  // when component starts
  useEffect( () => {
    // async await func 
    async function loadItems(){
      const res = await getAllItems(endpoint)
      setItems(res.data)
      // for dev
      console.log(res)
    }
    loadItems()
  }, [])

  return <ImagesIcons articles={items} />;
}
