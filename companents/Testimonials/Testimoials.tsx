import React from "react";
import TestimonialItem from "./TestimonialItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const TestimonialsData = [
  {
    id: 1,
    img: "/images/person/pf1.png",
    name: "Peper Pods",
    description:
      "Coffee Pub'da içtiğim en lezzetli espresso! Barista ekibi çok profesyonel ve kahve kalitesi gerçekten üst seviye. Kesinlikle tavsiye ederim.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/images/person/pf2.png",
    name: "Angelie Jul",
    description:
      "Latte'mi çok beğendim, süt köpüğü mükemmel! Ortam da çok sıcak ve samimi. Arkadaşlarımla buluşmak için ideal bir mekan.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "/images/person/pf3.png",
    name: "Bruce Wayne",
    description:
      "Premium kahve çekirdekleri ve uzman barista ekibi ile her ziyaretimde farklı lezzetler keşfediyorum. Coffee Pub gerçekten kahve tutkunları için cennet!",
    aosDelay: "300",
  },
  {
    id: 4,
    img: "/images/person/pf4.png",
    name: "Latte",
    description:
      "Cappuccino'mu çok beğendim! Kahve ve süt dengesi mükemmel. Servis hızlı ve personel çok ilgili. Kesinlikle tekrar geleceğim.",
    aosDelay: "400",
  },
  {
    id: 5,
    img: "/images/person/pf5.png",
    name: "Angel Wick",
    description:
      "Soğuk kahve seçenekleri harika! Yaz günlerinde serinlemek için mükemmel. Kahve kalitesi her zaman tutarlı ve lezzetli.",
    aosDelay: "500",
  },
  {
    id: 6,
    img: "/images/person/pf6.png",
    name: "Bruce Banner",
    description:
      "Coffee Pub'ın özel harmanları gerçekten eşsiz! Her kahve türünde farklı aromalar keşfediyorum. Barista ekibinin bilgisi ve tutkusu takdire şayan.",
    aosDelay: "600",
  },
  {
    id: 7,
    img: "/images/person/pf7.png",
    name: "Arya Stark",
    description:
      "Amerikano'mu çok beğendim, hafif ve içimi kolay. Ortam sakin ve çalışmak için ideal. Kahve kalitesi her zaman üst seviyede.",
    aosDelay: "700",
  },
];

function Testimonials() {
  return (
    <div className="py-10">
      <div className="container pl-3">
        <div className="text-center mb-20 pr-3">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-second2 font-bold">
            Müşteri Yorumları
          </h1>
          <div className="flex justify-center m-4">
            <div className="mb-6 h-1 w-full max-w-xl bg-gradient-to-r opacity-50 from-[#7a4637] to-[#421917]"></div>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {TestimonialsData.map((testimon) => (
            <SwiperSlide key={testimon.id}>
              <TestimonialItem
                aosDelay={testimon.aosDelay}
                description={testimon.description}
                img={testimon.img}
                name={testimon.name}
                key={testimon.id}
              ></TestimonialItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
