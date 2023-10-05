'use client';
import React, { useState } from 'react';
import Image from 'next/image';

function Hero() {
  const [show, setShow] = useState(false);
  const Toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <main className="bg-black w-[100%] h-[900px] pt-[100px] flex justify-center text-sm ">
        <div className="w-[100%] 2xl:w-[80%]  flex justify-between h-full ">
          <button className="z-20 absolute md:hidden" onClick={Toggle}>
            Click
          </button>
          <div
            className={`${
              show ? 'block' : 'hidden'
            } md:block w-[100%] md:w-[300px] h-[60%] z-10 p-1 md:p-2 absolute md:relative  `}
          >
            <div className=" bg-gradient-to-b from-gray-100/10 backdrop-blur-sm w-[100%] h-[100%] md:h-[80%] rounded-lg p-1 overflow-scroll text-xs font-medium shadow-sm shadow-white ">
              <h1 className="text-center font-bold py-2 ">Products</h1>

              <ul className=" block">
                {/* product List api */}
                <li className="bg-white/20 p-1 rounded-sm my-1 hover:bg-black/40 ">
                  Electonics
                </li>

                <li className="bg-white/20 p-1 rounded-sm my-1 hover:bg-black/40">
                  Men's
                </li>
                <li className="bg-white/20 p-1 rounded-sm my-1 hover:bg-black/40">
                  Woman's
                </li>
                <li className="bg-white/20 p-1 rounded-sm my-1 hover:bg-black/40">
                  Kids
                </li>
                <li className="bg-white/20 p-1 rounded-sm my-1 hover:bg-black/40">
                  Accessories
                </li>
                <li className="bg-white/20 p-1 rounded-sm my-1 hover:bg-black/40">
                  Footware's
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[100%] md:w-[90%] h-[100%] grid grid-cols-1 sm:grid-cols-3 grid-rows-5 sm:grid-rows-3 gap-1 p-1 md:p-2">
            <div className=" bg-white/10 col-span-1 row-span-2 sm:col-span-3 sm:row-span-2 backdrop-blur-md rounded-xl ">
              <iframe
                title="YouTube Video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/NTM0JhTi028?controls=0&loop=1&playlist=NTM0JhTi028&autoplay=1&rel=0&showinfo=0&enablejsapi=0"
                className="rounded-xl relative w-full h-full shadow-2xl shadow-white backdrop-brightness-105"
              ></iframe>
            </div>
            <div className=" bg-white/10 backdrop-blur-md col-span-1 row-span-1 flex justify-center items-center p-1 rounded-xl ">
              <Image
                src="https://as2.ftcdn.net/v2/jpg/06/17/96/57/1000_F_617965700_tiQpDsG5098v5yLcPkbbzlT3PMJ7FOGi.jpg"
                width="350"
                height="150"
                alt="Poster"
                className="w-[100%] h-[100%] rounded-xl"
                quality={80}
              />
            </div>
            <div className=" bg-white/10 backdrop-blur-md col-span-1 row-span-1 flex justify-center items-center p-1 rounded-xl">
              <Image
                src="https://img.freepik.com/free-psd/modern-furniture-social-media-post-design_424377-93.jpg?w=826&t=st=1696334053~exp=1696334653~hmac=47bde3ed85ccb873f4396cb5870e69eb93f0e6a0c95b96ab342bb9310fb8dac5"
                width="350"
                height="150"
                alt="Poster"
                className="w-[100%] h-[100%] rounded-xl"
                quality={80}
              />
            </div>
            <div className=" bg-white/10 backdrop-blur-md col-span-1 row-span-1 flex justify-center items-cente p-1 rounded-xl">
              <Image
                src="https://img.freepik.com/free-psd/real-estate-house-social-media-post-square-banner-template_202595-455.jpg?w=826&t=st=1696340384~exp=1696340984~hmac=a336e03cb434431fc1b69cbaea5c5569da58ad8dc1619e0ae7556fd78ce9322f  "
                width="350"
                height="150"
                alt="Poster"
                className="w-[100%] h-[100%] rounded-xl"
                quality={80}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
