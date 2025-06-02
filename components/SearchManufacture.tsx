"use client";
import { SearchManufactureProps } from "@/types";
import {
  Combobox,
  Transition,
  ComboboxButton,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import Image from "next/image";
import carLogo from "@/public/car-logo.svg";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";

function SearchManufacture({
  selected,
  setSelected,
}: SearchManufactureProps) {
  const [query, setQuery] = useState("");
  const filteredManufactures =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, " ")
            .includes(query.toLowerCase().replace(/\s+/g, " "))
        );
  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full ">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src={carLogo}
              alt="car logo "
              width={20}
              height={20}
              className="ml-4"
            />
          </ComboboxButton>
          <ComboboxInput
            className="w-full h-[48px] border-1 bg-gray-50 border-r-0 border-gray-200 pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            placeholder="volkswagen"
            displayValue={(manufacture: string) => manufacture}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100 "
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions>
              {filteredManufactures.length === 0 && query !== "" ? (
                <ComboboxOption
                  value={query}
                  className="cursor-default select-none py-2 pl-10 pr-4"
                >
                  {" "}
                  create "{query}"{" "}
                </ComboboxOption>
              ) : (
                filteredManufactures.map((item) => (
                  <ComboboxOption
                    key={item}
                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 mt-1 ${active ? 'bg-blue-500 text-white ' :'text-gray-900'} `}
                    value={item}
                  >
                    {({selected,active}) =>(
                        <>
                        <span className={`block truncate ${selected ? 'font-medium':"font-normal"}`}>{item}</span>
                        {selected ?(<span className={`absolute inset-y-0 left-0 flex items-center pl-3
                        ${active ?'text-white ':'text-teal-600'}`}>

                        </span>) :null}
                        </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchManufacture;
