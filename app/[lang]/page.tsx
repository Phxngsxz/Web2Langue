import { getDictionary } from "./dictionaries"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Award, Clock, Star, Zap, Shield, Globe2 } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { TypewriterText } from "@/components/typewriter-text"

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang as "en" | "th" | "zh" | "ja")

  const stats = [
    { icon: Users, value: 500, label: dict.home.stats.projects },
    { icon: Star, value: 200, label: dict.home.stats.clients },
    { icon: Clock, value: 10, label: dict.home.stats.years },
    { icon: Award, value: 50, label: dict.home.stats.awards },
  ]

  const features = [
    { icon: Zap, title: dict.home.features.items[0].title, description: dict.home.features.items[0].description },
    { icon: Shield, title: dict.home.features.items[1].title, description: dict.home.features.items[1].description },
    { icon: Globe2, title: dict.home.features.items[2].title, description: dict.home.features.items[2].description },
    { icon: Star, title: dict.home.features.items[3].title, description: dict.home.features.items[3].description },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-black rounded-full animate-pulse-slow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <TypewriterText text={dict.home.hero.title} />
            </h1>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 sm:text-xl md:text-2xl">
              {dict.home.hero.subtitle}
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <Link href={`/${lang}/contact`} className="flex items-center gap-2">
                {dict.home.hero.cta}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <stat.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="mb-2 text-3xl font-bold sm:text-4xl">
                  <AnimatedCounter end={stat.value} suffix="+" />
                </div>
                <div className="text-sm text-gray-300 sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-5xl gradient-text">
              {dict.home.features.title}
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:border-black hover-lift group"
              >
                <CardHeader className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-800">
                      <feature.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-black group-hover:text-gray-800 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 px-4 py-16 text-white sm:py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl animate-fade-in-up">
            {dict.common.getStarted}
          </h2>
          <p className="mb-8 text-lg opacity-90 sm:text-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {dict.home.hero.subtitle}
          </p>
          <div
            className="flex flex-col justify-center gap-4 sm:flex-row animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Link href={`/${lang}/services`}>{dict.common.learnMore}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              <Link href={`/${lang}/contact`}>{dict.navigation.contact}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
