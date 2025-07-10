
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WebsiteHeader from "@/components/WebsiteHeader";
import WebsiteFooter from "@/components/WebsiteFooter";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "10 Essential Features Every Agency Management Platform Should Have",
    excerpt: "Discover the must-have features that can transform your agency operations and boost productivity by 40%.",
    content: "When choosing an agency management platform, it's crucial to look beyond basic project tracking...",
    author: "Alex Thompson",
    publishDate: "2024-01-15",
    readTime: 8,
    category: "Best Practices",
    image: "/placeholder.svg",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "How to Streamline Client Onboarding for Better Retention",
      excerpt: "Learn proven strategies to create a smooth onboarding experience that sets the foundation for long-term client relationships.",
      author: "Sarah Kim",
      publishDate: "2024-01-12",
      readTime: 6,
      category: "Client Management",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "The Future of Agency Operations: AI and Automation Trends",
      excerpt: "Explore how artificial intelligence and automation are reshaping the agency landscape and what it means for your business.",
      author: "Marcus Johnson",
      publishDate: "2024-01-10",
      readTime: 5,
      category: "Technology",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Maximizing Profitability: A Guide to Better Project Pricing",
      excerpt: "Discover pricing strategies that help agencies increase margins while delivering exceptional value to clients.",
      author: "Lisa Chen",
      publishDate: "2024-01-08",
      readTime: 7,
      category: "Business Strategy",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Building a Remote-First Agency: Lessons Learned",
      excerpt: "Key insights and practical tips for successfully managing a distributed agency team in the modern workplace.",
      author: "Alex Thompson",
      publishDate: "2024-01-05",
      readTime: 9,
      category: "Remote Work",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Client Communication Best Practices for Agencies",
      excerpt: "Master the art of client communication with proven strategies that build trust and prevent misunderstandings.",
      author: "Sarah Kim",
      publishDate: "2024-01-03",
      readTime: 4,
      category: "Communication",
      image: "/placeholder.svg"
    },
    {
      id: 7,
      title: "Data-Driven Decision Making for Agency Growth",
      excerpt: "Learn how to leverage analytics and reporting to make informed decisions that drive sustainable agency growth.",
      author: "Marcus Johnson",
      publishDate: "2024-01-01",
      readTime: 6,
      category: "Analytics",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Best Practices", "Client Management", "Technology", "Business Strategy", "Remote Work", "Communication", "Analytics"];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <WebsiteHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            OpsDesk Blog
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Insights, tips, and best practices for agency owners and operators. 
            Stay updated with the latest trends in agency management.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card className="border-none shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">FP</span>
                    </div>
                    <p className="text-gray-600">Featured Post Image</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                      {featuredPost.category}
                    </Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl lg:text-3xl mb-3">
                      {featuredPost.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredPost.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime} min read</span>
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-blue-100 hover:text-blue-800 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg font-bold text-white">
                        {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Article Image</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime} min</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium mt-4"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter and get the latest agency management insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  );
};

export default Blog;
