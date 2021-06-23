import { useState, useEffect } from "react";
import ranges from "../helpers/ranges.json";
import assets from "../helpers/assets.json";

const Ranges = ({ setSparklineD }) => {
  const [timeFrame, setTimeFrame] = useState("30d");
  const [coinUuid, setCoinUuid] = useState("razxDUgYGNAdQ");

  useEffect(() => {
    fetch(`/api/fetchSparkline?coinUuid=${coinUuid}&timePeriod=${timeFrame}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setSparklineD(data.data.coin.sparkline);
      });
  }, [timeFrame, coinUuid]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        margin: "3rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "55%",
        }}
      >
        {ranges.map((range) => {
          return (
            <>
              <button
                onClick={(e) => {
                  setTimeFrame(e.target.attributes.timeframe.nodeValue);
                }}
                timeframe={range.timeFrame}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  borderRadius: "25rem",
                  padding: "1rem",
                  color: "white",
                }}
              >
                {range.timePeriod}
              </button>
            </>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "3rem",
          justifyContent: "space-around",
          width: "55%",
        }}
      >
        {assets.map((crypto) => {
          return (
            <>
              <button
                onClick={(e) => {
                  setCoinUuid(e.target.attributes.coinUuid.nodeValue);
                }}
                coinUuid={crypto.coinUuid}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid white",
                  borderRadius: "25rem",
                  padding: "1rem",
                  color: "white",
                }}
              >
                {crypto.coin}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Ranges;
