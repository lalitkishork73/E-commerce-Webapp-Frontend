'use client';
import React, { FC, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';

function Login() {
  const [form, setForm] = useState<any>({
    username: '',
    password: ''
  });

  // A function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const inputF = (title: string, type: string, icon: React.ReactNode) => (
    <>
      <div>
        <div className="relative p-2 my-1">
          <input
            type={type}
            id={title}
            name={title.toLowerCase()} // Added 'name' attribute to input fields
            value={form[title.toLowerCase()]} // Bind input value to form state
            onChange={handleInputChange} // Handle input changes
            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer rounded-bl-xl rounded-tr-xl"
            placeholder="" // Use the title as the placeholder
          />
          <label
            htmlFor={title}
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 
                translate-x-2  scale-75 top-1 z-10 origin-[0] bg-white dark:bg-[#181717] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1 flex justify-center items-center gap-3"
          >
            {icon}
            {title}
          </label>
        </div>
        <p className="text-xs text-red-500 my-2 mx-3 "></p>
      </div>
    </>
  );
  return (
    <>
      <main className="flex justify-center items-center h-screen w-[100%] text-white">
        <div className="flex flex-col items-center w-[300px] h-[500px] bg-gradient-to-b from-[#292929]/70 backdrop-blur-md rounded-lg border-b">
          <h1>{form.username}</h1>
          <h1>{form.password}</h1>

          <form action="" className="">
            <div>
              <h1 className="text-center h-10 font-bold my-1 ">Login</h1>
            </div>

            {inputF('Username', 'text', <FaUser />)}
            {inputF('Password', 'password', <IoMdLock />)}

            <div className="flex justify-center items-center my-2">
              <button className="border w-28 hover:bg-white hover:text-black">
                Login
              </button>
            </div>
            <p className='text-xs text-red-500 mx-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam accusamus non ut magni placeat amet repellendus.</p>
          </form>
          <div className="border-b my-6 w-[90%]">
            <h1 className="text-center">or</h1>
          </div>
          <div className="flex justify-center items-center bg-gray-900 w-full h-16 text-sm gap-2 hover:bg-blue-700">
            <FcGoogle />
            <h1>Login with Google</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
