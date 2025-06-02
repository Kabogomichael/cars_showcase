"use client"
import {useState} from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'
import { calculateCarRent } from '@/utils'
import hero from "@/public/hero.png"
import steering from "@/public/steering-wheel.svg"
import tire from "@/public/tire.svg"
import gas from "@/public/gas.svg"
import right from "@/public/right-arrow.svg"
import CarDetails from './CarDetails'
interface carCardProps{
    car:CarProps
}

function CarCard({car}:carCardProps) {
    const [isOpen,setIsOpen]=useState(false)
    const {displacement,make,model,transmission,year} = car;
    const carRent = calculateCarRent(displacement,year)
  return (
    <div className='flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group'>
        <div className='w-full flex justify-between items-start gap-2'>
            <h2 className='text-[22px] leading-[26px] font-bold capitalize'>
                {make} {model}
            </h2>

        </div>
        <p className='flex mt-6 text-[32px] font-extrabold'>
            <span className='self-start text-[14px] font-semibold'>
              $
            </span>
              {carRent}
            <span className='self-end text-[14px] font-medium'>
                /day
            </span>
        </p>
        <div className='relative w-full flex justify-center h-40 my-3 object-contain'>
            <Image src={hero} alt='car model'   width={200} height={100}  priority className='object-contain'/>

        </div>
        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-gray-500'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src={steering} width={20} height={20} alt='steering wheel' />
                    <p className='text-[14px]'>
                        {transmission === 'a'? 'Automatic':'Manual'}
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src={tire} width={20} height={20} alt='steering wheel' />
                    <p className='text-[14px]'>
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src={gas} width={20} height={20} alt='steering wheel' className='object-contain' />
                    <p className='text-[14px]'>
                         MPG
                    </p>
                </div>
            </div>
            <div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
                <CustomButton  title='view more' containerStyles='w-full py-[16px] rounded-full bg-blue-500 text-white text-[14px] leading-[17px] font-bold'
                rightIcon ={right}
                handleClick={()=>setIsOpen(true)}
                />

            </div>

        </div>
        <CarDetails isOpen={isOpen}  closeModal ={()=> setIsOpen(false)} car={car}/>
    </div>
  )
}

export default CarCard