import { getDictionary } from "../dictionaries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default async function Contact({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang as "en" | "th" | "zh" | "ja");

  return (
    <div className="min-h-screen px-4 py-16 sm:py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            {dict.contact.title}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">
                {dict.contact.form.submit}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700"
                    >
                      {dict.contact.form.name}
                    </label>
                    <Input id="name" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      {dict.contact.form.email}
                    </label>
                    <Input id="email" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700"
                  >
                    {dict.contact.form.subject}
                  </label>
                  <Input id="subject" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700"
                  >
                    {dict.contact.form.message}
                  </label>
                  <Textarea id="message" rows={6} />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {dict.contact.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Address</h3>
                    <p className="text-gray-600">{dict.contact.info.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Phone</h3>
                    <p className="text-gray-600">{dict.contact.info.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Email</h3>
                    <p className="text-gray-600">{dict.contact.info.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
