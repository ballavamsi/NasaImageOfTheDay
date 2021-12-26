import navStyles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <div className={navStyles.nav}>
      <div className={navStyles.logo}>
        <h1>NASA IOD</h1>
        <sub>NASA IMAGE OF THE DAY</sub>
      </div>
    </div>
  );
};

export default Nav;
