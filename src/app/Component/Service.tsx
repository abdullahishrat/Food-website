import React from "react";
import Dash from "@/app/Home/Dash";
import ServiceCard from "./ServiceCard";
const sevicesData = [
  {
    img: "/card.jpg",
    title: "Professonal Kitchan",
    desc: "Lorem ipsum dolor sit  exercitationem officia aliquam facere adipisci atque.",
  },
  {
    img: "/delivery.png",
    title: "Delivery",
    desc: "Lorem ipsum dolor sit  exercitationem officia aliquam facere adipisci atque.",
  },
  {
    img: "/wifi__1.png",
    title: "Free wifi",
    desc: "Lorem ipsum dolor sit  exercitationem officia aliquam facere adipisci atque.",
  },
  {
    img: "/Drink.png  ",
    title: "Cofee list",
    desc: "Lorem ipsum dolor sit  exercitationem officia aliquam facere adipisci atque.",
  },
];

export const Service = () => {
  return (
    <div className="container pt-28">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold ">
          Choose Best <span className="text-yellow-500"> Service</span>
        </h2>
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          voluptatibus quasi omnis, <br />
          modi magnam distinctio rem aut veniam
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>
      <div className=" ml-10 grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {sevicesData.map((item, index) => (
          <ServiceCard 
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};
export default Service;
