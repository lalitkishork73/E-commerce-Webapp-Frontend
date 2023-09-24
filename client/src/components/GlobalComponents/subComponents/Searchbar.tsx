import React from 'react'

function Searchbar() {
  return (
    <>
    <div className="bg-white-900 w-[100%] h-[25px] rounded-xl  flex items-center overflow-hidden border-2 border-[#333536]">
              <input
                type="text"
                placeholder="Search"
                className="w-[100%] rounded-l-xl text-black text-[14px] h-auto px-3 outline-none "
              />

              <button className="bg-[var(--gradient-color4)]  h-[25px] w-[80px] px-3 flex justify-center items-center border-[#012a35]">
                <svg
                  width="45"
                  height="25"
                  viewBox="0 -10 40 70"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="17.5"
                    stroke="white"
                    stroke-width="5"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="45"
                    y2="45"
                    stroke="white"
                    stroke-width="5"
                  />
                </svg>
              </button>
            </div>
    </>
  )
}

export default Searchbar