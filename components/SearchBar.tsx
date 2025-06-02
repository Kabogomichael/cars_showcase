"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import magnifying from "@/public/magnifying-glass.svg";
// import model from "@/public/model-icon.png"
import models from "@/public/model-icon.png";
import { useRouter } from "next/navigation";
import SearchManufacture from "./SearchManufacture";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={magnifying}
      alt="magnifying"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

function SearchBar({setManufacture,setModel}) {
  const [searchManufacture, setSearchManufacture] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacture === " " && searchModel === " ") {
      return alert("Please fill the search bar");
    }
    setModel(searchModel);
    setManufacture(searchManufacture);
  };
  // const updatedSearchParams = (model: string, manufacture: string) => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //   if (model) {
  //     searchParams.set("model", model);
  //   } else {
  //     searchParams.delete("model");
  //   }
  //   if (manufacture) {
  //     searchParams.set("manufacture", manufacture);
  //   } else {
  //     searchParams.delete("manufacture");
  //   }
  //   const newPathName = `${
  //     window.location.pathname
  //   }? ${searchParams.toString()}`;
  //   router.push(newPathName);
  // };
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl"
    >
      <div className=" flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchManufacture
          selected={searchManufacture}
          setSelected={setSearchManufacture}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <Image
          src={models}
          alt="model"
          width={25}
          height={25}
          className=" absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="model"
          className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full  border-1 border-l-0  border-gray-200 cursor-pointer  text-sm outline-none"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
