import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";


const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-width flex-between sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign in"
          btnType="button"
          isShow
          containerStyles="text-primary-blue max-xl:text-white/90 rounded-full bg-white max-xl:bg-primary-blue min-w-[130px]  max-xl:hover:text-white hover:text-blue-700"
        />       
      </nav>
    </header>
  );
};

export default Navbar;
