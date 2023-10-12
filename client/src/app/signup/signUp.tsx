'use client';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { Formik, Field, Form, ErrorMessage,FormikHelpers } from 'formik';
import * as Yup from 'yup';

import ImgUpload from './imgUpload';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required')
  // Add more fields and validation as needed
});

interface LoginForm {
  username: string;
  password: string;
}

const SignUp = () => {
  const LoginSchema = Yup.object().shape({
    username: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Required')
      .min(8, 'Too short')
      .max(15, 'Too long')
  });
  return (
    <>
      <div className="border w-[300px] h-auto p-2 bg-gradient-to-t from-white/20 rounded-md  flex flex-col justify-center items-center ">
      <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(
              values: LoginForm,
              { setSubmitting }: FormikHelpers<LoginForm>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form>
              <div>
                <div className="relative p-1 my-1">
                  <Field
                    type="email"
                    id="username"
                    name="username" // Added 'name' attribute to input fields
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer rounded-bl-xl rounded-tr-xl"
                    placeholder="" // Use the title as the placeholder
                  />
                  <label
                    htmlFor="username"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 
                translate-x-2  scale-75 top-1 z-10 origin-[0] bg-white dark:bg-[#181717] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1 flex justify-center items-center gap-3"
                  >
                    <FaUser />
                    Username
                  </label>
                </div>
                <div className="text-xs text-red-500 mx-4">
                  <ErrorMessage name="username" />
                </div>
              </div>
              <div>
                <div className="relative p-1 my-1">
                  <Field
                    type="password"
                    id="password"
                    name="password" // Added 'name' attribute to input fields
                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer rounded-bl-xl rounded-tr-xl"
                    placeholder="" // Use the title as the placeholder
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 
                translate-x-2  scale-75 top-1 z-10 origin-[0] bg-white dark:bg-[#181717] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1 flex justify-center items-center gap-3"
                  >
                    <IoMdLock />
                    Password
                  </label>
                </div>
                <div className="text-xs text-red-500 mx-4">
                  <ErrorMessage name="password" />
                </div>
              </div>
              <div className="flex justify-center items-center my-5">
                <button className="border w-28 hover:bg-white hover:text-black">
                  Login
                </button>
              </div>
            </Form>
          </Formik>
      </div>
    </>
  );
};

export default SignUp;
