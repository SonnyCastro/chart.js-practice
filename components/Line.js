import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Ranges from "../components/ranges";

const LineChart = () => {
  const [sparklineD, setSparklineD] = useState([]);

  useEffect(() => {
    fetch("/api/fetchSparkline?timeframe=30d")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setSparklineD(data.data.coin.sparkline);
      })
      .catch((error) => {
        console.error("Setting Sparkline Error:", error);
      });
  }, []);

  const data = {
    // labels: Array.from(Array(168).keys()),
    labels: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    datasets: [
      {
        label: "$ETH",
        fill: false,
        lineTension: 0.4,
        backgroundColor: "rgba(71, 51, 166, 1)",
        borderColor: "rgba(71, 51, 166, 1)",
        borderWidth: 5,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.1,
        borderJoinStyle: "miter",
        pointBackgroundColor: "rgba(71, 51, 166, 1)",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(71, 51, 166, 1)",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 2,
        data: sparklineD,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        offset: true,
        title: {
          display: true,
          text: "Date",
        },
        display: false,
        ticks: {
          source: "data",
          autoSkip: true,
          autoSkipPadding: 15,
          maxRotation: 0,
        },
        grid: {
          display: false,
        },
      },
      y: {
        position: "right",
        title: {
          display: true,
          text: "value",
        },
        display: false,
        ticks: {
          padding: 20,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    tooltips: {
      mode: "index",
      intersect: false,
      displayColors: false,
      color: "rgba(71, 51, 166, 1)",
      backgroundColor: "rgba(71, 51, 166, 1)",
      cornerRadius: 5,
      titleFontColor: "#172240",
      titleFontSize: 16,
      titleFontStyle: "600",
      bodyFontColor: "#172240",
      bodyFontSize: 12,
      xPadding: 10,
      yPadding: 8,
    },
  };

  return (
    <div className={styles.header}>
      <div>
        <h1>Line Chart</h1>
      </div>
      <Ranges setSparklineD={setSparklineD} />
      <div
        style={{
          width: "70%",
          height: "30%",
        }}
      >
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
