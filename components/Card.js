import styles from "../styles/Card.module.css";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  const { data } = props;
  return (
    <div className={data.className}>
      <Link href={"/image/" + data.date} passHref>
        <div className={styles.card}>
          <div className={styles.dateSection}>
            <div className={styles.day}>{moment(data.date).format("DD")}</div>
            <div className={`${styles.month} font-pt-serif`}>
              {moment(data.date).format("MMM")}
            </div>
          </div>
          <div className={`${styles.title} is-uppercase`}>{data.title}</div>
          <div className={`${styles.image_description} font-pt-serif`}>
            {data.explanation}
          </div>
          <div className={styles.image_container}>
            <Image
              width={330}
              height={230}
              src={data.url}
              alt={data.title}
              className={styles.image}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
            {data.copyright && (
              <sub className={styles.copyright}>&copy; {data.copyright}</sub>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
