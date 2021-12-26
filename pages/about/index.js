import Head from "next/head";
import styles from "../../styles/about.module.css";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.center}>About Me</h1>
      <div className={styles.about_us_card}>
        <div className={styles.pic}>
          <Image
            src={"https://ballavamsi.com/assets/mid-image-section.png"}
            alt=""
            width={320}
            height={240}
          ></Image>
        </div>
        <div className={styles.title}>Balla Vamsi Srinivas</div>
        <div className={`${styles.description} font-pt-serif`}>
          An Architect and Lead with 10 years of experience in Microsoft
          technologies and frontend. I code with passion, love to explore and do
          projects which give me knowledge and also sometimes for fun.
        </div>
        <div className={styles.button}>
          <Link href="https://ballavamsi.com" target="_blank" passHref>
            <button>Go to ballavamsi.com</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
