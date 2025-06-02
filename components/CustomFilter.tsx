"use client";
import { useState, Fragment } from "react";
import Image from "next/image";
import {
  Listbox,
  Transition,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import chevronUpDown from "@/public/chevron-up-down.svg";

function CustomFilter({options,setFilter }: CustomFilterProps) {
 
  const [selected, setSelected] = useState(options[0]);
  // const handleUpdateParams = (e:{type: string, value: string}) => {
  //   const newPathName = updateSearchParams(title,e.value.toLowerCase());
   
  //   router.push(newPathName);
  // };
  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={(e) => {setSelected(e);
         setFilter(e.value)}}>
        <div className="relative w-fit z-10">
          <ListboxButton className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border">
            <span className="block truncate">{selected.title}</span>
            <Image
              src={chevronUpDown}
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up down"
            />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none scroll-auto py-2 px-4  ${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate  ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;
