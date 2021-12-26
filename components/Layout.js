import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Meta from "./Meta";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default Layout;
