import React from 'react';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import cart from '@/assets/icons8-shopping-cart-64.png';
const CartCard = () => {
  return (
    <>
      <div className="cart">
        <div className="relative hover:scale-110 ">
          <Image
            src={cart}
            alt="Picture of the author"
            width={35}
            height={30}
            className=""
          />
          <div className="absolute inset-0 left-[1px] top-[8px] text-xs bg-transparent text-[#000000] text-center h-5 w-auto font-bold ">
            1
          </div>
        </div>
        <div className="cartBox">
          <div className="boxC ">
            <div className="block">
              <h1 className="text-center mb-2 font-bold ">Your Items</h1>
              <ul className="rounded-lg w-[inherit] h-[inherit] ">
                <li className="mt-1">
                  <div className="flex justify-center items-center  p-1 bg-white/10 backdrop-blur-md hover:bg-blue-900 rounded-md gap-2">
                    <div className="w-[70px] h-[70px]">
                      <img
                        src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX466_.jpg"
                        alt="product image"
                        className="w-[70px] h-[70px] "
                      />
                    </div>
                    <div className="w-full h-full block">
                      <h6 className="text-xs">
                        Apple iPhone 14 (128 GB) - Blue dlcoke sadkmk
                      </h6>
                      <h6 className="text-xs text-red-600 mt-2">Remove</h6>
                    </div>
                  </div>
                </li>
                <li className="mt-1">
                  <div className="flex justify-center items-center  p-1 bg-white/10 backdrop-blur-md hover:bg-blue-900 rounded-md gap-2">
                    <div className="w-[70px] h-[70px]">
                      <img
                        src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX466_.jpg"
                        alt="product image"
                        className="w-[70px] h-[70px] "
                      />
                    </div>
                    <div className="w-full h-full block">
                      <h6 className="text-xs">
                        Apple iPhone 14 (128 GB) - Blue
                      </h6>
                      <h6 className="text-xs text-red-600 mt-2">Remove</h6>
                    </div>
                  </div>
                </li>
                <li className="mt-1">
                  <div className="flex justify-center items-center  p-1 bg-white/10 backdrop-blur-md hover:bg-blue-900 rounded-md gap-2">
                    <div className="w-[70px] h-[70px]">
                      <img
                        src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX466_.jpg"
                        alt="product image"
                        className="w-[70px] h-[70px] "
                      />
                    </div>
                    <div className="w-full h-full block">
                      <h6 className="text-xs">
                        Apple iPhone 14 (128 GB) - Blue
                      </h6>
                      <h6 className="text-xs text-red-600 mt-2">Remove</h6>
                    </div>
                  </div>
                </li>
                <li className="mt-1">
                  <div className="flex justify-center items-center  p-1 bg-white/10 backdrop-blur-md hover:bg-blue-900 rounded-md gap-2">
                    <div className="w-[70px] h-[70px]">
                      <img
                        src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX466_.jpg"
                        alt="product image"
                        className="w-[70px] h-[70px] "
                      />
                    </div>
                    <div className="w-full h-full block">
                      <h6 className="text-xs">
                        Apple iPhone 14 (128 GB) - Blue
                      </h6>
                      <h6 className="text-xs text-red-600 mt-2">Remove</h6>
                    </div>
                  </div>
                </li>
                <li className="mt-1">
                  <div className="flex justify-center items-center  p-1 bg-white/10 backdrop-blur-md hover:bg-blue-900 rounded-md gap-2">
                    <div className="w-[70px] h-[70px]">
                      <img
                        src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX466_.jpg"
                        alt="product image"
                        className="w-[70px] h-[70px] "
                      />
                    </div>
                    <div className="w-full h-full block">
                      <h6 className="text-xs">
                        Apple iPhone 14 (128 GB) - Blue
                      </h6>
                      <h6 className="text-xs text-red-600 mt-2">Remove</h6>
                    </div>
                  </div>
                </li>
                <li className="mt-1">
                  <div className="flex justify-center items-center  p-1 bg-white/10 backdrop-blur-md hover:bg-blue-900 rounded-md gap-2">
                    <div className="w-[70px] h-[70px]">
                      <img
                        src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX466_.jpg"
                        alt="product image"
                        className="w-[70px] h-[70px] "
                      />
                    </div>
                    <div className="w-full h-full block">
                      <h6 className="text-xs">
                        Apple iPhone 14 (128 GB) - Blue
                      </h6>
                      <h6 className="text-xs text-red-600 mt-2">Remove</h6>
                    </div>
                  </div>
                </li>
                <li className="mt-1">
                  <div className="flex justify-center items-center  p-1 bg-white/10 backdrop-blur-md hover:bg-blue-900 rounded-md gap-2">
                    <div className="w-[70px] h-[70px]">
                      <img
                        src="https://m.media-amazon.com/images/I/61bK6PMOC3L._SX466_.jpg"
                        alt="product image"
                        className="w-[70px] h-[70px] "
                      />
                    </div>
                    <div className="w-full h-full block">
                      <h6 className="text-xs">
                        Apple iPhone 14 (128 GB) - Blue
                      </h6>
                      <h6 className="text-xs text-red-600 mt-2">Remove</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
