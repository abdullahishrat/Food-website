import React from "react";

const Survey = () => {
  return (
    <section className="py-8 z-10 font-serif bg-slate-50">
    <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
      <div className="w-full md:w-1/2 py-8">
        <h1 className="text-slate-800 text-7xl font-semibold leading-none tracking-tighter">
        About Our <br/><span className=" text-yellow-500">Food. <br/></span>
        </h1>  <p className="md:ml-10 sm:ml-1 text-gray-700  pt-1 mr-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            voluptas quis, ratione tempora sit commodi doloremque deleniti
            aliquam beatae veritatis sint minus laboriosam quaerat repellendus?
          </p>
          <p className= "md:ml-10 sm:ml-10 text-gray-700 pt-16 mr-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            voluptas quis, ratione tempora sit commodi doloremque deleniti
            aliquam beatae veritatis sint minus laboriosam quaerat repellendus?
          </p>
      </div>
      <div className="w-full md:w-1/2 py-8">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/021/939/720/small_2x/fast-food-set-hamburger-cheeseburger-cola-french-fries-burger-and-hamburger-ai-photo.jpg" className="g-image"/>
      </div>
    </div>
  </section>
  
  );
};

export default Survey;
