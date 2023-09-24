import React from 'react';
import './main.css';
import { Searchbar, Logo, CartCard } from './subComponents/Index';

const Navbar = () => {
  return (
    <>
      <header className="">
        <ul className="flex flex-col sm:flex-row justify-around items-center p-1">
          {/* Logo */}
          <li>
            <Logo />
          </li>
          {/* SearchBar */}
          <li>
            <Searchbar />
          </li>
          <li>Favorite</li>
          <li>
            <CartCard />
          </li>
          <li>Login</li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
