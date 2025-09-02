import React from "react";
import Image from "next/image";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  return (
    <div
      className="bg-[url('/images/h1.jpg')]  bg-center
    bg-no-repeat bg-cover h-full w-full"
    >
      <div className="min-h-[500px] flex justify-center items-center py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div data-aos="zoom-in">
              <Image
                src="/images/2.png"
                alt="görsel"
                width={420}
                height={420}
                className="spinone mx-auto"
              />
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h1
                className="text-3xl md:text4xl font-bold font-second2"
                data-aos="fade-up"
              >
                Premium Kahve
              </h1>
              <p className="text-sm text-gary tracking-wide" data-aos="fade-up">
                Özenle seçilmiş premium kahve çekirdeklerinden hazırlanan, her
                yudumda farklı aromalar keşfedeceğiniz özel harmanlarımız.
                Barista ekibimizin uzmanlığıyla, geleneksel ve modern kahve
                yapım tekniklerini birleştirerek size unutulmaz lezzetler
                sunuyoruz.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className=" space-y-5">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="flex items-center"
                  >
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-red-300"></GrSecure>
                    <span className="font-poppins p-3">Premium Kahve</span>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center"
                  >
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-green-300"></IoFastFood>
                    <span className="font-poppins p-3">Sıcak Kahve</span>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex items-center"
                  >
                    <GiFoodTruck className="text-2xl h-12 w-12 shadow-sm rounded-full p-3 bg-blue-300"></GiFoodTruck>
                    <span className="font-poppins p-3">Soğuk Kahve</span>
                  </div>
                </div>

                <div
                  data-aos="slide-left"
                  className="border-l-4 border-[#7a4637]/50 space-y-2 pl-4 pr-1"
                >
                  <h1 className="text-2xl font-semibold font-second2">
                    Çay Tutkunu
                  </h1>
                  <p className="text-sm text-gray-600">
                    Çay tutkunları için özel seçilmiş, dünya çapında tanınan çay
                    türlerini sunuyoruz. Her çay türünde, geleneksel demleme
                    yöntemleriyle hazırlanan, aroması ve lezzetiyle sizi mest
                    edecek özel karışımlarımızı keşfedin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
