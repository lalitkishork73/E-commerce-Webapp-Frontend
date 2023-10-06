"use client"
import React, { useState } from 'react';

function ProductList() {
  const [show, setShow] = useState(false);
  const Toggle = () => {
    setShow(!show);
  };
  return (
    <>
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
    </>
  );
}

export default ProductList;
