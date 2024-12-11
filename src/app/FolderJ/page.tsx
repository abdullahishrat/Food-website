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
                Lobster Pasta with Corn and Tomatoes
                </h2>

                <p>
                  Gimmari is a delicious and popular Korean street food, and I’m
                  here to show you how to make it at home! This easy-to-follow
                  recipe will have you deep frying seaweed rolls to perfection
                  in no time. Serve with Korean spicy rice cakes (tteokbokki)
                  for a delicious and authentic meal!<br/>
                  Gimmari is a delicious and popular Korean street food, and I’m
                  here to show you how to make it at home! This easy-to-follow
                  recipe will haave you deep frying seaweed rolls to perfection
                  in no time. Serve with Korean spicy rice cakes (tteokbokki)
                  for a delicious and authentic meal!
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mb-9">
          <img
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://assets.bonappetit.com/photos/6631642a768e98647bcb9e34/1:1/w_3237,h_3237,c_limit/amatriciana_RECIPE_041624_0739_VOG_final.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
