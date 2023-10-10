'use client';
import React, { FC, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import Form from './form';

function Login() {
  // A function to handle form input changes
  const [form, setForm] = useState<any>({
    username: '',
    password: ''
  });

  // A function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(form);

  return (
    <>
      <main className="flex justify-center items-center h-screen w-[100%] text-white">
        <div className="flex flex-col items-center w-[300px] h-[500px] bg-gradient-to-b from-[#292929]/70 backdrop-blur-md rounded-lg border-b">
          <form action="" className="">
            <div>
              <h1 className="text-center h-10 font-bold my-1 ">Login</h1>
            </div>

            <div className="flex justify-center items-center my-2">
              <button className="border w-28 hover:bg-white hover:text-black">
                Login
              </button>
            </div>
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
