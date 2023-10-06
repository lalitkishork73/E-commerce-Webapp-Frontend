import {
  Hero,
  AddvertismentsGrid,
  DealsDay,
  FeaturedProducts,
  PromiseReturns
} from '@/components/homeComponents/index';
function Homee() {
  return (
    <>
      <main className="absolute h-full w-full flex flex-col  ">
        <Hero />
        <DealsDay />
        <FeaturedProducts />
        <AddvertismentsGrid />
        <PromiseReturns />
      </main>
    </>
  );
}

export default Homee;
