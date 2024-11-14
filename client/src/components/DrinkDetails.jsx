// client/src/components/DrinkDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api"; // Assuming api.js sets up Axios with VITE_API_URL

function DrinkDetails() {
  const { id } = useParams();
  const [drink, setDrink] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrink = async () => {
      try {
        const response = await api.get(`/api/drinks/${id}`);
        setDrink(response.data);
      } catch (error) {
        console.error("Error fetching drink data:", error);
        setError("Could not fetch drink data.");
      }
    };

    fetchDrink();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!drink) return <p>Loading...</p>;

  return (
    <div>
      <h1>{drink.name}</h1>
      <img src={drink.imageUrl} alt={drink.name} />
      <p>{drink.description}</p>
      <p>{drink.additionalInfo}</p>
    </div>
  );
}

export default DrinkDetails;
