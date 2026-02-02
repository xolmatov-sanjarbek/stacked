"use client";

import {
  Search,
  Calendar,
  Clock,
  Tag,
  ArrowRight,
  Filter,
  X,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const ArticlesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sample topics
  const topics = [
    "All",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Architecture",
    "Performance",
    "Security",
    "DevOps",
    "UI/UX",
    "Testing",
  ];

  // Sample articles data
  const articles = [
    {
      id: 1,
      title:
        "Building Scalable React Applications with Modern Architecture Patterns",
      excerpt:
        "Learn how to structure your React applications for long-term maintainability and scalability using proven architectural patterns.",
      author: "Sarah Chen",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      date: "Jan 28, 2025",
      readTime: "12 min read",
      topic: "React",
      featured: true,
    },
    {
      id: 2,
      title: "TypeScript Best Practices for Large-Scale Applications",
      excerpt:
        "A comprehensive guide to using TypeScript effectively in enterprise applications, covering advanced types, patterns, and tooling.",
      author: "Alex Kumar",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      date: "Jan 25, 2025",
      readTime: "15 min read",
      topic: "TypeScript",
      featured: false,
    },
    {
      id: 3,
      title: "Optimizing Next.js Performance: A Deep Dive",
      excerpt:
        "Explore advanced performance optimization techniques in Next.js, from image optimization to incremental static regeneration.",
      author: "Michael Park",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      date: "Jan 22, 2025",
      readTime: "10 min read",
      topic: "Next.js",
      featured: true,
    },
    {
      id: 4,
      title: "Modern CSS: Beyond Tailwind",
      excerpt:
        "Understanding when and how to use native CSS features alongside Tailwind for maximum flexibility and performance.",
      author: "Emma Wilson",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      date: "Jan 20, 2025",
      readTime: "8 min read",
      topic: "Tailwind CSS",
      featured: false,
    },
    {
      id: 5,
      title: "Microservices Architecture: Lessons from the Trenches",
      excerpt:
        "Real-world insights on building and maintaining microservices, including common pitfalls and how to avoid them.",
      author: "David Zhang",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      date: "Jan 18, 2025",
      readTime: "18 min read",
      topic: "Architecture",
      featured: false,
    },
    {
      id: 6,
      title: "Securing Your Node.js Applications in 2025",
      excerpt:
        "Essential security practices for Node.js applications, covering authentication, authorization, and common vulnerabilities.",
      author: "Sofia Rodriguez",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
      date: "Jan 15, 2025",
      readTime: "14 min read",
      topic: "Security",
      featured: false,
    },
    {
      id: 7,
      title: "React Server Components: A Practical Guide",
      excerpt:
        "Understanding React Server Components with practical examples and use cases for modern web applications.",
      author: "James Lee",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      date: "Jan 12, 2025",
      readTime: "11 min read",
      topic: "React",
      featured: true,
    },
    {
      id: 8,
      title: "Testing Strategies for Modern Frontend Applications",
      excerpt:
        "A comprehensive approach to testing React applications, covering unit tests, integration tests, and E2E testing.",
      author: "Lisa Anderson",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      date: "Jan 10, 2025",
      readTime: "16 min read",
      topic: "Testing",
      featured: false,
    },
    {
      id: 9,
      title: "CI/CD Pipeline Best Practices for Modern Teams",
      excerpt:
        "Building efficient and reliable CI/CD pipelines using GitHub Actions, Docker, and modern deployment strategies.",
      author: "Ryan Martinez",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan",
      date: "Jan 8, 2025",
      readTime: "13 min read",
      topic: "DevOps",
      featured: false,
    },
    {
      id: 10,
      title: "Test Article",
      excerpt:
        "Building efficient and reliable CI/CD pipelines using GitHub Actions, Docker, and modern deployment strategies.",
      author: "James Clear",
      authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      date: "Jan 8, 2025",
      readTime: "15 min read",
      topic: "DevOps",
      featured: false,
    },
  ];

  // Filter articles based on search and topic
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopic =
      selectedTopic === "All" || article.topic === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-1/4 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute inset-0 noise opacity-[0.06]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="py-2 px-4 sm:px-5 text-xs sm:text-sm font-semibold text-muted-foreground bg-blue-950 mx-auto mb-4 sm:mb-6 border border-cyan-400 flex items-center gap-2 w-fit">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            {filteredArticles.length} Articles Available
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Explore Our{" "}
            <span className="bg-linear-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text">
              Articles
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
            Deep dives into modern web development, architecture patterns, and
            the technologies shaping the future.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="relative group">
              <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-cyan-400 transition-colors" />
              <input
                type="text"
                placeholder="Search articles by title or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-4 sm:py-5 rounded-2xl bg-white/5 backdrop-blur border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all text-sm sm:text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4 text-white/60 hover:text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Topics Filter */}
      <section className="relative z-10 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <Button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all"
            >
              <Filter className="w-4 h-4" />
              Filter by Topic
              {selectedTopic !== "All" && (
                <Badge className="ml-2 bg-cyan-500/20 text-cyan-300 border-cyan-400/30">
                  {selectedTopic}
                </Badge>
              )}
            </Button>
          </div>

          {/* Desktop & Mobile Topics */}
          <div className={`${isFilterOpen ? "block" : "hidden"} md:block`}>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Tag className="w-4 h-4 text-cyan-400" />
              <span className="text-white/70 text-sm font-medium">
                Filter by topic:
              </span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => {
                    setSelectedTopic(topic);
                    setIsFilterOpen(false);
                  }}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedTopic === topic
                      ? "bg-linear-to-r from-sky-400 to-cyan-400 text-black shadow-lg shadow-cyan-500/20"
                      : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-300"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative z-10 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 sm:py-16 md:py-20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-white/40" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                No articles found
              </h3>
              <p className="text-white/60 text-sm sm:text-base mb-6 sm:mb-8">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTopic("All");
                }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-cyan-300 hover:bg-white/10 hover:border-cyan-400/50 transition-all text-sm sm:text-base"
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className={`group relative p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 ${
                    article.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Featured Badge */}
                  {article.featured && (
                    <div className="absolute top-5 sm:top-6 right-5 sm:right-6 z-10">
                      <Badge className="bg-linear-to-r from-sky-400 to-cyan-400 text-black border-0 text-xs">
                        Featured
                      </Badge>
                    </div>
                  )}

                  {/* Topic Tag */}
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 text-xs font-medium border border-cyan-400/20">
                      {article.topic}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/60 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Author & Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Image
                        src={article.authorImage}
                        alt={article.author}
                        className="sm:w-10 sm:h-10 rounded-full border-2 border-cyan-400/20"
                        width={8}
                        height={8}
                      />
                      <div>
                        <p className="text-white text-xs sm:text-sm font-medium">
                          {article.author}
                        </p>
                        <div className="flex items-center gap-2 sm:gap-3 text-white/50 text-xs">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredArticles.length > 0 && (
            <div className="text-center mt-10 sm:mt-12 md:mt-16">
              <Button className="group relative overflow-hidden rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-black bg-linear-to-r from-sky-400 to-cyan-400 shadow-lg shadow-cyan-500/20 transition-all duration-300 ease-out hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Load More Articles
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
