import React from 'react';
import Logo from './subComponents/logo';

const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer className=" block w-[100%] h-[100%] sm:h-[250px] border-t-[1px] bg-gradient-to-t from-white/20 text-sm">
        <div className="flex flex-col sm:flex-row  gap-2 w-full h-full p-1">
          <div className="flex justify-center items-center w-[100%] h-[100%]">
            <div className="h-1/2 p-1">
              <Logo />
              <p>The Best product anytime anywhere</p>
            </div>
          </div>
          <div className="flex justify-center items-center w-[100%] h-[100%">
            <div className="w-1/2">
              <h1 className="font-bold ">Products</h1>
              <ul>
                <li>Electronics</li>
                <li>Men's</li>
                <li>Woman's</li>
                <li>kid's</li>
                <li>Accessories</li>
                <li>Footware's</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-center">
            Copyright © {date.getFullYear()} Brand store. Powered by Brand store
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
