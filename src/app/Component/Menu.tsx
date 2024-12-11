import React from 'react'
import Dash from '@/app/Home/Dash'
import Image from 'next/image'
import MenuCard from './MenuCard'
const MenuData = [
   
    {
        img: "/cake.jpg",
        title: "Delicious Cake",
        desc: "2x tuna sahimi , 1x noodles",
        price: 29.50,
      },
      {
        img: "/pizza.jpg",
        title: "Delicious Pizza",
        desc: "2x tuna sahimi , 1x noodles",
        price: 29.50,
      },
      {
        img: "/burger.jpg",
        title: "Delicious Burger",
        desc: "2x tuna sahimi , 1x noodles",
        price: 29.50,
      },
      {
        img: "/noodel.jpg",
        title: "Bulgogi",
        desc: "Bulgogi is a gui made of thin,",
        price: 29.50,
      },
      {
        img: "/deesh.jpg",
        title: "Japchae",
        desc: "Japchae is a savory and slightly sweet dish",
        price: 29.50,
      },
      {
        img: "/dish1.jpg",
        title: "Kimchi",
        desc: "Kimchi is a Korean side disH",
        price: 29.50,
      },
      {
        img: "/dish2.jpg",
        title: "Mapo tofu",
        desc: "Mapo Tofu. For vegans and vegetarians",
        price: 29.50,
      },
      {
        img: "/chowmein.jpg",
        title: "Chow mein",
        desc: " Chow Mein is a reliable dish ",
        price: 29.50,
      },
]

const Menu = () => {
  return (
    <div className="container pt-32  mb-10">
        <div className='space-y-4 w-fit mx-auto text-center'>
    <h2 className="md:text-6xl text-4xl font-bold ">Our
<span className="text-yellow-500">Menu</span></h2>
 <p className=" text-center pt-10 text-gray-700">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Incidunt
      recusandae dolore accusamus vitae nesciunt nulla
      
     
    </p>
    <div className='justify-items-center w-fit mx-auto'>
    <Dash/></div>
    </div>
    <ul className='mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto'>
        <li className='bg-sky-950 text-white p-1'>Appetizers</li>
        <li>Breakfast</li>
        <li>Salads</li>
        <li>Meat & Fish</li>
        <li>Soup</li>
        <li>Desert</li>
        <li>Drinks</li>
    </ul>
    <div className='grid lg:grid-cols-[35%,1fr] gap-10 pt-10'>
        <div className='w-fit mx-auto'>
            <Image className='w-[100] max-w-[400px] h-auto'
            src='/salad.png'
            width={900}
            height={900}
            alt='menu'/>
        </div>
        <div className='grid w-fit max-auto sm:grid-cols-2 gap-4'>
        {MenuData.map((item, index) => (
          <MenuCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price} 
          />
        ))}
        </div>
    </div>
    </div>

  )
}

export default Menu