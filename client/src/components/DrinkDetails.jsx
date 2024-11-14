import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

function DrinkDetails() {
  const { id } = useParams();
  const [drink, setDrink] = useState(null);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchDrink = async () => {
      try {
        const response = await api.get(`/api/drinks/${id}`);
        console.log("Drink data:", response.data); // Log the response
        setDrink(response.data);
      } catch (error) {
        console.error("Error fetching drink data:", error);
        setError(error);
      }
    };
    fetchDrink();
  }, [id]);

  if (error) return <p>Error: {error.message}</p>;
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
