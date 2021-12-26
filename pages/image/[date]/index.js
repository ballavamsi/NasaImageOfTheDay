import moment from "moment";
import styles from "../../../styles/ImageDetails.module.css";
import Link from "next/link";
import Image from "next/image";
import { server } from "../../../config";
import Meta from "../../../components/Meta";

const NasaImage = ({ image }) => {
  return (
    <div className={styles.container}>
      <Meta title={`NASA IOD - ${image.title} - ${image.date}`} />
      <div className={styles.back_button}>
        <Link href="/" passHref>
          <button>Back to Home</button>
        </Link>
      </div>
      <div className={styles.title}>{image.title}</div>
      <div className={styles.date}>
        {moment(image.date).format("DD MMM YYYY")}
      </div>
      <div className={styles.desc}>{image.explanation}</div>
      <div className={styles.image_section}>
        <Image
          src={image.hdurl}
          alt={image.title}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          priority={true}
        />
        {image.copyright && (
          <sub className={styles.copyright}>&copy; {image.copyright}</sub>
        )}
      </div>
    </div>
  );
};

export default NasaImage;

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/date/${context.params.date}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      image: data,
    },
  };
};

// export const getStaticPaths = async (context) => {
//   const res = await fetch(
//     "https://api.nasa.gov/planetary/apod?api_key=gBb0uI0npUjM5pE4eNAhNNzeqxSi8dCbzLLsgi5U&start_date=2021-08-01"
//   );
//   const data = await res.json();
//   const paths = data.map((image) => {
//     return { params: { date: image.date } };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };
