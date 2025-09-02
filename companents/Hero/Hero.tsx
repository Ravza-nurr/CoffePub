import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import HeroItem from "./HeroItem";

function Hero() {
  const heroItems = [
    {
      label1: "Şehrin en iyi",
      label2: "kahvesi",
      label3: "kafein ve kod ile programlama.",
      src: "/images/1.png",
      text1: "Merhaba Programcı",
      text2: "Merhaba Kahve",
    },
    {
      label1: "Şehrin en iyi demleme",
      label2: "programlama ",
      label3: "kafein ve kod ile.",
      src: "/images/3.png",
      text1: "Merhaba Programcı",
      text2: "Merhaba Kahve",
    },
    {
      label1: "En kaliteli demleme",
      label2: "kafein ile ",
      label3: "kod yakıtı.",
      src: "/images/4.png",
      text1: "Merhaba Programcı",
      text2: "Merhaba Kahve",
    },
    {
      label1: "En cesur demleme",
      label2: "kafein ile ",
      label3: "kod yakıtı.",
      src: "/images/5.png",
      text1: "Merhaba Programcı",
      text2: "Merhaba Kahve",
    },
  ];
  return (
    <div className="min-h-[550px] md:min-h-[550px] bg-[#240802] justify-center text-[#f0f0f0] flex items-center">
      <div className="container">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {heroItems.map((item, index) => (
            <SwiperSlide key={index}>
              <HeroItem
                label1={item.label1}
                label2={item.label2}
                label3={item.label3}
                src={item.src}
                text1={item.text1}
                text2={item.text2}
              ></HeroItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
