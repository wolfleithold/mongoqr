// client/src/components/DrinkViewsChart.jsx
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

function DrinkViewsChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchDrinkData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/drinks/views`);
        const drinks = response.data;

        // Prepare data for Chart.js
        const labels = drinks.map((drink) => drink.name);
        const data = drinks.map((drink) => drink.views);

        setChartData({
          labels,
          datasets: [
            {
              label: "QR Code Scans",
              data,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching drink data:", error);
      }
    };

    fetchDrinkData();
  }, []);

  if (!chartData) return <p>Loading...</p>;

  return <Bar data={chartData} />;
}

export default DrinkViewsChart;
