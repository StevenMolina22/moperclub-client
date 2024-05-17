// useItemsFetch.ts
// import { ImTelegram } from "react-icons/im";
import { getAllItems } from "../api/getReq.api";

export interface ItemType {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
  is_featured: boolean;
}

const useItemsFetch = () => {
  const endpoints: string[] = [
    "/establishments/api/establishments/",
    "/events/api/events/",
    "/places/api/places/",
  ];

  const fetchItems = async () => {
    try {
      const responses = await Promise.all(
        endpoints.map((server) => getAllItems(server))
      );

      const mergedData: ItemType[] = responses.flatMap(
        (response) => response.data
      );

      const featuredItems = mergedData.filter((item) => item.is_featured);

      return featuredItems;
    } catch (error) {
      console.error("Error loading items:", error);
      throw error; // Rethrow the error for further handling
    }
  };

  return fetchItems;
};

export default useItemsFetch;