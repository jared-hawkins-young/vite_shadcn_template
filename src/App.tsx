// src/App.tsx
import { useEffect, useState } from "react";
import { fetchFromStrapi } from "./lib/api";

function App() {
  const [homeData, setHomeData] = useState<any>(null);

  useEffect(() => {
    fetchFromStrapi("home") // assumes you have a "home" collection type in Strapi
      .then((data) => setHomeData(data.data))
      .catch(console.error);
  }, []);

  if (!homeData) return <p>Loading...</p>;

  return (
    <div>
      <h1>{homeData.attributes.title}</h1>
      <p>{homeData.attributes.description}</p>
    </div>
  );
}

export default App;