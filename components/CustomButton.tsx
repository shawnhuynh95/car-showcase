"use client";

import Image from "next/image";
import { CustomButtonProps } from "@/types";
import { GoPerson } from "react-icons/go";

const Button = ({ isShow, isDisabled, title, btnType, containerStyles, textStyles, rightIcon, leftIcon, handleClick}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn gap-2 ${containerStyles}`}
      onClick={handleClick}
    >
      {isShow && (
        <div className="text-xl">
          <GoPerson />
        </div>
      )}
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right_icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
