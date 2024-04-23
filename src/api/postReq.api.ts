/**
 * Make generic POST request, return Response object
 * @param {string} endpoint - Backend url to make the request to Ex: "/.../"
 * @param {object} data - Data to send to the server
 * @returns {Promise<any>} Promise with the response
 */
export async function sendPostRequest(endpoint = "", data = {}): Promise<any> {
  const baseURL = import.meta.env.VITE_BACKEND_URL // uses vite env_vars (production or local)
  const response = await fetch(baseURL+endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}
