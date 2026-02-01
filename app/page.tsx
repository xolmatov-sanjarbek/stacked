import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Sparkles, TerminalIcon } from "lucide-react";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#080C18] relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-4s" }}
      />
      <div className="absolute inset-0 noise opacity-[0.06] pointer-events-none" />
      <div className="relative z-10 flex flex-col justify-center min-h-screen text-center text-white max-w-3xl mx-auto">
        <Badge className="py-2 px-5 text-semibold text-sm text-muted-foreground bg-blue-950 mx-auto mb-5 border border-cyan-400">
          <Sparkles className="w-6 h-6" />
          New Articles every week!
        </Badge>
        <h1 className="text-8xl font-bold">
          Build Better{" "}
          <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text inline-block">
            Software
          </span>
        </h1>
        <p className="text-2xl mt-5">
          Deep dives into web development, modern frameworks, and the
          technologies shaping the future of the web.
        </p>

        <div className="mt-10 flex flex-row gap-4 mx-auto">
          {/* Primary CTA */}
          <Button
            size="lg"
            className="group relative overflow-hidden
                        rounded-xl px-8 py-6 text-xl font-semibold
                      text-black
                        bg-linear-to-r from-sky-400 to-cyan-400
                        shadow-lg shadow-cyan-500/20
                        transition-all duration-300 ease-out
                        hover:shadow-cyan-400/40
                        hover:-translate-y-0.5
                        active:translate-y-0"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Reading
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>

            {/* subtle shine */}
            <span
              className="absolute inset-0
                        bg-white/20
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity"
            />
          </Button>

          {/* Secondary CTA */}
          <Button
            size="lg"
            className="group relative
                      rounded-xl px-8 py-6 text-xl font-medium
                      text-cyan-300
                      border border-cyan-500/40
                      bg-white/5 backdrop-blur-md
                      transition-all duration-300 ease-out
                      hover:bg-cyan-500/10
                      hover:border-cyan-400
                      hover:-translate-y-0.5
                      active:translate-y-0
                      hover:text-cyan-200"
          >
            <TerminalIcon className="mr-2 h-5 w-5 opacity-80" />
            View Topics
          </Button>
        </div>

        <div className="flex flex-row gap-48 mx-auto mt-15">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-bold bg-linear-to-r from-cyan-300 to-sky-300 text-transparent bg-clip-text">
              150+
            </p>
            <span className="text-muted-foreground">Articles</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-bold bg-linear-to-r from-cyan-300 to-sky-300 text-transparent bg-clip-text">
              15K
            </p>
            <span className="text-muted-foreground">Readers</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-bold bg-linear-to-r from-cyan-300 to-sky-300 text-transparent bg-clip-text">
              12
            </p>
            <span className="text-muted-foreground">Topics</span>
          </div>
        </div>

        <div className="flex mx-auto mt-20 animate-bounce border border-cyan-400 rounded-full p-3">
          <ArrowDown />
        </div>
      </div>
    </main>
  );
};

export default Home;
