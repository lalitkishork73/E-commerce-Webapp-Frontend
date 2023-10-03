import Hero from '@/components/homeComponents/Hero';
import AddvertismentsGrid from '@/components/homeComponents/AddvertismentsGrid';
import DealsDay from '@/components/homeComponents/DealsDay';

function Home() {
  return (
    <>
      <main className="absolute inset-0 ">
        <Hero />
        <DealsDay />
      </main>
    </>
  );
}

export default Home;
