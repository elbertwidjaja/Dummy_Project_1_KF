import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import { useDarkTheme } from "../../context/useTheme";
import styles from "./styles.module.scss";

function Home() {
  const { darkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <div className={darkTheme ? styles.dark_theme : styles.light_theme}>
      <button onClick={toggleDarkTheme}>Toggle Dark Theme</button>
      <p>{darkTheme ? "Dark Theme Enabled" : "Light Theme Enabled"}</p>
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
