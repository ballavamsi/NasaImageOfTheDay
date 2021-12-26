import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={navStyles.nav}>
      <div className={navStyles.logo}>
        <h1>NASA IOD</h1>
        <sub>NASA IMAGE OF THE DAY</sub>
      </div>
      <div className={navStyles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
