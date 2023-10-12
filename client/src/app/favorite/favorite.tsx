'use client';
import ShopCard from '@/components/homeComponents/subcomponents/shopCard';
import React, { useState } from 'react';

const itemsPerPage = 5;

function Favorite() {
  const [currentPage, setCurrentPage] = useState(1);

  // Replace this array with your actual data
  const allItems = [...Array(10)].map((_, index) => ({
    id: index,
    image: '' // Add the actual image URL
  }));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(allItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <main className="w-full h-auto flex justify-center">
        <div className="pt-10 w-3/4 h-auto">
          <h1 className="text-2xl font-bold my-16 ">Favorites</h1>
          <div className="flex flex-wrap gap-10 my-12 ">
            {currentItems.map((item, index) => (
              <div key={index}>
                <ShopCard image={item.image} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={
                currentPage === Math.ceil(allItems.length / itemsPerPage)
              }
              className="text-white hover:text-gray-300 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Favorite;
