import React from 'react'

const Hero = () => {
  return (
    <div className="p-10 sm:p-10 m-5 rounded-3xl bg-sky-950 dark:bg-p dark:text-black text-white flex items-center justify-center overflow-hidden shadow-2xl">
    <div className="w-full max-w-6xl px-4 sm:px-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
       
        <div className="flex flex-col justify-center text-center md:text-left z-10">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold uppercase leading-tight tracking-tight">
          Delicious Food with <span className="text-yellow-500">Zesty Joy</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-400 dark:text-gray-400 text-white-200 text-balance">
          Delicious food color , arma and taste.
          What are you waiting for?
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
            <a href="#get-started" className="rounded-sm p-3 grow text-center bg-yellow-500 text-black font-bold uppercase text-sm tracking-widest hover:bg-yellow-600 transition">
              Get Started
            </a>
            <a href="#learn-more" className="rounded-sm p-3 grow border text-center border-yellow-500 text-yellow-500 font-bold uppercase text-sm tracking-widest hover:bg-yellow-500 hover:text-black transition">
              Learn More
            </a>
          </div>
        </div>
  
       
        <div className="relative flex items-center sm:m-10">
          <div
            className="absolute -top-10 md:-top-20 -left-10 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-yellow-500 rotate-12 rounded-lg border-yellow-700 border-b-4 border-r-8 max-sm:hidden">
          </div>
          <div className="relative z-10 bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 -right-1/2 -translate-x-1/2 grow text-center shadow-2xl -rotate-2 rounded-xl text-nowrap border-slate-950 border-b-4 border-r-8">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-gray-50 dark:text-gray-50">
            Taste of Happiness.
            </h2>
            <p className="mt-1 text-sm sm:text-base font-light text-gray-400 dark:text-gray-400">
            Wide option of choice.
            </p>
          </div>
          <div className="absolute -bottom-10 md:-bottom-20 -right-16 sm:w-32 sm:h-32 lg:w-64 lg:h-64 bg-yellow-500 -rotate-12 rounded-lg border-yellow-700 border-r-4 border-b-8 max-sm:hidden"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero