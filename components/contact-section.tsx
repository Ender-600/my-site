"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageSquare,
  Calendar,
  Code,
  Brain,
} from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    value: "boyul5@illinois.edu",
    description: "For professional inquiries and collaborations",
    color: "from-blue-500 to-cyan-500",
    href: "mailto:boyul5@illinois.edu",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    value: "+1 (217) 418-6501",
    description: "Available for urgent matters",
    color: "from-green-500 to-emerald-500",
    href: "tel:+12174186501",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location",
    value: "Champaign, IL",
    description: "University of Illinois Urbana-Champaign",
    color: "from-purple-500 to-pink-500",
    href: "#",
  },
  {
    icon: <Github className="h-6 w-6" />,
    title: "GitHub",
    value: "github.com/Ender-600",
    description: "View my code and projects",
    color: "from-gray-500 to-gray-700",
    href: "https://github.com/Ender-600",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    title: "LinkedIn",
    value: "linkedin.com/in/boyu-liu",
    description: "Professional networking",
    color: "from-blue-600 to-blue-800",
    href: "https://linkedin.com/in/boyu-liu",
  },
];

const collaborationTypes = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Software Development",
    description:
      "Full-stack web applications, mobile apps, and system architecture",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Research",
    description: "Machine learning, computer vision, and NLP projects",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Consulting",
    description: "Technical advice and project guidance",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Speaking",
    description: "Conferences, workshops, and educational talks",
    color: "from-orange-500 to-red-500",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "collaboration",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I&apos;m always interested in discussing new opportunities,
              research collaborations, or just having a conversation about
              technology and innovation. Feel free to reach out!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${method.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">
                        {method.value}
                      </p>
                      <p className="text-sm text-gray-400">
                        {method.description}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                    >
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Collaboration Types */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Areas of Collaboration
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {collaborationTypes.map((type, index) => (
                <Card
                  key={index}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${type.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4`}
                    >
                      {type.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {type.title}
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <Card className="bg-white/5 backdrop-blur-md border border-white/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label htmlFor="type" className="text-white mb-2 block">
                    Type of Inquiry
                  </Label>
                  <select
                    id="type"
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white focus:border-cyan-400 focus:ring-cyan-400/20"
                  >
                    <option value="collaboration">Collaboration</option>
                    <option value="consulting">Consulting</option>
                    <option value="speaking">Speaking</option>
                    <option value="research">Research</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-white/20">
          <CardContent className="p-12">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Start a Project?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re looking for a technical collaborator, research
              partner, or just want to discuss the latest in AI and technology,
              I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-xl">
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </Button>
              <Button
                variant="outline"
                className="bg-white/5 border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl"
              >
                <Github className="h-5 w-5 mr-2" />
                View GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
