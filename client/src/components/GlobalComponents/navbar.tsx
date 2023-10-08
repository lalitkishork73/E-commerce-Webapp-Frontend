'use client';
import React, { useState } from 'react';
import './main.css';
import Link from 'next/link';
import { Searchbar, Logo, CartCard } from './subComponents/Index';
import { MdFavorite } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const switchs = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <header className=" flex flex-col md:flex-row justify-around items-center p-1  md:bg-gradient-to-b from-black/40  backdrop-blur-md relative z-10 w-full ">
        {/* Logo */}
        <div className="w-[40%]">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="absolute inset-0 left-[92%] top-4 h-4 w-4 bg-black/40 backdrop:blur-md md:hidden">
          {toggle ? (
            <>
              <AiOutlineClose
                onClick={(e: any) => {
                  e.preventDefault();
                  switchs();
                }}
              />
            </>
          ) : (
            <>
              <BiMenu
                onClick={(e: any) => {
                  e.preventDefault();
                  switchs();
                }}
              />
            </>
          )}
        </div>
        {/* SearchBar */}
        <div className="w-[100%]">
          <Searchbar />
        </div>
        {/* Menu   */}
        <ul
          className={`${
            toggle
              ? 'block absolute top-16 my-3 p-2 mx-2 font-medium bg-black/40 backdrop:blur-md  md:bg-transparent'
              : 'hidden'
          } text-center md:flex w-full md:flex-row md:justify-around md:relative md:top-0 md:my-2 md:mx-0 md:w-[100%] md:items-center text-sm  `}
        >
          <li className="md:flex ">
            <Link href="/favorite">
              Favorite
              <span className="mt-1 ml-1 hidden md:flex-row ">
                <MdFavorite />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <div className="visible md:hidden">Cart</div>
              <div className="hidden md:block">
                <CartCard />
              </div>
            </Link>
          </li>
          <li className="h-10 flex justify-center items-center md:h-auto">
            <Link
              href="/login"
              className="mx-1 px-4 py-1 bg-gray-900 hover:bg-white hover:text-black border rounded-bl-xl rounded-tr-xl"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-white text-black mx-1 hover:bg-black hover:text-white border rounded-bl-xl rounded-tr-xl px-2 py-1"
            >
              SignUp
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
