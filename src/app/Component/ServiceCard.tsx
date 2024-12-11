
import React from "react";
import Image from "next/image";

interface PropsType {
  img: string;
  title: string;
  desc: string;
}
const ServiceCard: React.FC<PropsType> = ({ img, title, desc }) => {
  return (
    <div className="space-y-3 text-center mt-7">
      <Image className="mx-auto "
       src={img} 
       width={90}
        height={90}
        alt="card"
          />
          <div className=" uppercase">{title}
            <div className=" flex gap-2 w-fit mx-auto mt-5">
              <div className="bg-sky-950 w-[7px] h-[7px] rounded-full"/>
              <div className="bg-yellow-500 w-[7px] h-[7px] rounded-full"/>
              <div className="bg-sky-950 w-[7px] h-[7px] rounded-full"/>
            
            </div>
          </div>
          <p className="text[14px] text-gray-600">{desc}</p>
    </div>
  );
};

export default ServiceCard
