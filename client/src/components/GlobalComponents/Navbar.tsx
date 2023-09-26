import React from 'react';
import './main.css';
import { Searchbar, Logo, CartCard } from './subComponents/Index';

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
        <ul className="flex justify-around w-[100%]">
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
