import { getDictionary } from "../dictionaries";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default async function Portfolio({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang as "en" | "th" | "zh" | "ja");

  const projects = [
    {
      title: "Global E-commerce Platform",
      category: "E-commerce",
      image:
        "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=300&width=400",
    },
    {
      title: "Multilingual News Website",
      category: "Website",
      image:
        "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=300&width=400",
    },
    {
      title: "International Banking App",
      category: "Mobile App",
      image:
        "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1height=300&width=400",
    },
    {
      title: "Enterprise CRM System",
      category: "Enterprise",
      image:
        "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=300&width=400",
    },
    {
      title: "Travel Booking Platform",
      category: "Website",
      image:
        "https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=300&width=400",
    },
    {
      title: "Food Delivery App",
      category: "Mobile App",
      image:
        "https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?height=300&width=400",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dict.portfolio.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dict.portfolio.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {dict.portfolio.categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-4 py-2 text-sm hover:bg-blue-600 hover:text-white cursor-pointer transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">{project.category}</Badge>
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
