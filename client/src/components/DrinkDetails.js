// client/src/components/DrinkDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DrinkDetails() {
  const { id } = useParams(); // Get the drink ID from URL
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    const fetchDrink = async () => {
      try {
        const response = await axios.get(`/api/drinks/${id}`);
        setDrink(response.data);
      } catch (error) {
        console.error("Error fetching drink data:", error);
      }
    };
    fetchDrink();
  }, [id]);

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
