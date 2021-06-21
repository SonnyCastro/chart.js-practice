const Ranges = ({ setSparklineD }) => {
  const handleClick = (e) => {
    console.log(e.target.attributes.timeframe.nodeValue);
    fetch(`/api/hello?timeframe=${e.target.attributes.timeframe.nodeValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSparklineD(data.data.coin.sparkline);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "50%",
        margin: "3rem 0",
      }}
    >
      <button
        onClick={handleClick}
        timeframe="24h"
        style={{
          backgroundColor: "transparent",
          border: "1px solid white",
          borderRadius: "25rem",

          padding: "1rem",
          color: "white",
        }}
      >
        D
      </button>
      <button
        onClick={handleClick}
        timeframe="7d"
        style={{
          backgroundColor: "transparent",
          border: "1px solid white",
          borderRadius: "25rem",

          padding: "1rem",
          color: "white",
        }}
      >
        W
      </button>
      <button
        onClick={handleClick}
        timeframe="30d"
        style={{
          backgroundColor: "transparent",
          border: "1px solid white",
          borderRadius: "25rem",
          padding: "1rem",
          color: "white",
        }}
      >
        M
      </button>
      <button
        onClick={handleClick}
        timeframe="1y"
        style={{
          backgroundColor: "transparent",
          border: "1px solid white",
          borderRadius: "25rem",
          padding: "1rem",
          color: "white",
        }}
      >
        Y
      </button>
    </div>
  );
};

export default Ranges;
