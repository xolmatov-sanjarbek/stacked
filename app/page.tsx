import AboutSection from "@/components/about-section";
import RecentPosts from "@/components/featured-post";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#080C18] relative overflow-hidden">
      <Navbar />
      <Hero />
      <RecentPosts />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Home;
