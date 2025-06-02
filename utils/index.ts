import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters:FilterProps){
    const {manufacturer,year,limit,model,fuel} = filters;
    const headers = {
        'X-Api-Key':'bHhTFaFIyyOGqjh+rPSnXg==oJnvMLVe2R7Dddzk',
        // 'X-RapidAPI-Host':' cars-by-api-ninjas.p.rapidapi.com'
    }
    // `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`
    const response = await fetch("https://api.api-ninjas.com/v1/cars?model=q5",{
        headers:headers,
    });
    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car:CarProps,angle?:string)=>{


}
export const updateSearchParams = (type:string,value:string)=>{
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);
    const newPathName = `${
      window.location.pathname
    }? ${searchParams.toString()}`;
    
    return newPathName;

}