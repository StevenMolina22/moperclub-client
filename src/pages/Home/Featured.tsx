import Slider from "../../components/Slider";
import { getAllItems } from "../../api/getItems.api";
import { useState, useEffect } from "react";

// Type definition for the API data
interface ItemType {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
}

const Featured: React.FC = () => {
  const endpoints: string[] = [
    "/establishments/api/establishments/",
    "/events/api/events/",
    "/places/api/places/",
  ];

  // State for storing items
  const [itemsAlt, setItemsAlt] = useState<ItemType[]>([]);

  useEffect(() => {
    async function loadItemsAlt() {
      try {
        const responses = await Promise.all(
          endpoints.map((server) => getAllItems(server))
        );
        
        // Merge all the data from responses into a single array
        const mergedData: ItemType[] = responses
          .flatMap((response) => response.data)
          .filter((item) => item.is_featured);

        // Set the state with the merged and filtered data
        setItemsAlt(mergedData);
        console.log("featured data:");
        console.log(mergedData);
      } catch (error) {
        console.error("Error loading items:", error);
        // Handle error
      }
    }

    loadItemsAlt();
  }, []);

  // Render the featured slider with the items
  return <Slider items={itemsAlt} />;
};

export default Featured;
