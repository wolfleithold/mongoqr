// client/src/components/DrinkDetails.js
import React from "react";
import { useParams } from "react-router-dom";

function DrinkDetails() {
  const { id } = useParams(); // This should match the URL parameter
  return <h1>Drink Details for ID: {id}</h1>;
}

export default DrinkDetails;
