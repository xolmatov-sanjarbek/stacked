import { Code2, Sparkles, Layers3 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              About Stacked
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Built for developers who care about
              <span className="text-cyan-400"> quality</span>, not noise.
            </h2>

            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Stacked is a modern tech blog focused on real-world development —
              clean code, scalable systems, thoughtful UI, and tools that
              actually make you better at what you do.
            </p>

            <p className="text-white/60">
              No hype cycles. No shallow tutorials. Just practical insight,
              shipped with taste.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-6">
            <div className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="bg-cyan-500/10 p-3 rounded-xl">
                <Code2 className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Modern Stack
                </h3>
                <p className="text-white/60">
                  Next.js, TypeScript, Tailwind, databases, infra, and the
                  patterns behind them.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="bg-cyan-500/10 p-3 rounded-xl">
                <Layers3 className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Real Engineering
                </h3>
                <p className="text-white/60">
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
