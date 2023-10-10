'use client';
import React, { useState } from 'react';

const Form = (props: any) => {
 
  return (
    <>
      <div>
        <div className="relative p-2 my-1">
          <input
            type={props.type}
            id={props.title}
            name={props.title.toLowerCase()} // Added 'name' attribute to input fields
            value={props.form[props.title.toLowerCase()]} // Bind input value to form state
            onChange={props.handleInputChange} // Handle input changes
            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer rounded-bl-xl rounded-tr-xl"
            placeholder="" // Use the title as the placeholder
          />
          <label
            htmlFor={props.title}
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 
                translate-x-2  scale-75 top-1 z-10 origin-[0] bg-white dark:bg-[#181717] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1 flex justify-center items-center gap-3"
          >
            {props.icon}
            {props.title}
          </label>
        </div>
        <p className="text-xs text-red-500 my-2 mx-3 "></p>
      </div>
    </>
  );
};

export default Form;
