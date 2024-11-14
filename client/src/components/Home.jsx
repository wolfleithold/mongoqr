// client/src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToDrinks = () => {
    navigate("/drinks"); // Navigate to /drinks when the button is clicked
  };

  return (
    <div>
      <h1>Welcome to Booze Buddy</h1>
      <button onClick={goToDrinks}>Go to Drinks</button>
    </div>
  );
}

export default Home;
