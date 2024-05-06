import { useEffect, useState } from 'react';
import { getAllItems } from '../api/getReq.api';

// Generic type parameter for the item type
type UseApiData<TypeData> = {
  data: TypeData[];
  isLoading: boolean;
  error: Error | null;
};

// Generic hook function
function useApiData<TypeData>(endpoint: string): UseApiData<TypeData> {
  const [data, setData] = useState<TypeData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllItems(endpoint);
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('An unknown error occurred'));
        }
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, error };
}

export default useApiData;