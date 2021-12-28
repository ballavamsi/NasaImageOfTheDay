// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moment from "moment";

export default async function handler({ query: { date } }, res) {
  let endDate = moment(date).format("YYYY-MM-DD");
  let startDate = moment(endDate).add(-10, "days").format("YYYY-MM-DD");
  const apires = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASATOKEN}&start_date=${startDate}&end_date=${endDate}&thumbs=true`
  );
  let data = await apires.json();
  data.sort((a, b) => {
    return moment(b.date).diff(moment(a.date));
  });

  data.forEach((item) => {
    if (item.thumbnail_url) {
      item.url = item.thumbnail_url;
    }
  });
  return res.status(200).json(data);
}
