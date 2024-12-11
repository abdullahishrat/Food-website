import React from "react";

const page = () => {
  return (
    <div>
        
      <div id="about" className="relative bg-white overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl hover:text-pink-600">
                Sotteok Sotteok (Rice Cake and Sausage Skewers)
                </h2>

                <p>
                  Try this Kal Bibimmyeon with Chadolbaegi Salad! I was inspired
                  by one of the popular menu items at 익선애뜻 (Ikseonaetteot),
                  an Instagram-popular Korean restaurant in Seoul. Even though I
                  haven’t had the chance to try this dish firsthand yet, I was
                  captivated by their presentation, and my imagination has
                  pieced together a sensory experience that brings it to life in
                  this recipe.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mb-9">
          <img
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://celebrationsathomeblog.com/wp-content/uploads/2018/10/apple-appetizers-with-cheese.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
