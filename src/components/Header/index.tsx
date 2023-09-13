import { Link } from "react-router-dom";
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/category">Category</a>
            </li>
            <li>
              <Link to="/shopping">Shopping</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
