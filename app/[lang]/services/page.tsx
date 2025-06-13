import { getDictionary } from "../dictionaries"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default async function Services({
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{dict.services.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{dict.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {dict.services.items.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-4">{service.title}</CardTitle>
                <p className="text-gray-600 text-center">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
