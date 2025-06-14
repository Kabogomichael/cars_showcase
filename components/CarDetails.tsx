"use client";
import { CarProps } from "@/types";
import React from "react";
import Image from "next/image";
import hero from "@/public/hero.png";
import { Fragment } from "react";
import close from "@/public/close.svg";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
interface carDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

function CarDetails({ isOpen, closeModal, car }: carDetailsProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-100 "
            enterFrom="opacity-100"
            enterTo="opacity-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-25  text-white" />
          </TransitionChild>
          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-200 "
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-white  rounded-full"
                  >
                    <Image
                      src={close}
                      alt="close svg"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3 ">
                    <div className="relative w-full h-40 bg-blue-500 bg-cover bg-center rounded-lg">
                      <Image
                        src={hero}
                        alt="car model"
                        width={200}
                        height={100}
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-blue-100 rounded-lg">
                        <Image
                          src={hero}
                          alt="car model"
                          width={200}
                          height={100}
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-blue-100 rounded-lg">
                        <Image
                          src={hero}
                          alt="car model"
                          width={200}
                          height={100}
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-blue-100 rounded-lg">
                        <Image
                          src={hero}
                          alt="car model"
                          width={200}
                          height={100}
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">{car.make} {car.model}</h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                        {Object.entries(car).map(([key,value])=>(
                            <div className="flex justify-between gap-5 w-full text-right " key={key}>
                                <h4 className="text-gray-500 capitalize">{key.split("_").join(" ")}</h4>
                                <p className="text-black-100 font-semibold">{value}</p>

                            </div>
                        ))}


                    </div>

                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CarDetails;
