import React from 'react';
import './main.css';
import Link from 'next/link';
import { Searchbar, Logo, CartCard } from './subComponents/Index';
import { MdFavorite } from 'react-icons/md';

const Navbar = () => {
  return (
    <>
      <header className="flex flex-col sm:flex-row justify-around items-center p-1 bg-black/10 backdrop-blur-1">
        {/* Logo */}
        <div className="w-[40%]">
          <Logo />
        </div>
        {/* SearchBar */}
        <div className="w-[100%]">
          <Searchbar />
        </div>
        <ul className="flex flex-col sm:flex-row font-bold justify-around w-[100%] items-center text-sm">
          <li className="flex">
            Favorite
            <span className="mt-1 ml-1">
              <MdFavorite />
            </span>
          </li>
          <li>
            <Link href="/cart">
              <CartCard />
            </Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
