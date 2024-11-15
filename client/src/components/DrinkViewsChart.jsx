import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale, // "category" scale for x-axis
  LinearScale,   // "linear" scale for y-axis
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register components with Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function DrinkViewsChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchDrinkData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/drinks/views`);
        const drinks = response.data;

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

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
            title: {
              display: true,
              text: "Drink QR Code Scans",
            },
          },
          scales: {
            x: {
              type: "category",
              title: {
                display: true,
                text: "Drinks",
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Scans",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default DrinkViewsChart;
