'use client';
import React, { useState } from 'react';

import { BiSearch, BiMicrophone, BiHistory } from 'react-icons/bi';
import { MdOutlineClear } from 'react-icons/md';
function Searchbar() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <main className="search-main">
        <div className="searchbar">
          <div className="flex">
            <input
              type="text"
              onClick={() => {
                setVisible(true);
              }}
              placeholder="Search"
              className="w-[90%] text-white bg-transparent text-sm px-3"
            />
            <button
              className={visible ? 'visible' : 'hidden '}  
              onClick={toggleVisible}
            >
              <MdOutlineClear />
            </button>
            <button className="w-[5%] flex justify-center items-center">
              <BiMicrophone />
            </button>
            <button className="w-[5%] flex justify-center items-center">
              <BiSearch />
            </button>
          </div>
          <div className={visible ? 'visible-suggestion' : 'suggetion-list '}>
            <div className="w-full h-[1px] my-2 bg-white"></div>
            <ul className="search-suggestion">
              <li className="flex mx-3 my-1">
                <div>Dragon ball G</div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Searchbar;
