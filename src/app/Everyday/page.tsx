import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <div>
      <Head>
        <style>{`
          .video-docker video {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .video-docker::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 1;
          }
        `}</style>
      </Head>

      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            autoPlay
            muted
            loop
          >
            <source
         
              src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="video-content space-y-2 z-10">
          <h2 className=" text-black font-bold text-6xl">Explore Everyday Cooking</h2>
          <h3 className="font-bold text-3xl">With Bake It Happen</h3>
        </div>
      </section> <div className=' justify-items-center py-20'>  <h2 className='font-bold text-black text-6xl justify-items-center'>Our Team</h2>
</div>
      <div className="container mx-auto mb-10 py-30">
    <div className="grid lge:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 mdsm:grid-cols-2 sm:grid-cols-1 lg:gap-6 lge:gap-6 md:gap-16 mdsm:gap-16 sm:gap-16 lg:px-2 lge:px-2 md:px-2 mdsm:px-2 sm:px-2">
  
          <div className="group relative">
        
            <div className="-top-12 left-[34%] absolute">
                <img 
           src="https://www.shutterstock.com/image-photo/one-happy-chef-thumbs-sign-260nw-28471723.jpg"
            className="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]"
             alt="Michael Thompson" /> </div>
            <div className="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4">
              <h2 className=" group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold">
                David Nguyen
              </h2>
              <p className="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-center text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual
                mockups
              </p>
            </div>
          </div>
  
          <div className="group relative">
           
            <div className="-top-12 left-[34%] absolute">
              <img 
           src="https://www.shutterstock.com/image-photo/portrait-smiling-happy-chef-showing-260nw-411167815.jpg"
            className="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]"
             alt="Michael Thompson" />
            </div>
            <div className="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4">
              <h2 className=" group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold">
                Michael Thompson
              </h2>
              <p className="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-center text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual
                mockups
              </p>
            </div>
          </div>
  
          <div className="group relative">
            <div className="-top-12 left-[34%] absolute">
              <img   src="https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D" className="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]" alt="Emily Parker"/>
            </div>
            <div className="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4">
              <h2 className=" group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold">
                Emily Parker
              </h2>
              <p className="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-center text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual
                mockups
              </p>
            </div>
          </div>
  
          <div className="group relative">
            <div className="-top-12 left-[34%] absolute">
              <img   src="https://media.istockphoto.com/id/1394055791/photo/portrait-of-confident-black-female-chef-at-restaurant-kitchen-looking-at-camera.jpg?s=612x612&w=0&k=20&c=vmDoulcE99YonSh-W70ZulSn6OV0MXSP_mO1PpYN5kM="
              alt=" James Anderson" className="rounded-full transition delay-200 group-hover:border-[#bde9ff] border-4 border-[#001f2e] object-cover h-[100px] w-[100px]"/>
            </div>
            <div className="group-hover:bg-[#001f2e] transition delay-200 bg-[#bde9ff] pt-16 px-4 pb-4">
              <h2 className=" group-hover:text-white transition delay-200 text-[#001f2e] text-center text-2xl font-semibold">
                James Anderson
              </h2>
              <p className="group-hover:text-white transition delay-200 pb-10 text-[#001f2e] pt-4 leading-6 text-center text-base">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual
                mockups
              </p>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Page;
