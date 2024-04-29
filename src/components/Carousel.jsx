import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import gsap from "gsap";
import { Autoplay, Pagination } from "swiper/modules";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const newActiveIndex = swiper.activeIndex;
    setActiveIndex(newActiveIndex);
    const prevIndex = swiper.previousIndex;
    const slides = swiper.slides;

    // Remove classes from all slides
    slides.forEach((slide) => {
      slide.classList.remove("active-slide", "prev-slide", "next-slide");
    });

    // Add classes to active, previous, and next slides
    slides[newActiveIndex].classList.add("active-slide");
    if (prevIndex !== undefined) {
      slides[prevIndex].classList.add("prev-slide");
    }
    const nextIndex = newActiveIndex + 1;
    if (nextIndex < slides.length) {
      slides[nextIndex].classList.add("next-slide");
    }

    // Animation with gsap
    gsap.fromTo(
      ".active-slide",
      { scale: 1.5 },
      { scale: 3.8, duration: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      ".prev-slide, .next-slide",
      { scale: 1.5 },
      { scale: 1.5, duration: 0.5, ease: "power2.out" }
    );
  };

  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      pagination={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      loop={true}
      onSlideChange={handleSlideChange}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}