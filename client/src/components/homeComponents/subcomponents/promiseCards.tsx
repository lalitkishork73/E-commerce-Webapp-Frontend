'use client';
import React from 'react';

import { Icon } from '@iconify/react';
function PromiseCards(items: any) {
  return (
    <>
      <main className="flex flex-col justify-center items-center w-[100%] lg:w-[250px] h-[250px] shadow-sm shadow-white bg-gradient-to-t from-black/40 to-white/20 rounded-bl-xl rounded-tr-xl p-1 hover:bg-gradient-to-b from white/20 ">
        <Icon icon={items.items.icon} color="white" width="50" height="50" />
        <h1 className="font-bold my-3 text-center">{items.items.title}</h1>
        <p className="text-xs text-center">{items.items.details}</p>
      </main>
    </>
  );
}

export default PromiseCards;
