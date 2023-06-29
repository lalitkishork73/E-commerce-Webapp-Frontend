"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold font mb-5 text-xl">{count}</h1>
        
        <div className="flex ">
          <button
            className="bg-red-500 m-1 p-1 rounded-lg"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrease
          </button>
          <button
            className="bg-green-500 m-1 p-1 rounded-lg"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increase
          </button>
        </div>
      </div>
    </>
  );
}

/* 

*/
