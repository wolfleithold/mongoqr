// client/src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DrinkDetails from "./components/DrinkDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drinks/:id" element={<DrinkDetails />} />
    </Routes>
  );
}

export default App;
