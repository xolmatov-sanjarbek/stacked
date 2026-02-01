import { Sparkles, ArrowRight, TerminalIcon, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden z-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-4s" }}
        />
        <div className="absolute inset-0 noise opacity-[0.06]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen text-center text-white max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20">
        <Badge className="py-2 px-4 sm:px-5 text-xs sm:text-sm font-semibold text-muted-foreground bg-blue-950 mx-auto mb-4 sm:mb-5 border border-cyan-400 flex items-center gap-2 w-fit">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
          New Articles every week!
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight px-2">
          Build Better{" "}
          <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text inline-block">
            Software
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-5 md:mt-6 text-muted-foreground max-w-xl mx-auto px-4">
          Deep dives into web development, modern frameworks, and the
          technologies shaping the future of the web.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mx-auto w-full sm:w-auto max-w-md sm:max-w-none">
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-xl px-6 py-3 sm:px-8 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-semibold text-black bg-linear-to-r from-sky-400 to-cyan-400 shadow-lg shadow-cyan-500/20 transition-all duration-300 ease-out hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Start Reading
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>

          <Button
            size="lg"
            className="group relative rounded-xl px-6 py-3 sm:px-8 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-medium text-cyan-300 border border-cyan-500/40 bg-white/5 backdrop-blur-md transition-all duration-300 ease-out hover:bg-cyan-500/10 hover:border-cyan-400 hover:-translate-y-0.5 active:translate-y-0 hover:text-cyan-200 w-full sm:w-auto flex justify-center items-center gap-2"
          >
            <TerminalIcon className="h-4 w-4 sm:h-5 sm:w-5 opacity-80" />
            View Topics
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 text-center px-4">
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-linear-to-r from-cyan-300 to-sky-300 text-transparent bg-clip-text">
              150+
            </p>
            <span className="text-xs sm:text-sm text-muted-foreground mt-1">
              Articles
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-linear-to-r from-cyan-300 to-sky-300 text-transparent bg-clip-text">
              15K
            </p>
            <span className="text-xs sm:text-sm text-muted-foreground mt-1">
              Readers
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-linear-to-r from-cyan-300 to-sky-300 text-transparent bg-clip-text">
              12
            </p>
            <span className="text-xs sm:text-sm text-muted-foreground mt-1">
              Topics
            </span>
          </div>
        </div>

        <div className="flex mx-auto mt-8 sm:mt-12 animate-bounce border border-cyan-400 rounded-full p-2 sm:p-3">
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
