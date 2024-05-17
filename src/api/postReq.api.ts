interface Response<T> {
  data: T;
  status: number;
  statusText: string;
}

export async function sendPostRequest<T>(endpoint = "", data = {}): Promise<Response<T>> {
  const baseURL = import.meta.env.VITE_BACKEND_URL; // uses vite env_vars (production or local)

  const response = await fetch(baseURL + endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData: Response<T> = {
    data: await response.json(),
    status: response.status,
    statusText: response.status.toString(),
  };

  return responseData;
}