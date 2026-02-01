import { Code2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="relative border-b border-white/60 py-6 px-8 flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2 items-center justify-center">
          <div className="bg-sky-500 p-2 rounded-xl">
            <Code2 className="text-white w-6 h-6" />
          </div>
          <h2 className="text-3xl text-white font-bold">Stacked</h2>
        </div>
        <div className="flex flex-row gap-8 font-semibold md:text-md text-muted-foreground">
          <Link
            href="/articles"
            className="hover:text-white hover:text-shadow-cyan-700"
          >
            Articles
          </Link>
          <Link
            href="#topics"
            className="hover:text-white hover:text-shadow-cyan-700"
          >
            Topics
          </Link>
          <Link
            href="/about"
            className="hover:text-white hover:text-shadow-cyan-700"
          >
            About
          </Link>
        </div>
        <div>
          <Button className="bg-sky-400 hover:bg-sky-500 hover:scale-110 ease-in-out hover:font-bold font-semibold text-black transition duration-400 hover:-translate-y-1">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
