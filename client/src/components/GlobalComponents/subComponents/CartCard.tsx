import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
const CartCard = () => {
  return (
    <>
      <div className="cart">
        <div className="relative mx-1 p-1 hover:scale-150">
          
          <div className="absolute inset-0 left-[20px] top-[-2px] text-xs bg-black/10  backdrop-blur-md text-[#fdfdfd] text-center h-5 w-auto font-medium">
            0
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
