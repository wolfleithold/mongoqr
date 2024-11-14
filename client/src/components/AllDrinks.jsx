// client/src/components/AllDrinks.jsx
import React, { useEffect, useState } from "react";
import api from "../api"; // Assuming api.js sets up Axios with VITE_API_URL

function AllDrinks() {
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await api.get("/api/drinks"); // Fetch all drinks
        setDrinks(response.data);
      } catch (error) {
        console.error("Error fetching drinks data:", error);
        setError("Could not fetch drinks data.");
      }
    };

    fetchDrinks();
  }, []);

  if (error) return <p>{error}</p>;
  if (drinks.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <h1>All Drinks</h1>
      <ul>
        {drinks.map((drink) => (
          <li key={drink._id}>
            <h2>{drink.name}</h2>
            <p>{drink.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllDrinks;
