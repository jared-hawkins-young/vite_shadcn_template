// src/lib/api.ts
export async function fetchFromStrapi(endpoint: string) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/${endpoint}?populate=*`);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  return res.json();
}