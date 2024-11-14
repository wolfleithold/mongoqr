// client/src/components/Home.jsx
import React, { useEffect, useState } from "react";
import api from "../api"; // Assuming api.js sets up Axios with VITE_API_URL

function Home() {
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await api.get("/api/drinks"); // Fetch all drinks from backend
        setDrinks(response.data);
      } catch (error) {
        console.error("Error fetching drinks data:", error);
        setError("Could not fetch drinks data.");
      }
    };

    fetchDrinks();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Welcome to Booze Buddy</h1>
      <h2>Drinks List</h2>
      <ul>
        {drinks.map((drink) => (
          <li key={drink._id}>
            <h3>{drink.name}</h3>
            <p>{drink.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
