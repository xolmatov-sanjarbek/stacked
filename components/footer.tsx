import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Code2,
  BookOpen,
  Users,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-cyan-400/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 noise opacity-[0.03]" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12">
        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {/* Column 1 - Product */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">
              Product
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm flex items-center gap-2 group"
                >
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm flex items-center gap-2 group"
                >
                  <Code2 className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Topics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm flex items-center gap-2 group"
                >
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Authors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm flex items-center gap-2 group"
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">
              Resources
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">
              Legal
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            {/* Logo & Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">
                  Stacked
                </span>
              </div>
              <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
                © {currentYear} Stacked. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="https://github.com/xolmatov-sanjarbek"
                className="p-2 sm:p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="https://x.com/xolmatov_sanjar"
                className="p-2 sm:p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <a
                href="#"
                className="p-2 sm:p-2.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
