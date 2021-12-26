import moment from "moment";
import { useState } from "react";
import CardsGrid from "../components/CardsGrid";
import { server } from "../config";

export default function Home({ nasaData }) {
  const [data, setData] = useState(nasaData);
  return (
    <>
      <CardsGrid images={data}></CardsGrid>
    </>
  );
}

export const getServerSideProps = async () => {
  var currentImageDate = moment().format("YYYY-MM-DD");
  const res = await fetch(`${server}/api/range/${currentImageDate}`);
  const data = await res.json();
  data.sort((a, b) => {
    return moment(b.date).diff(moment(a.date));
  });
  return {
    props: {
      nasaData: data,
    },
  };
};
