import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        className="w-[580px] xl:w-[1100px] h-auto absolute right-0 top-[-60px] -z-10"
        src="/bg.png"
        width={1000}
        height={1000}
        alt="home bg"
      />
      <div className="container pl-20 h-[calc(100vh-10px)] grid items-center">
        <div className="space-y-7  w-fit py-20">
          <p className="uppercase font-medium text-pink-600">
            Wide option of choice
          </p>
          <h2 className="text-4xl sm:text-6xl  font-bold">
            Delicious <span className="text-pink-900">Food</span>
          </h2>
          <p className="text-gray-600 text-[14px] sm:text-[16px]">
            Delicious food color , arma and taste.
            <br />
            What are you waiting for?
          </p>
          <button className="bg-pink-800 text-white px-4 py-1 text-[14px] sm:text-[16px] rounded-3xl">
            View More
          </button>

        
                
          
        
        </div>
      </div>
    </div>
    
  );
};

export default page;
