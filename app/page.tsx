import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#080C18] relative overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
