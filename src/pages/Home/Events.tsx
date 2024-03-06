import { getAllItems } from "../../api/featured.api";
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
  // items of api data states definition
  const [items, setItems] = useState<ItemType[]>([]); // [] to make empty array, not null using tsx

  // gets data from from the API (useEffect runs as soon as page starts)
  useEffect(() => {
    // async function for it to run in the background
    async function loadItems() {
      const res = await getAllItems();
      setItems(res.data); // to save the response data
      console.log(res); // for dev purpose
    }
    loadItems();
  }, []);
  let interactiveCardsContent = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1679470210717-97fc30968fdf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim distinctio odit earum, culpa accusantium voluptas dicta perspiciatis consectetur esse neque.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563693267403-111c5d856e49?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title 2",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim distinctio odit earum, culpa accusantium voluptas dicta perspiciatis consectetur esse neque.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1530445098981-862544854865?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title 3",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim distinctio odit earum, culpa accusantium voluptas dicta perspiciatis consectetur esse neque.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523906921802-b5d2d899e93b?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Title 4",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim distinctio odit earum, culpa accusantium voluptas dicta perspiciatis consectetur esse neque.",
    },
  ];
  const displayedItems = items.slice(0,4)
  return (
    <InteractiveCards cardsContent={displayedItems} />
  )
}
