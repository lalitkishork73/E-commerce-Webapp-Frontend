import React from 'react';
import Image from 'next/image';
function DealsDay() {
  return (
    <>
      <main className="h-[100vh] w-full bg-black flex justify-center ">
        <div className="border-2 w-[80%] h-full my-28">
          <div className="flex  text-xl gap-10">
            <h1>Deals of the Day</h1>
            <h1>|</h1>
            <h1 className="text-red-500">20:14:00 Left</h1>
          </div>
          <div className="flex w-[100%] h-[500px] p-1">
            <div className="w-[250px] h-[400px] bg-blue-700/30 border rounded-tl-lg rounded-br-lg">
              <Image src="https://gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81_600x600.png?v=1671451100" alt='item-image' width={200} height={300}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default DealsDay;
