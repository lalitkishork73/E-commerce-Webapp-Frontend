import React from 'react';
import ShopCard from './subcomponents/shopCard';

const FeaturedProducts = () => {
  return (
    <>
      {/* frame */}
      <section className=" h-auto w-full flex my-12 justify-center text-sm ">
        {/* frame body */}
        <div className="border-2 border-l-transparent border-r-transparent border-b-transparent w-[100%] overflow-hidden 2xl:w-[80%] h-full px-1">
          {/* Headings */}
          <div className="font-bold my-2">
            <h1>Features</h1>
          </div>
          {/* Outer card container */}
          <div className=" flex flex-wrap w-[100%] h-auto p-1 gap-10 mt-4">
            {/* inner card  */}
            <ShopCard
              image={
                'https://gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81_600x600.png?v=1671451100'
              }
            />
            <ShopCard
              image={
                'https://gaming-workdo.myshopify.com/cdn/shop/products/1_50862e3f-4e56-4d7c-9220-04cde28aca6d_600x600.png?v=1671448019'
              }
            />
            <ShopCard
              image={
                'https://gaming-workdo.myshopify.com/cdn/shop/products/1_4661881d-c8c7-4d3b-962e-038344e4ac81_600x600.png?v=1671451100'
              }
            />
            <ShopCard
              image={
                'https://gaming-workdo.myshopify.com/cdn/shop/products/1_50862e3f-4e56-4d7c-9220-04cde28aca6d_600x600.png?v=1671448019'
              }
            />
            <ShopCard
              image={
                'https://gaming-workdo.myshopify.com/cdn/shop/products/gx6-back-1000-removebg-preview_600x600.png?v=1671451565'
              }
            />

            <ShopCard
              image={
                'https://gaming-workdo.myshopify.com/cdn/shop/products/1_892117ef-00bc-43f7-8789-c8a6a7c180ee_600x600.png?v=1671449791'
              }
            />

            <ShopCard
              image={
                'https://demo-elessi.myshopify.com/cdn/shop/products/5559315300_2_2_1@2x.jpg?v=1538643905'
              }
            />
            <ShopCard
              image={
                'https://gaming-workdo.myshopify.com/cdn/shop/products/1_892117ef-00bc-43f7-8789-c8a6a7c180ee_600x600.png?v=1671449791'
              }
            />

            <ShopCard
              image={
                'https://demo-elessi.myshopify.com/cdn/shop/products/5559315300_2_2_1@2x.jpg?v=1538643905'
              }
            />
            <ShopCard
              image={
                'https://demo-elessi.myshopify.com/cdn/shop/products/5559315300_2_2_1@2x.jpg?v=1538643905'
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
