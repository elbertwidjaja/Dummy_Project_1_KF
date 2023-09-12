import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import { useDarkTheme } from "../../context/useTheme";

function Home() {
  const { darkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <div>
      <button onClick={toggleDarkTheme}>Toggle Dark Theme</button>
      <p>{darkTheme ? "Dark Theme Enabled" : "Light Theme Enabled"}</p>
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
