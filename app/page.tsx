import AboutSection from "@/components/about-section";
import RecentPosts from "@/components/featured-post";
import Hero from "@/components/hero";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#080C18] relative overflow-hidden">
      <Hero />
      <RecentPosts />
      <AboutSection />
    </main>
  );
};

export default Home;
