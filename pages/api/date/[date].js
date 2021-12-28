// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moment from "moment";

export default async function handler({ query: { date } }, res) {
  let startDate = moment(date).format("YYYY-MM-DD");
  const apires = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASATOKEN}&date=${startDate}&thumbs=true`
  );
  let data = await apires.json();
  if (data.thumbnail_url) {
    data.url = data.thumbnail_url;
  }
  return res.status(200).json(data);
}
