"use client"
import React from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom";


import Service from '@/app/Component/Service';
import Menu from '@/app/Component/Menu';
import Survey from '@/app/Component/Survey'
import Hero from './Component/Hero';
import Footer from '@/app/Footer/page'
import  Marketplace from '@/app/Marketplace/page'
import Team from '@/app/Team/page'
import Contect from '@/app/Contect/page';
import Breakfast from '@/app/Breakfast/page'
import DessertView from '@/app/DessertView/page'
import Navbar from './Component/Navbar';
const page = () => {
  const router = createBrowserRouter([
   
   {
      path: "/Contect",
    element:<Contect/> },
    
     {
      path: "/DessertView",
    element:<DessertView/> },
    {
      path: "/Breakfast",
    element:<Breakfast/> },
    {
      path: "/Marketplace",
    element:<Marketplace/> },


    {
      path: "/Team",
    element:<Team/> },
 

  ])
  return (
    <div>
    
 <Hero/>
   
 
   
     <Service/>

     <Menu/>
     <Survey/>
    
   
   <RouterProvider router={router}/>
   </div>
  )
}

export default page