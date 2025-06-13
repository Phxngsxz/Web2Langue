import { getDictionary } from "../dictionaries"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default async function About({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang as "en" | "th" | "zh" | "ja")

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{dict.about.title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{dict.about.subtitle}</p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">{dict.about.description}</p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{dict.about.team.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {dict.about.team.members.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarFallback className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
