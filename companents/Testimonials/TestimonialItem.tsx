import React from "react";
import Image from "next/image";

interface TestimonialItemProbs {
  img: string;
  name: string;
  description: string;
  aosDelay: string;
}

const TestimonialItem: React.FC<TestimonialItemProbs> = ({
  aosDelay,
  description,
  img,
  name,
}) => {
  return (
    <div
      data-aos="fade-down"
      date-aos-once="true"
      data-aos-delay={aosDelay}
      className="rounded-2xl bg-gradient-to-b from-[#7a4637] to-[#240802] group relative shadow-xl md:max-w-96 w-full"
    >
      <div className="h-50 md:h-40 lg:h-50">
        <Image
          alt="görsel"
          src={img}
          width={200}
          className="mx-auto transform p-6 rounded-full group-hover:scale-110 transition duration-500"
          height={200}
        ></Image>
      </div>

      <div className="p-4 text-center">
        <div className="w-full">
          <h1 className="text-xl lg:text-2xl font-bold font-poppins text-[#f0f0f0] group-hover:text-white transition duration-500">
            {name}
          </h1>
          <p className="text-[#f0f0f0] group-hover:text-white transition duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
