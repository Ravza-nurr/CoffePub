"use client";
import Navbar from "@/companents/Navbar/Navbar";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/companents/Hero/Hero";
import Services from "@/companents/Services/Services";
import Banner from "@/companents/Banner/Banner";
import PlayStroe from "@/companents/PlayStore/PlayStore";
import Testimonials from "@/companents/Testimonials/Testimoials";
import Footer from "@/companents/Footer/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Banner/>
      <PlayStroe/>
      <Testimonials/>
      <Footer/>
      
    </>
  );
}
