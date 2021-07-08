import data from "../../helpers/data.json";

export default async (req, res) => {
  const response = await fetch(
    `https://cosmos--search.datahub.figment.io/apikey/${process.env.DATAHUB_KEY}/transactions_search`,
    {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`;
    throw new Error(message);
  }

  const list = await response.json();
  // console.log("List of tx's: ", list);
  // console.log(data.stringify(data));
  res.send(list);
  console.log(list);
  return list;
};
