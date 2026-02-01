import { Code2 } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full">
      {/* Glass layer */}
      <div className="backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-sky-500/90 p-2 rounded-xl shadow-md">
              <Code2 className="text-white w-6 h-6" />
            </div>
            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-tight"
            >
              Stacked
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <Link href="/articles" className="hover:text-white transition">
              Articles
            </Link>
            <Link href="#topics" className="hover:text-white transition">
              Topics
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
          </div>

          {/* CTA */}
          <Button className="bg-sky-400/90 text-black hover:bg-sky-500 hover:-translate-y-0.5 transition">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
