import {
  Code2,
  Sparkles,
  Layers3,
  Zap,
  Target,
  Users,
  BookOpen,
  Coffee,
  Lightbulb,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AboutPage = () => {
  const newLocal =
    "absolute inset-0 bg-linear-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity";
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute inset-0 noise opacity-[0.06]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="py-2 px-4 sm:px-5 text-xs sm:text-sm font-semibold text-muted-foreground bg-blue-950 mx-auto mb-4 sm:mb-6 border border-cyan-400 flex items-center gap-2 w-fit">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            About Us
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8">
            We write about the{" "}
            <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
              tech that matters
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            A community-driven platform where developers share real-world
            insights, battle-tested solutions, and the kind of knowledge you
            won&apos;t find in official docs.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-medium">
                <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                Our Mission
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Building a better developer community
              </h2>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                We believe the best tech content comes from developers who are
                in the trenches every day. Not from marketers, not from content
                farms, but from people who&apos;ve actually solved the problems
                they&apos;re writing about.
              </p>

              <p className="text-white/60 text-sm sm:text-base">
                That&apos;s why every article on our platform is written by
                experienced engineers, reviewed for technical accuracy, and
                focused on practical application.
              </p>
            </div>

            {/* Right Stats Cards */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="group relative p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1">
                <div className={newLocal} />
                <div className="relative">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-300 to-sky-300 text-transparent bg-clip-text mb-2">
                    150+
                  </div>
                  <div className="text-white font-semibold text-base sm:text-lg mb-1">
                    In-Depth Articles
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm">
                    Covering modern frameworks, architecture, and best practices
                  </div>
                </div>
              </div>

              <div className="group relative p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-300 to-sky-300 text-transparent bg-clip-text mb-2">
                    15K+
                  </div>
                  <div className="text-white font-semibold text-base sm:text-lg mb-1">
                    Active Readers
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm">
                    Developers learning and growing together
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              What we stand for
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Value Card 1 */}
            <div className="group p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-cyan-500/10 p-2.5 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                Quality Over Quantity
              </h3>
              <p className="text-white/60 text-sm sm:text-base">
                We&apos;d rather publish one great article than ten mediocre
                ones. Every piece is crafted with care and technical precision.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="group p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-cyan-500/10 p-2.5 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                Community First
              </h3>
              <p className="text-white/60 text-sm sm:text-base">
                Our readers are developers helping developers. We foster a
                community built on respect, learning, and shared growth.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="group p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-cyan-500/10 p-2.5 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                Practical & Actionable
              </h3>
              <p className="text-white/60 text-sm sm:text-base">
                No fluff, no filler. Just clear explanations, working examples,
                and insights you can apply immediately.
              </p>
            </div>

            {/* Value Card 4 */}
            <div className="group p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-cyan-500/10 p-2.5 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Layers3 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                Modern Stack Focus
              </h3>
              <p className="text-white/60 text-sm sm:text-base">
                We cover the tools and technologies shaping the future: React,
                Next.js, TypeScript, and the modern web ecosystem.
              </p>
            </div>

            {/* Value Card 5 */}
            <div className="group p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-cyan-500/10 p-2.5 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                Deep, Not Shallow
              </h3>
              <p className="text-white/60 text-sm sm:text-base">
                We go beyond surface-level tutorials. Our content explores the
                &quot;why&quot; and &quot;how&quot; with real architectural
                thinking.
              </p>
            </div>

            {/* Value Card 6 */}
            <div className="group p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1">
              <div className="bg-cyan-500/10 p-2.5 sm:p-3 rounded-xl w-fit mb-3 sm:mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                Made by Developers
              </h3>
              <p className="text-white/60 text-sm sm:text-base">
                Written by engineers who code daily. Reviewed by peers who
                understand the nuances and trade-offs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 md:p-12 rounded-3xl bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-transparent backdrop-blur border border-cyan-400/20">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Our Story
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Why we started this blog
            </h2>

            <div className="space-y-4 text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                It started with frustration. Too many tutorials that didn&apos;t
                work in production. Too much content optimized for SEO instead
                of learning. Too many &quot;experts&quot; who&apos;d never
                shipped real products.
              </p>

              <p>
                We wanted something different: a place where experienced
                developers could share what they&apos;ve actually learned
                building real applications. Where the focus is on depth, not
                clicks. Where honesty about trade-offs matters more than hype.
              </p>

              <p className="text-white/80 font-medium">
                So we built it. And we&apos;re just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Join our community
          </h2>
          <p className="text-white/70 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
            Get weekly insights on modern web development, architecture
            patterns, and the tools that are shaping the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
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
              className="group relative rounded-xl px-6 py-3 sm:px-8 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-medium text-cyan-300 border border-cyan-500/40 bg-white/5 backdrop-blur-md transition-all duration-300 ease-out hover:bg-cyan-500/10 hover:border-cyan-400 hover:-translate-y-0.5 active:translate-y-0 hover:text-cyan-200 w-full sm:w-auto"
            >
              Subscribe to Newsletter
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-10 sm:mt-12">
            <a
              href="#"
              className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
