import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <header className='mt-3'>
        <ul className="flex justify-around items-center">
          <li>
            <div className="card">
              <div className="">
                <h1 className="text-3xl font-semibold text-center">ONE</h1>
                <h1 className="tracking-widest text-center font-semibold">
                  PRIZE
                </h1>
              </div>
            </div>
          </li>
          <li>Searchbar</li>
          <li>favorite</li>
          <li>cart</li>
          <li>user</li>
        </ul>
      </header>
    </>
  );  
};

export default Navbar;
