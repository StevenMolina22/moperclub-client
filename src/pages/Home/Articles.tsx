import ImagesIcons from "../../components/ImagesIcons";
import { getAllItems } from "../../api/getItems.api";
import { useState, useEffect } from "react";

// articles items type definition
type ArticlesType = {
  title: string;
  image: string;
}

export default function Articles() {
  // --- api data 
  const [items, setItems] = useState<ArticlesType[]>([])
  const server = "http://localhost:8000/blog/api/posts/"
  // when component starts
  useEffect( () => {
    // async await func 
    async function loadItems(){
      const res = await getAllItems(server)
      setItems(res.data)
      // for dev
      console.log(res)
    }
    loadItems()
  }, [])

  return <ImagesIcons articles={items} />;
}
