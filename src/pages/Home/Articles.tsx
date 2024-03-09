import ImagesIcons from "../../components/ImagesIcons";
import { getAllItems } from "../../api/getItems.api";
import { useState, useEffect } from "react";

// articles items type definition
type ArticlesType = {
  title: string;
  image: string;
}

export default function Articles() {
  const serverHosted: string = "https://moperclub-server.vercel.app/blog/api/posts/";
  // const serverLocal: string = "https://localhost:8000/blog/api/posts/"
  // --- api data 
  const [items, setItems] = useState<ArticlesType[]>([])
  // when component starts
  useEffect( () => {
    // async await func 
    async function loadItems(){
      const res = await getAllItems(serverHosted)
      setItems(res.data)
      // for dev
      console.log(res)
    }
    loadItems()
  }, [])

  return <ImagesIcons articles={items} />;
}
