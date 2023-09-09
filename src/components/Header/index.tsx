import logo from "../../logoKf.png";
import styles from "./styles.module.scss";

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <div>
          <img className={styles.logo} src={logo} alt="logoKF" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
