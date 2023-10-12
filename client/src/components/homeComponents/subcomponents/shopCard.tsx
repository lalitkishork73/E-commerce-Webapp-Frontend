import React from 'react';
import Image from 'next/image';

const ShopCard = (image: { image: string }) => {
  return (
    <>
      <div className="relative block border sm:border-0 sm:w-[250px] h-auto bg-gradient-to-b from-black to-white/20 hover:bg-gradient-to-t shadow-sm shadow-white rounded-tl-lg rounded-br-lg p-1 hover:scale-105 py-2">
        <h1 className="text-xl sm:w-[250px] font-semibold my-1 overflow-hidden overflow-ellipsis max-h-16">
          Monitor RTX-69 widka jima dsad
        </h1>
        <p className="text-xs text-gray-300">Type:Samsung</p>
        <Image
          src={image.image}
          alt="item-image"
          width={200}
          height={200}
          className="w-full h-[245px] object-cover"
        />
        <div className=" bg-white sm:bg-white/30 my-4 w-full h-[35px]"></div>
        <div className="flex w-auto justify-evenly items-center p-1">
          <p className="font-bold text-sm w-[100px] text-center">115000 ₹</p>
          <button className="bg-white text-black hover:text-white hover:bg-transparent  p-1 w-[100px] border rounded-bl-xl rounded-tr-xl">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
