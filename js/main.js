import {ArcElement, Chart, Legend, PieController, Title, Tooltip} from "chart.js"

Chart.register(PieController, ArcElement);

// Tooltip has to be registered globally:
//Chart.register(PieController, ArcElement, Tooltip);

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  plugins: [Legend, Title, Tooltip], // including Tooltip here is not enough
  type: 'pie',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          fontSize: 14,
          color: "rgb(0,0,0)",
          boxWidth: 14,
        },
        onClick: null,
      },
      title: {
        display: true,
        text: "My awesome chart",
        font: {
          size: 16,
          weight: "bold",
          color: "rgb(0,0,0)",
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  },
});
