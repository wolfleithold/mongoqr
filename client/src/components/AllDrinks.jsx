import React, { useEffect, useState } from "react";
import axios from "axios";

function AllDrinks() {
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://mongoqr.onrender.com/api/drinks") // Direct URL for testing
      .then(response => setDrinks(response.data))
      .catch(error => {
        console.error("Error fetching drinks data:", error);
        setError("Could not fetch drinks data.");
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (drinks.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <h1>All Drinks</h1>
      <ul>
        {drinks.map(drink => (
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
