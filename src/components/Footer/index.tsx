import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_info_container}>
        <div className={styles.footer_info}>
          <p>Kelas Fitness</p>
          <a href="#">Tentang KF</a>
          <a href="#">Blog</a>
          <a href="#">Kelas Fitness Parent</a>
          <a href="#">Karir</a>
          <a href="#">Hubungi Kami</a>
        </div>
        <div className={styles.footer_info}>
          <p>Akun Saya</p>
          <a href="#">Masuk</a>
          <a href="#">Daftar</a>
          <a href="#">Syarat dan Ketentuan</a>
        </div>
      </div>
      <div className={styles.company_footer}>
        <span>Toko Kelas Fitness</span>
        <span>Stronger Than Yesterday</span>
      </div>
    </div>
  );
}

export default Footer;
