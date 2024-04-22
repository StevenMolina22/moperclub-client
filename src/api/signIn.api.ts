
// Define a function for signing in
export async function handleSignIn(url = "", data = {}): Promise<any> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}