import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
// import { useDarkTheme } from "../../context/useTheme";

function Home() {
  // const { darkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <div className={styles.home_container}>
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
