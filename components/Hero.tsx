"use client";

import React from "react";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36">
        <h1 className="hero__title">
          Find, book, rent a car—quick and super easy!
        </h1>
        <h4 className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </h4>
        <CustomButton
          title="Explore Cars"
          btnType="button"
          containerStyles="text-white/90 hover:text-white bg-primary-blue rounded-full mt-10"
          handleClick={handleScroll}
        />
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
