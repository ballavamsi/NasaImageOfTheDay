import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Meta from "./Meta";
import NextNProgress from "nextjs-progressbar";

const Layout = ({ children }) => {
  return (
    <>
      <NextNProgress />
      <Meta />
      <Nav />
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default Layout;
