"use client";

import React from "react";
import { ShowMoreProps } from "@/types";
import { CustomButton } from ".";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ isNext, pageNumber }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 12;

    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName);
  };

  return (
    <div className="flex-center w-full mt-10 gap-5">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue text-white/90 rounded-full hover:text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
