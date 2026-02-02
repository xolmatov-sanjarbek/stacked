import Link from "next/link";
import { Code2, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Glass layer */}
      <div className="backdrop-blur-xl bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-sky-500/90 p-2 rounded-xl">
                  <Code2 className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-white">Stacked</span>
              </div>

              <p className="text-white/60 max-w-sm">
                Deep dives into modern web development, tools, and ideas shaping
                the future of software.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <p className="text-white font-semibold">Explore</p>
                <ul className="space-y-2 text-white/60">
                  <li>
                    <Link
                      href="/articles"
                      className="hover:text-white transition"
                    >
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/topics"
                      className="hover:text-white transition"
                    >
                      Topics
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white transition">
                      About
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-white font-semibold">Resources</p>
                <ul className="space-y-2 text-white/60">
                  <li>
                    <Link href="/rss" className="hover:text-white transition">
                      RSS Feed
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/newsletter"
                      className="hover:text-white transition"
                    >
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="hover:text-white transition"
                    >
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <p className="text-white font-semibold">Follow</p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/xolmatov-sanjarbek"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                >
                  <Github className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="https://x.com/xolmatov_sanjar"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
            <p>© {new Date().getFullYear()} Stacked. All rights reserved.</p>
            <p>Built with Next.js, Prisma, Supabase & good taste.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
