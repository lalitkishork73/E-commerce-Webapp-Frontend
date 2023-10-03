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
      <header className=" flex flex-col sm:flex-row justify-around items-center p-1 bg-gradient-to-b from-black/40 backdrop-blur-10 relative z-10 w-full">
        {/* Logo */}
        <div className="w-[40%]">
          <Logo />
        </div>
        <div className="absolute inset-0 left-[92%] top-4 h-4 w-4 sm:hidden">
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
              ? 'block absolute top-16 my-3 p-2 mx-2 font-medium '
              : 'hidden'
          } text-center sm:flex w-full sm:flex-row sm:justify-around sm:relative sm:top-0 sm:my-2 sm:mx-0 sm:w-[100%] sm:items-center text-sm`}
        >
          <li className="sm:flex hover:text-emerald-400">
            <Link href="/favorite">
              Favorite
              <span className="mt-1 ml-1 hidden sm:flex-row ">
                <MdFavorite />
              </span>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <div className="visible sm:hidden">Cart</div>
              <div className="hidden sm:block">
                <CartCard />
              </div>
            </Link>
          </li>
          <li className="h-10 flex justify-center items-center sm:h-auto">
            <Link
              href="/login"
              className="mx-1 px-4 py-1  bg-gray-900 rounded-lg"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-white text-black mx-1 rounded-lg px-2 py-1"
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
