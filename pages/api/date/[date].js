// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moment from "moment";

export default async function handler({ query: { date } }, res) {
  let startDate = moment(date).format("YYYY-MM-DD");
  const apires = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=gBb0uI0npUjM5pE4eNAhNNzeqxSi8dCbzLLsgi5U&date=${startDate}`
  );
  let data = await apires.json();
  return res.status(200).json(data);
}
