import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

function Home() {
  return (
    <div className={styles.home_container}>
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
