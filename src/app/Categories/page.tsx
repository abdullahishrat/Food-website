"use client"
import Image from "next/image";



import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


const page = () => {

  return ( 
<div className="mb-10 sm:mb-3 justify-items-center ">
  <h2 className="font-bold text-6xl py-10">Categories</h2>
  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
      <div className="container  px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full"> 
       
         <div className="justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        
                <Image
                  src="/pasta.jpg"
                  className=" rounded-full  h-20 w-20  "
                  height={100}
                  width={100}
                  alt="img"
                />
                <a href="/CategorieCard">

                <h2 className="title-font font-medium text-3xl text-gray-900  hover:text-sky-700">
                  Pasta
                </h2>
                <p className="leading-relaxed text-pink-600">95 Recipes</p>
             </a>
             </div>
             </div>


             <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Image
                src="/cooking.jpg"
                className=" rounded-full h-20 w-20 justify-items-center "
                height={100}
                width={100}
                alt="img"
              />
                   <a href="/Cooking">
              <h2 className="title-font font-medium text-2xl text-gray-900 0  hover:text-sky-700">
                Everyday Cooking
              </h2>
              <p className="leading-relaxed text-pink-600">95 Recipes</p></a>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className=" justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Image
                src="/img1.jpg"
                className=" rounded-full h-20 w-20 justify-items-center"
                height={100}
                width={100}
                alt="img"
              />
                 <a href="/Cooking1">
              <h2 className="title-font font-medium text-3xl text-gray-900  hover:text-sky-700">
                Biryani
              </h2>
              <p className="leading-relaxed text-pink-600">195 Recipes</p></a>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className=" justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Image
                src="/kabab.jpg"
                className=" rounded-full h-20 w-20 justify-items-center "
                height={100}
                width={100}
                alt="img"
              />
                 <a href="/Kabab">
              <h2 className="title-font font-medium text-3xl text-gray-900  hover:text-sky-700">
                Kababs
              </h2>
              <p className="leading-relaxed text-pink-600">65 Recipes</p></a>
            </div>
          </div>

     
       </div>
       </div>
          </SwiperSlide>
      <SwiperSlide>  
     
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full"> 
       
         <div className="justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        
                <Image
                  src="/img9.jpg"
                  className="  rounded-full  h-20 w-20 "
                  height={100}
                  width={100}
                  alt="img"
                />
                <a href="/Ramzan">

                <h2 className="title-font font-medium text-3xl text-gray-900  hover:text-sky-700">
                Ramzan
                </h2>
                <p className="leading-relaxed text-pink-600">195 Recipes</p>
             </a>
             </div>
             </div>


             <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Image
                src="/noodel.jpg"
                className=" rounded-full h-10 w-10 justify-items-center "
                height={100}
                width={100}
                alt="img"
              />
                 <a href="/Cooking2">
              <h2 className="title-font font-medium text-2xl text-gray-900 hover:text-sky-700">
              Appetizers
              </h2>
              <p className="leading-relaxed text-pink-600">75 Recipes</p></a>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className=" justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Image
                src="/img4.jpg"
                className=" rounded-full h-20 w-20 justify-items-center "
                height={100}
                width={100}
                alt="img"
              />
                 <a href="/Cooking3">
              <h2 className="title-font font-medium text-3xl text-gray-900 hover:text-sky-700">
              Breakfast
              </h2>
              <p className="leading-relaxed text-pink-600">35 Recipes</p></a>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className=" justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Image
                src="/Desserts.jpg"
                className=" rounded-full h-20 w-20 justify-items-center"
                height={100}
                width={100}
                alt="img"
              />
                 <a href="/Desserts">
              <h2 className="title-font font-medium text-3xl text-gray-900 hover:text-sky-700">
              Desserts
              </h2>
              <p className="leading-relaxed text-pink-600">45 Recipes</p></a>
            </div>
          </div>

     
       </div>
       </div>
            </SwiperSlide>
      <SwiperSlide> 
         <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full"> 
       
         <div className="justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        
                <Image
                  src="/pasta.jpg"
                  className="  rounded-full  h-20 w-20"
                  height={100}
                  width={100}
                  alt="img"
                />
                <a href="/CategorieCard">

                <h2 className="title-font font-medium text-3xl text-gray-900  hover:text-sky-700">
                  Pasta
                </h2>
                <p className="leading-relaxed text-pink-600">95 Recipes</p>
             </a>
             </div>
             </div>


             <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Image
                src="/cooking.jpg"
                className=" rounded-full h-20 w-20 justify-items-center "
                height={100}
                width={100}
                alt="img"
              />
                 <a href="/Cooking">
              <h2 className="title-font font-medium text-2xl text-gray-900 hover:text-sky-700">
                Everyday Cooking
              </h2>
              <p className="leading-relaxed text-pink-600">95 Recipes</p></a>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className=" justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Image
                src="/img1.jpg"
                className=" rounded-full h-20 w-20 justify-items-center "
                height={100}
                width={100}
                alt="img"
              />
                 <a href="/Cooking1">
              <h2 className="title-font font-medium text-3xl text-gray-900 hover:text-sky-700">
                Biryani
              </h2>
              <p className="leading-relaxed text-pink-600">195 Recipes</p></a>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className=" justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Image
                src="/kabab.jpg"
                className=" rounded-full h-20 w-20 justify-items-center"
                height={100}
                width={100}
                alt="img"
              />
                 <a href="/Kabab">
              <h2 className="title-font font-medium text-3xl text-gray-900 hover:text-sky-700">
                Kababs
              </h2>
              <p className="leading-relaxed text-pink-600">65 Recipes</p></a>
            </div>
          </div>

     
       </div>
       </div></SwiperSlide>
      <SwiperSlide>
          
      <div className="container px-5  py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full"> 
       
         <div className="justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
        
                <Image
                  src="/img9.jpg"
                  className="  rounded-full  h-20 w-20 "
                  height={100}
                  width={100}
                  alt="img"
                />
                <a href="/Ramzan">

                <h2 className="title-font font-medium text-3xl text-gray-900  hover:text-sky-700">
                Ramzan
                </h2>
                <p className="leading-relaxed text-pink-600">195 Recipes</p>
             </a>
             </div>
             </div>


             <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Image
                src="/deesh.jpg"
                className=" rounded-full h-20 w-20 justify-items-center"
                height={100}
                width={100}
                alt="img"
              />
                 <a href="/Cooking2">
              <h2 className="title-font  font-medium text-2xl text-gray-900 hover:text-sky-700">
              Appetizers 
              </h2>
              <p className="leading-relaxed text-pink-600">75 Recipes</p></a>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className=" justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Image
                src="/IMG7.jpg"
                className=" rounded-full h-20 w-20 justify-items-center"
                height={100}
                width={100}
                alt="img"
              />
                 <a href="/Cooking3">
              <h2 className="title-font font-medium text-3xl text-gray-900 hover:text-sky-700">
              Breakfast
              </h2>
              <p className="leading-relaxed text-pink-600">35 Recipes</p></a>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className=" justify-items-center border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <Image
                src="/Desserts.jpg"
                className=" rounded-full h-20 w-20 justify-items-center"
                height={100}
                width={100}
                alt="img"
              />
                 <a href="/Desserts">
              <h2 className="title-font font-medium text-3xl text-gray-900 hover:text-sky-700">
              Desserts
              </h2>
              <p className="leading-relaxed text-pink-600">45 Recipes</p></a>
            </div>
          </div>
     
       </div>
       </div>
      </SwiperSlide>
    
   </Swiper>
  
 
 
    
       
 
 
</div>
   
    
  );
};

export default page;
