// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // console.log(req.query);
  const { coinUuid, timePeriod } = req.query;
  fetch(
    `https://api.coinranking.com/v2/coin/${coinUuid}?timePeriod=${timePeriod}`,
    {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "x-access-token": process.env.API_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
