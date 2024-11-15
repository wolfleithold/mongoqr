// client/src/components/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToDrinks = () => navigate("/drinks");

  // Function to go to a specific drink by ID
  const goToDrink = (id) => {
    navigate(`/drinks/${id}`);
  };

  return (
    <div>
      <h1>Welcome to Booze Buddy</h1>
      <button onClick={goToDrinks}>Go to Drinks</button>

      {/* Test buttons for specific drink IDs */}
      <button onClick={() => goToDrink("6735a7a7722f37142abbceb3")}>Go to Beer</button>
      <button onClick={() => goToDrink("6735ae283ec74ae442a4bb78")}>Go to Wine</button>
      <button onClick={() => goToDrink("6735799c080d335e9f3e246d")}>Go to Mojito</button>
    </div>
  );
}

export default Home;
