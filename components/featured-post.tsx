import { Clock, Calendar, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const RecentPosts = () => {
  const posts = [
    {
      id: 1,
      topic: "Web Development",
      title: "Building Scalable React Applications",
      excerpt:
        "Learn best practices for structuring large-scale React applications with modern tooling and architectural patterns that stand the test of time.",
      readTime: 8,
      date: "Jan 28, 2026",
      topicColor:
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      url: "/blog/building-scalable-react-applications",
    },
    {
      id: 2,
      topic: "Design",
      title: "The Art of Minimalist UI Design",
      excerpt:
        "Discover how to create beautiful, functional interfaces by embracing simplicity and focusing on what truly matters to your users.",
      readTime: 5,
      date: "Jan 25, 2026",
      topicColor:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      url: "/blog/art-of-minimalist-ui-design",
    },
    {
      id: 3,
      topic: "Technology",
      title: "AI in Everyday Life: A Practical Guide",
      excerpt:
        "Explore practical applications of artificial intelligence and how it is transforming the way we work, create, and solve problems.",
      readTime: 10,
      date: "Jan 22, 2026",
      topicColor:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      url: "/blog/ai-in-everyday-life",
    },
    {
      id: 4,
      topic: "Productivity",
      title: "Time Management for Developers",
      excerpt:
        "Master the techniques that help developers balance coding, learning, and life while maintaining high productivity and avoiding burnout.",
      readTime: 6,
      date: "Jan 20, 2026",
      topicColor:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      url: "/blog/time-management-for-developers",
    },
    {
      id: 5,
      topic: "Career",
      title: "Navigating Your First Tech Job",
      excerpt:
        "Essential advice for new developers entering the tech industry, from onboarding to building relationships and growing your skills.",
      readTime: 7,
      date: "Jan 18, 2026",
      topicColor:
        "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      url: "/blog/navigating-first-tech-job",
    },
    {
      id: 6,
      topic: "Tutorial",
      title: "Advanced TypeScript Patterns",
      excerpt:
        "Deep dive into advanced TypeScript features including generics, utility types, and conditional types to write more robust code.",
      readTime: 12,
      date: "Jan 15, 2026",
      topicColor:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      url: "/blog/advanced-typescript-patterns",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-[#070A13]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-linear-to-r from-cyan-300 to-indigo-500 text-transparent bg-clip-text mb-4">
            Recent Posts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="flex flex-col h-full hover:scale-101 duration-200 border-gray-200 bg-[#080C16]"
            >
              <CardHeader>
                <Badge
                  className={`w-fit mb-3 ${post.topicColor}`}
                  variant="secondary"
                >
                  {post.topic}
                </Badge>
                <CardTitle className="text-xl font-bold text-white line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="grow">
                <CardDescription className="text-gray-600 dark:text-gray-400 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex flex-col gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center justify-between w-full text-sm text-gray-500 dark:text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <Button
                  className="w-full group bg-cyan-500 hover:bg-sky-500"
                  asChild
                >
                  <Link href="/article">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
