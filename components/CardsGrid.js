import Card from "./Card";
import styles from "../styles/CardsGrid.module.css";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";
import Loading from "./Loading";

const CardsGrid = ({ images }) => {
  const [cards, setCards] = useState(images);

  const getMoreImages = async () => {
    let endDate = moment(cards[cards.length - 1].date)
      .add(-1, "days")
      .format("YYYY-MM-DD");
    const res = await fetch(`/api/range/${endDate}`);
    let data = await res.json();
    data.sort((a, b) => {
      return moment(b.date).diff(moment(a.date));
    });

    const newImages = [...cards, ...data];
    setCards(newImages);
  };

  return (
    <InfiniteScroll
      dataLength={cards.length}
      next={getMoreImages}
      hasMore={true}
      loader={<Loading />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className={styles.grid_items}>
        {cards.map((card) => (
          <Card key={card.date} data={card} className={styles.grid_item}></Card>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default CardsGrid;
