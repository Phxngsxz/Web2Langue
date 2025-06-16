import { getDictionary } from "../dictionaries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

export default async function Blog({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang as "en" | "th" | "zh" | "ja");

  const posts = [
    {
      title: "The Future of Multilingual Web Development",
      excerpt:
        "Exploring the latest trends and technologies in creating multilingual websites...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "Technology",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=200&width=300",
    },
    {
      title: "Best Practices for Website Localization",
      excerpt:
        "Learn how to effectively localize your website for different markets...",
      author: "David Chen",
      date: "2024-01-10",
      category: "Localization",
      image:
        "https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=200&width=300",
    },
    {
      title: "Cultural Considerations in UX Design",
      excerpt:
        "Understanding how culture affects user experience design decisions...",
      author: "Maria Garcia",
      date: "2024-01-05",
      category: "Design",
      image:
        "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=200&width=300",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dict.blog.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dict.blog.subtitle}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
                <CardTitle className="text-xl line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  {dict.blog.readMore}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
