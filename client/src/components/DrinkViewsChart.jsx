import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

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
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",  // Red
                "rgba(54, 162, 235, 0.6)",  // Blue
                "rgba(255, 206, 86, 0.6)",  // Yellow
                "rgba(75, 192, 192, 0.6)",  // Green
                "rgba(153, 102, 255, 0.6)", // Purple
                "rgba(255, 159, 64, 0.6)",  // Orange
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
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
    <div style={{ width: "50%", height: "300px", margin: "0 auto" }}>
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
