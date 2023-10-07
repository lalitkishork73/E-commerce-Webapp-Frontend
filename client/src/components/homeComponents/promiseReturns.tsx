import React from 'react';
import PromiseCards from './subcomponents/promiseCards';

function PromiseReturns() {
  const data = [
    {
      id: 1,
      icon: 'gis:earth-o',
      title: 'Worldwide Shipping',
      details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      icon: 'fa-solid:search-dollar',
      title: 'Best Quality',
      details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 3,
      icon: 'ic:outline-discount',
      title: 'Best Offers',
      details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 4,
      icon: 'mdi:encryption-secure-outline',
      title: 'Secure Payments',
      details: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
  ];

  return (
    <>
      <main className="flex flex-col sm:flex-row justify-center items-center w-[100%] h-[100%] my-[40px] ">
        <div className="flex flex-col lg:flex-row items-center lg:justify-around h-[100%] w-[100%] xl:w-[80%] gap-2 px-2">
          {data.map((item) => (
            <div key={item.id}>
              <PromiseCards key={item.id} items={item} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default PromiseReturns;
