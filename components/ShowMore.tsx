"use client"
import { ShowMoreProps } from "@/types"

import CustomButton from "./CustomButton"


function ShowMore({pageNumber,isNext,setLimit}:ShowMoreProps) {
   
    const handleNavigation=()=>{
        const newLimit = (pageNumber + 1) * 10;
      setLimit(newLimit);
    }
  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton  title="show more" btnType="button" containerStyles="bg-blue-500 rounded-full text-white" handleClick={handleNavigation}/>
        )}
    </div>
  )
}

export default ShowMore