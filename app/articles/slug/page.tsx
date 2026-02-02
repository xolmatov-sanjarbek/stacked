"use client";

import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  Tag,
  ThumbsUp,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const ArticlePage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(247);
  const [hasLiked, setHasLiked] = useState(false);

  // Sample article data
  const article = {
    title:
      "Building Scalable React Applications with Modern Architecture Patterns",
    subtitle:
      "Learn how to structure your React applications for long-term maintainability and scalability using proven architectural patterns.",
    author: {
      name: "Sarah Chen",
      bio: "Senior Software Engineer at TechCorp. Passionate about React, TypeScript, and building scalable web applications.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      twitter: "@sarahchen",
    },
    date: "January 28, 2025",
    readTime: "12 min read",
    topic: "React",
    tags: ["React", "Architecture", "Best Practices", "Scalability"],
    views: "2.4K",
    comments: 38,
  };

  // Related articles
  const relatedArticles = [
    {
      id: 1,
      title: "TypeScript Best Practices for Large-Scale Applications",
      topic: "TypeScript",
      readTime: "15 min read",
      author: "Alex Kumar",
    },
    {
      id: 2,
      title: "React Server Components: A Practical Guide",
      topic: "React",
      readTime: "11 min read",
      author: "James Lee",
    },
    {
      id: 3,
      title: "Optimizing Next.js Performance: A Deep Dive",
      topic: "Next.js",
      readTime: "10 min read",
      author: "Michael Park",
    },
  ];

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleShare = async (platform: string) => {
    // Handle sharing logic here
    console.log(`Sharing to ${platform}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute inset-0 noise opacity-[0.03]" />
      </div>

      {/* Back Button */}
      <div className="relative z-10 pt-6 sm:pt-8 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <button className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-cyan-300 hover:border-cyan-400/50 hover:bg-white/10 transition-all text-sm sm:text-base">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="relative z-10 pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Topic Badge */}
          <Badge className="mb-4 sm:mb-6 bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            {article.topic}
          </Badge>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            {article.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed mb-6 sm:mb-8">
            {article.subtitle}
          </p>

          {/* Author & Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10">
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src={article.author.image}
                alt={article.author.name}
                className="sm:w-14 sm:h-14 rounded-full border-2 border-cyan-400/30"
                width={12}
                height={12}
              />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base mb-0.5">
                  {article.author.name}
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-white/50 text-xs sm:text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                  <span>•</span>
                  <span>{article.views} views</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handleLike}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl border transition-all text-sm sm:text-base ${
                  hasLiked
                    ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-300"
                    : "bg-white/5 border-white/10 text-white/70 hover:border-cyan-400/50 hover:bg-white/10 hover:text-cyan-300"
                }`}
              >
                <ThumbsUp
                  className={`w-4 h-4 ${hasLiked ? "fill-cyan-300" : ""}`}
                />
                <span className="hidden sm:inline">{likes}</span>
              </button>

              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-xl border transition-all ${
                  isBookmarked
                    ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-300"
                    : "bg-white/5 border-white/10 text-white/70 hover:border-cyan-400/50 hover:bg-white/10 hover:text-cyan-300"
                }`}
              >
                <Bookmark
                  className={`w-4 h-4 ${isBookmarked ? "fill-cyan-300" : ""}`}
                />
              </button>

              <div className="relative group">
                <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:border-cyan-400/50 hover:bg-white/10 hover:text-cyan-300 transition-all">
                  <Share2 className="w-4 h-4" />
                </button>

                {/* Share Dropdown */}
                <div className="absolute right-0 top-12 w-48 p-2 rounded-xl bg-black/95 backdrop-blur-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl">
                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-cyan-300 transition-all text-sm"
                  >
                    <Twitter className="w-4 h-4" />
                    Share on Twitter
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-cyan-300 transition-all text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    Share on LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-cyan-300 transition-all text-sm"
                  >
                    <Facebook className="w-4 h-4" />
                    Share on Facebook
                  </button>
                  <button
                    onClick={copyLink}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-cyan-300 transition-all text-sm"
                  >
                    <Link2 className="w-4 h-4" />
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="relative z-10 px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Content Container */}
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Article body - sample content */}
            <div className="space-y-6 text-white/80 text-base sm:text-lg leading-relaxed">
              <p>
                Building scalable React applications requires more than just
                knowing the basics of components and state management. As your
                application grows, the decisions you make early on can
                significantly impact your ability to maintain and extend your
                codebase.
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-8 sm:mt-12 mb-4 sm:mb-6">
                Why Architecture Matters
              </h2>

              <p>
                Many developers start building React applications without giving
                much thought to architecture. This works fine for small
                projects, but as your application grows, you&apos;ll start to
                encounter issues:
              </p>

              <ul className="space-y-2 ml-4 sm:ml-6 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    Components become tightly coupled and hard to test
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    State management becomes chaotic and unpredictable
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    Business logic is scattered throughout the codebase
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Performance issues emerge as the app scales</span>
                </li>
              </ul>

              <div className="my-8 sm:my-12 p-6 sm:p-8 rounded-2xl bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-transparent backdrop-blur border border-cyan-400/20">
                <p className="text-cyan-300 font-semibold mb-2 text-base sm:text-lg">
                  💡 Pro Tip
                </p>
                <p className="text-white/80 text-sm sm:text-base">
                  Start with a solid architecture from day one. It&apos;s much
                  easier to maintain good patterns than to refactor a large
                  codebase later.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-8 sm:mt-12 mb-4 sm:mb-6">
                Key Architectural Patterns
              </h2>

              <p>
                Let&apos;s explore some proven architectural patterns that can
                help you build more maintainable React applications:
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-white mt-6 sm:mt-8 mb-3 sm:mb-4">
                1. Feature-Based Folder Structure
              </h3>

              <p>
                Instead of organizing your code by technical concerns
                (components, hooks, utils), organize it by features. This makes
                it easier to understand and modify specific parts of your
                application.
              </p>

              <div className="my-6 sm:my-8 p-4 sm:p-6 rounded-xl bg-black/50 border border-white/10 overflow-x-auto">
                <pre className="text-cyan-300 text-xs sm:text-sm font-mono">
                  {`src/
  features/
    auth/
      components/
      hooks/
      services/
      types/
    dashboard/
      components/
      hooks/
      services/
      types/
  shared/
    components/
    hooks/
    utils/`}
                </pre>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mt-6 sm:mt-8 mb-3 sm:mb-4">
                2. Container/Presentational Pattern
              </h3>

              <p>
                Separate your components into containers (smart components that
                handle logic) and presentational components (dumb components
                that just render UI). This separation makes your code more
                testable and reusable.
              </p>

              <p>
                Container components connect to state management, handle side
                effects, and pass data down to presentational components.
                Presentational components receive props and render UI without
                knowing where the data comes from.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-white mt-6 sm:mt-8 mb-3 sm:mb-4">
                3. Custom Hooks for Business Logic
              </h3>

              <p>
                Extract complex business logic into custom hooks. This keeps
                your components clean and makes the logic reusable across
                different parts of your application.
              </p>

              <div className="my-6 sm:my-8 p-4 sm:p-6 rounded-xl bg-black/50 border border-white/10 overflow-x-auto">
                <pre className="text-cyan-300 text-xs sm:text-sm font-mono">
                  {`function useUserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser().then(data => {
      setUser(data);
      setLoading(false);
    });
  }, []);
  
  return { user, loading };
}`}
                </pre>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-8 sm:mt-12 mb-4 sm:mb-6">
                State Management Strategy
              </h2>

              <p>
                Choosing the right state management solution is crucial for
                scalability. Here&apos;s a simple decision tree:
              </p>

              <ul className="space-y-2 ml-4 sm:ml-6 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    <strong className="text-white">Local state</strong> - Use
                    useState for component-specific state
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    <strong className="text-white">Shared state</strong> - Use
                    Context API for app-wide state that doesn&apos;t change
                    often
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    <strong className="text-white">Complex state</strong> - Use
                    Redux/Zustand for complex state with many updates
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>
                    <strong className="text-white">Server state</strong> - Use
                    React Query/SWR for data fetching and caching
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-8 sm:mt-12 mb-4 sm:mb-6">
                Conclusion
              </h2>

              <p>
                Building scalable React applications is about making intentional
                architectural decisions early and sticking to them consistently.
                The patterns discussed here have been battle-tested in
                production applications and can help you avoid common pitfalls.
              </p>

              <p>
                Remember, there&apos;s no one-size-fits-all solution. Choose
                patterns that make sense for your team and project, and
                don&apos;t be afraid to adapt them as your needs evolve.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Tag className="w-4 h-4 text-cyan-400" />
              <span className="text-white/70 text-sm font-medium">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <button
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all text-xs sm:text-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Image
                src={article.author.image}
                alt={article.author.name}
                className="sm:w-20 sm:h-20 rounded-full border-2 border-cyan-400/30 shrink-0"
                width={16}
                height={16}
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
                  <h3 className="text-white font-bold text-lg sm:text-xl">
                    {article.author.name}
                  </h3>
                  <a
                    href={`https://twitter.com/${article.author.twitter.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors w-fit"
                  >
                    {article.author.twitter}
                  </a>
                </div>
                <p className="text-white/70 text-sm sm:text-base mb-4">
                  {article.author.bio}
                </p>
                <Button className="group px-4 sm:px-5 py-2 rounded-lg bg-linear-to-r from-sky-400 to-cyan-400 text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all text-sm sm:text-base">
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="relative z-10 px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-10">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {relatedArticles.map((related) => (
              <article
                key={related.id}
                className="group p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Badge className="mb-3 bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 text-xs">
                  {related.topic}
                </Badge>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                  {related.title}
                </h3>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="text-white/60 text-xs sm:text-sm">
                    <p className="mb-1">{related.author}</p>
                    <p className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {related.readTime}
                    </p>
                  </div>

                  <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="relative z-10 px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2 sm:gap-3">
              <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
              Comments ({article.comments})
            </h2>
          </div>

          {/* Comment Input */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 mb-6 sm:mb-8">
            <textarea
              placeholder="Share your thoughts..."
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400/50 transition-all resize-none text-sm sm:text-base"
              // rows="4"
            />
            <div className="flex justify-end mt-3 sm:mt-4">
              <Button className="px-4 sm:px-6 py-2 rounded-lg bg-linear-to-r from-sky-400 to-cyan-400 text-black font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all text-sm sm:text-base">
                Post Comment
              </Button>
            </div>
          </div>

          {/* Sample Comment */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
            <div className="flex gap-3 sm:gap-4">
              <Image
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=User1"
                alt="Commenter"
                className="sm:w-12 sm:h-12 rounded-full border-2 border-cyan-400/20 shrink-0"
                width={10}
                height={10}
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                  <span className="text-white font-semibold text-sm sm:text-base">
                    John Doe
                  </span>
                  <span className="text-white/40 text-xs sm:text-sm">
                    • 2 hours ago
                  </span>
                </div>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Great article! The container/presentational pattern has been a
                  game-changer for my team. Would love to see more examples of
                  state management strategies in future articles.
                </p>
                <button className="mt-3 flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
                  <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  24
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
