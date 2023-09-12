import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import styles from "./styles.module.scss";
import "swiper/css/bundle";

const Carousel: React.FC = () => {
  return (
    <div className={styles.swiper_container}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className={styles.swiper_slide}>
          <img
            className={styles.images}
            src="https://img.freepik.com/free-photo/silhouette-hands-forming-heart-shape-with-sunrise_1150-6752.jpg?w=1380&t=st=1694402645~exp=1694403245~hmac=f9f14b78c89c41d893c3fecc5708ac08ca5286356364c3cbcc5e49c4bf6dcfe2"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img
            className={styles.images}
            src="https://img.freepik.com/free-photo/cartoon-character-with-handbag-sunglasses_71767-99.jpg?w=826&t=st=1694402751~exp=1694403351~hmac=6eca2e6791b799f11642e51d613b698f0c0c90bf6bf9172b8a2ed2943919ddac"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img
            className={styles.images}
            src="https://img.freepik.com/premium-photo/textuer_932052-966.jpg?size=626&ext=jpg&ga=GA1.2.183333493.1694402636&semt=sph"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>
          <img
            className={styles.images}
            src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?w=740&t=st=1694402845~exp=1694403445~hmac=e772a439e5aad9d12fef09aa19d8343fca0998bfe8e4b4e8b4fed4ee067137c5"
            alt=""
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Carousel;
