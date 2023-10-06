'use client'
import React from 'react';
import Image from 'next/image';


function AddvertismentsGrid() {
  return (
    <>
      <main className="w-full h-[400px] flex justify-center ">
        <div className=" w-[100%] 2xl:w-[80%] h-[100%] bg-gradient-to-l from-[#399fff] via-[#2f4658] ">
          <div className="relative h-[400px] overflow-hidden">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://img.freepik.com/free-photo/3d-workstation-with-computer-peripheral-devices_23-2150714201.jpg?t=st=1696525541~exp=1696529141~hmac=107091c1179204ad73270bf4de2fb93ea2d98a6f8c2ea52b5c46e0f17f0152be&w=826"
                alt="Background"
                width={400}
                height={400}                
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h1 className="text-4xl font-bold mb-4 text-center">
                Gamming Cheetah
              </h1>
              <p className="text-lg text-center">
                Buy and Change Your Gamming Experience
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AddvertismentsGrid;
