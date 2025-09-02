import React from "react";
import ServiceItem from "./ServiceItem";

const ServiceData = [
  {
    id: 1,
    img: "/images/1.png",
    name: "Expresso",
    description:
      "Yoğun aromalı, koyu kavrulmuş çekirdeklerden hazırlanan klasik espresso. Her yudumda güçlü kahve lezzetini hissedeceksiniz.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: "/images/3.png",
    name: "Cappicuno",
    description:
      "Espresso, buharla ısıtılmış süt ve süt köpüğünün mükemmel uyumu. Kremamsı dokusu ve dengeli lezzetiyle favori kahve türlerinden.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: "/images/4.png",
    name: "Americano",
    description:
      "Espresso ve sıcak su ile hazırlanan, hafif ve içimi kolay kahve. Uzun süre keyif alabileceğiniz, klasik lezzet.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: "/images/5.png",
    name: "Latte",
    description:
      "Zengin espresso, buharla ısıtılmış süt ve ince süt köpüğü katmanları. Yumuşak ve kremsi dokusuyla göz alıcı sunumu.",
    aosDelay: "700",
  },
];

function Services() {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-second2 font-bold">
            Sizin İçin En İyi Kahve
          </h1>
          <div className="flex justify-center m-4">
            <div className="mb-6 h-1 w-full max-w-xl bg-gradient-to-r opacity-50 from-[#7a4637] to-[#421917]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 place-items-center">
          {ServiceData.map((service) => (
            <ServiceItem
              aosDelay={service.aosDelay}
              description={service.description}
              img={service.img}
              name={service.name}
              key={service.id}
            ></ServiceItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
