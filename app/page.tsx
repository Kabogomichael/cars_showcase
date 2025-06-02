"use client"
import { Hero } from "@/components";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import CarCard from "@/components/CarCard";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";
import { useEffect, useState } from "react";

export default  function Home() {
 const [allCars,setAllCars] = useState([])
 const [loading,setLoading] = useState(true)

 //search states
 const [manufacturer,setManufacturer] = useState("")
 const [model,setModel] = useState("");
 
 //filter state
const [fuel, setFuel] = useState(" ");
 const [year, setYear] = useState(2025);

 //pagination state
const [limit, setLimit] = useState(10)

const getCars = async ()=>{
  try {
    const result = await fetchCars({
      manufacturer:manufacturer || " ",
      year:year || 2025,
      fuel:fuel || " ",
      limit:limit || 10,
      model:model || " ",
    });
    setAllCars(result);
  } catch (error) {
    console.log(error);
    
    
  }finally{
setLoading(false)
  }
}
useEffect(()=>{
  console.log(fuel,year,limit,manufacturer,model);
  
  getCars()

},[fuel,year,limit,manufacturer,model])

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar  setManufacturer={setManufacturer} setModel={setModel}/>

          <div className="flex justify-start flex-wrap items-center gap-2">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction}  setFilter={setYear} />
          </div>
        </div> 
        {allCars.length > 0 ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCars?.map((car) => (
                <div key={car}>
                  <CarCard car={car} />
                </div>
              ))}
            </div>
            {loading &&(
              <div className="mt-16  w-full flex-center">
                <p>Loading...</p>
              </div>
            )}
            <ShowMore pageNumber = {limit / 10}  isNext={limit > allCars.length} setLimit={setLimit}/>
          </section>
        ) : (
          <div>
            <h2 className="text-black text-xl font-bold">Oops no result</h2>
            <p className="mt-16 flex justify-center items-center flex-col gap-2">
              {allCars?.message}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
