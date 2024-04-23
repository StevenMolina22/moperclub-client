// import { getAllItems } from "../../api/featured.api";
import { getAllItems } from "../../api/getReq.api";
import ContentDarkWrapper from "../../components/Features/ContentDarkWrapper";
import { useState, useEffect } from "react";
import React from "react";

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

  const [events, setEvents] = React.useState<ItemType[]>([]);

  // use vite estructure to get the server url
  const endpoint = "/events/api/events/";

  // Get data from the API on initial render
  useEffect(() => {
    async function loadItems() {
      const res = await getAllItems(endpoint);
      setItems(res.data); // to save the response data
    }
    loadItems();
  }, []);

  // Set Events to be 4 items, even if it changes
  useEffect(() => {
    setEvents(items.slice(0, 4));
  }, [items]);

  return <ContentDarkWrapper title="Eventos para ti" subtitle="No te fallan" cardsContent={events} />;
}
