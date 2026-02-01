import { Code2, Sparkles, Layers3 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left */}
          <div className="space-y-4 sm:space-y-6">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-medium">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              About Stacked
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Built for developers who care about
              <span className="text-cyan-400"> quality</span>, not noise.
            </h2>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
              Stacked is a modern tech blog focused on real-world development —
              clean code, scalable systems, thoughtful UI, and tools that
              actually make you better at what you do.
            </p>

            <p className="text-white/60 text-sm sm:text-base">
              No hype cycles. No shallow tutorials. Just practical insight,
              shipped with taste.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="bg-cyan-500/10 p-2.5 sm:p-3 rounded-xl shrink-0">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                  Modern Stack
                </h3>
                <p className="text-white/60 text-sm sm:text-base">
                  Next.js, TypeScript, Tailwind, databases, infra, and the
                  patterns behind them.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="bg-cyan-500/10 p-2.5 sm:p-3 rounded-xl shrink-0">
                <Layers3 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                  Real Engineering
                </h3>
                <p className="text-white/60 text-sm sm:text-base">
                  Architecture decisions, trade-offs, performance, and scaling —
                  explained clearly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
