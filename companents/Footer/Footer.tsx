import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Ana Sayfa",
    link: "/#",
  },
  {
    id: 2,
    name: "Hizmetler",
    link: "/#",
  },
  {
    id: 3,
    name: "Hakkımızda",
    link: "/#",
  },
  {
    id: 4,
    name: "İletişim",
    link: "/#",
  },
];

function Footer() {
  return (
    <div
      className="bg-[url('/images/f1.jpg')]  bg-center
    bg-no-repeat bg-cover h-full w-full"
    >
      <div className="bg-black/60 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a className="font-semibold text-2xl md:text-3xl font-pacifiko text-[#f0f0f0]">
              CoffePub
            </a>
            <p className="pt-4 text-[#f0f0f0]">
              Türkiye'nin en kaliteli kahve çekirdeklerini sunan, özel
              harmanlarımız ve uzman barista ekibimizle unutulmaz kahve
              deneyimleri yaşatıyoruz. Her fincan kahvede tutku ve kalite
              buluşuyor.
            </p>
            <a
              href=""
              className="inline-block border-2 text-white font-poppins font-semibold bg-[#911F27] py-2 px-4 mt-5 text-sm rounded-full hover:scale-105 hover:bg-[#7A1A22] transition-all duration-700"
            >
              YouTube Kanalımızı Ziyaret Edin
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-2 md:pl-10 sm:grid-cols-3">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold text-white">
                Önemli Bağlantılar
              </h1>
              <ul className="space-y-3 mt-4">
                {Menu.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block text-[#f0f0f0] hover:text-white hover:scale-110 transition-all duration-500"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold text-white">
                Hızlı Bağlantılar
              </h1>
              <ul className="space-y-3 mt-4">
                {Menu.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block text-[#f0f0f0] hover:text-white hover:scale-110 transition-all duration-500"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold text-white">Adres</h1>

              <div className="mt-4 space-y-4 text-[#f0f0f0]">
                <p>Turkey Samsun</p>
                <p>+90 555 444 33 22</p>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <a href="">
                  <div className="group w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-[#c4302b]">
                    <FaYoutube className="text-2xl text-[#c4302b] group-hover:text-white transition-all duration-300"></FaYoutube>
                  </div>
                </a>

                <a href="">
                  <div className="group w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-[#0e76a8]">
                    <FaLinkedin className="text-2xl text-[#0e76a8] group-hover:text-white transition-all duration-300"></FaLinkedin>
                  </div>
                </a>

                <a href="">
                  <div className="group w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-[#8134AF]">
                    <FaInstagram className="text-2xl text-[#8134AF] group-hover:text-white transition-all duration-300"></FaInstagram>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
