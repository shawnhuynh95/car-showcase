"use client";

import Image from "next/image";
import React, { Fragment, useState } from "react";
import { CustomFilterProps } from "@/types";
import { Listbox, Transition } from "@headlessui/react";

import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

// const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {
//   const [selected, setSelected] = useState(options[0]);

//   const router = useRouter();

//   const handleUpdateParams = (e: { title: string; value: string }) => {
//     const newPathName = updateSearchParams(title, e.value.toLowerCase());

//     router.push(newPathName);
//   };

export default function CustomFilter<T>({options, setFilter}: CustomFilterProps<T>) {

  const [menu, setMenu] = useState(options[0]);

  return (
    <div className="w-fit">
      <Listbox
        value={menu}
        onChange={(e) => {
          setMenu(e);
          setFilter(e.value as unknown as T);
        }}
      >
        <div className="w-fit relative z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{menu.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron up down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transtion ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none px-2 py-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};