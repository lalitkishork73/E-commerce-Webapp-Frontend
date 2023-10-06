import React from 'react';
import Image from 'next/image';
import ShopCard from './subcomponents/shopCard';
function DealsDay() {
  return (
    <>
      {/* section frame */}
      <main className="relative h-auto w-full flex my-28 justify-center text-sm ">
        {/* section */}
        <div className="absolute w-36 top-16 h-48 bg-white filter blur-3xl "></div>
        <div className=" border-2 border-l-transparent border-r-transparent w-[100%] overflow-hidden 2xl:w-[80%] h-full px-1">
          <div className="flex text-md my-2 gap-10 ">
            <h1 className='font-bold'>Deals of the Day</h1>
            <h1>|</h1>
            <h1 className="text-red-500">20:14:00 Left</h1>
          </div>
          {/* Outer card container */}
          <div className=" flex w-[100%] h-auto p-1 gap-2 overflow-x-scroll mt-4">
            {/* inner card  */}
            <ShopCard image={"https://gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81_600x600.png?v=1671451100"}/>
            <ShopCard image={"https://gaming-workdo.myshopify.com/cdn/shop/products/1_50862e3f-4e56-4d7c-9220-04cde28aca6d_600x600.png?v=1671448019"}/>
            <ShopCard image={"https://gaming-workdo.myshopify.com/cdn/shop/products/gx6-back-1000-removebg-preview_600x600.png?v=1671451565"}/>
            
            <ShopCard image={"https://gaming-workdo.myshopify.com/cdn/shop/products/1_892117ef-00bc-43f7-8789-c8a6a7c180ee_600x600.png?v=1671449791"}/>
            
            <ShopCard image={"https://demo-elessi.myshopify.com/cdn/shop/products/5559315300_2_2_1@2x.jpg?v=1538643905"}/>
            
        
          </div>
        </div>
      </main>
    </>
  );
}

export default DealsDay;
