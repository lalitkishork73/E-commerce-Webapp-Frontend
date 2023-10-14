'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Cart = () => {
  const [counter, setCounter] = useState<number>(0);

  const inc = () => {
    setCounter(counter + 1);
  };  
  const dec = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  
  return (
    <div className="w-[100vw] h-[100vh] pt-28 ">
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="text-center text-2xl font-semibold py-2">
          Your Cart [ items 2 ]
        </h1>
        <div className="w-[100%] xl:w-[80%] h-full flex flex-col justify-around ">
          <table className="table-auto w-[100%] text-left text-xs sm:text-sm">
            <thead>
              <tr>
                <th className="">Items</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b ">
                <td>
                  <div className="flex items-center">
                    <div className="w-[70px] h-[70px]">
                      <Image
                        src={
                          'https://gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81_600x600.png?v=1671451100'
                        }
                        alt="logo product"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h6>Desktop Monitor QLED 500Tx</h6>
                    </div>
                  </div>
                </td>
                <td className="px-1">75000₹</td>
                <td>
                  <div className="flex w-[100%]">
                    <button
                      onClick={dec}
                      className="bg-white text-black px-2 rounded-l-md"
                    >
                      -
                    </button>
                    <h1 className="px-2 border">{counter}</h1>
                    <button
                      onClick={inc}
                      className="bg-white text-black px-2 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-1">75000₹</td>
              </tr>
              <tr className="border-b ">
                <td>
                  <div className="flex items-center">
                    <div className="w-[70px] h-[70px]">
                      <Image
                        src={
                          'https://gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81_600x600.png?v=1671451100'
                        }
                        alt="logo product"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h6>Desktop Monitor QLED 500Tx</h6>
                    </div>
                  </div>
                </td>
                <td className="px-1">75000₹</td>
                <td>
                  <div className="flex w-[100%]">
                    <button
                      onClick={dec}
                      className="bg-white text-black px-2 rounded-l-md"
                    >
                      -
                    </button>
                    <h1 className="px-2 border">{counter}</h1>
                    <button
                      onClick={inc}
                      className="bg-white text-black px-2 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-1">75000₹</td>
              </tr>
              <tr className="border-b ">
                <td>
                  <div className="flex items-center">
                    <div className="w-[70px] h-[70px]">
                      <Image
                        src={
                          'https://gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81_600x600.png?v=1671451100'
                        }
                        alt="logo product"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h6>Desktop Monitor QLED 500Tx</h6>
                    </div>
                  </div>
                </td>
                <td className="px-1">75000₹</td>
                <td>
                  <div className="flex w-[100%]">
                    <button
                      onClick={dec}
                      className="bg-white text-black px-2 rounded-l-md"
                    >
                      -
                    </button>
                    <h1 className="px-2 border">{counter}</h1>
                    <button
                      onClick={inc}
                      className="bg-white text-black px-2 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-1">75000₹</td>
              </tr>
              <tr className="border-b ">
                <td>
                  <div className="flex items-center">
                    <div className="w-[70px] h-[70px]">
                      <Image
                        src={
                          'https://gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81_600x600.png?v=1671451100'
                        }
                        alt="logo product"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h6>Desktop Monitor QLED 500Tx</h6>
                    </div>
                  </div>
                </td>
                <td className="px-1">75000₹</td>
                <td>
                  <div className="flex w-[100%]">
                    <button
                      onClick={dec}
                      className="bg-white text-black px-2 rounded-l-md"
                    >
                      -
                    </button>
                    <h1 className="px-2 border">{counter}</h1>
                    <button
                      onClick={inc}
                      className="bg-white text-black px-2 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-1">75000₹</td>
              </tr>
              <tr className="border-b ">
                <td>
                  <div className="flex items-center">
                    <div className="w-[70px] h-[70px]">
                      <Image
                        src={
                          'https://gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81_600x600.png?v=1671451100'
                        }
                        alt="logo product"
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h6>Desktop Monitor QLED 500Tx</h6>
                    </div>
                  </div>
                </td>
                <td className="px-1">75000₹</td>
                <td>
                  <div className="flex w-[100%]">
                    <button
                      onClick={dec}
                      className="bg-white text-black px-2 rounded-l-md"
                    >
                      -
                    </button>
                    <h1 className="px-2 border">{counter}</h1>
                    <button
                      onClick={inc}
                      className="bg-white text-black px-2 rounded-r-md"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-1">75000₹</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-row-reverse">
            <div className="border-l border-r bg-gradient-to-t from-white/40 h-[170px] w-[300px] text-sm font-semibold p-2  ">
              <ul>
                <li className="flex justify-between">
                  <p>Subtotal: </p> <p>100000.00</p>
                </li>
                <li className="flex justify-between">
                  <p>Sales Tax: </p> <p>101.00</p>
                </li>
                <li className="flex justify-between">
                  <p>Coupon Code: </p> <p>apply Coupon</p>
                </li>
                <li className="flex justify-between text-xl border-t border-b">
                  <p>Grand Total: </p> <p> 100101.00</p>
                </li>
                <li className="flex justify-center my-5">
                  <button className="bg-white text-black px-4 py-2">
                    Check Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
