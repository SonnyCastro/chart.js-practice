import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
const moment = require("moment");

const LineChart = () => {
  const [sparklineD, setSparklineD] = useState([]);

  // fetch("https://api.coinranking.com/v2/coin/razxDUgYGNAdQ?timePeriod=7d", {
  //   method: "GET", // or 'PUT'
  //   mode: "no-cors",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "x-access-token":
  //       "coinranking3c7452ebd91112395f11a2de4746db550eeb078522a85cf6",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // console.log(data?.coin?.sparkline);
  //     // setSparklineD(data);
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  // useEffect(() => {
  //   fetch("https://api.coinranking.com/v2/coin/razxDUgYGNAdQ?timePeriod=7d", {
  //     method: "GET", // or 'PUT'
  //     mode: "no-cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-access-token":
  //         "coinranking3c7452ebd91112395f11a2de4746db550eeb078522a85cf6",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log("Success");
  //       console.log(data);
  //       // setSparklineD(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, [sparklineD]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/ethereum?sparkline=true")
      .then((res) => res.json())
      .then((data) => {
        setSparklineD(data.market_data.sparkline_7d.price);
        // setSparklineD(data.sparkline);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const data = {
    labels: Array.from(Array(168).keys()),
    // labels: [
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    //   "",
    // ],
    datasets: [
      {
        label: "$ETH",
        fill: false,
        lineTension: 0.4,
        backgroundColor: "rgba(75,192,192,0.4)",
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
        pointRadius: 0,
        pointHitRadius: 2,
        // label: ["7d ETH"],

        // fill: false,
        // borderCapStyle: "round",
        // borderWidth: 2,
        // lineTension: 0.2,
        // backgroundColor: "#47d7e2",
        // borderColor: "#47d7e2",
        // pointRadius: 0,
        data: sparklineD,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    // elements: {
    //   point: {
    //     hoverRadius: 4,
    //   },
    // },
    // layout: {
    //   padding: 20,
    // },
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
        <h1 className="title">Line Chart</h1>
      </div>
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
