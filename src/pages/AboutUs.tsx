
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WebsiteHeader from "@/components/WebsiteHeader";
import WebsiteFooter from "@/components/WebsiteFooter";
import { Users, Target, Award, Heart, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      icon: Users,
      title: "Built for Servicepreneurs",
      description: "Designed specifically for agency owners and freelancers who live this life every day."
    },
    {
      icon: Lightbulb,
      title: "From Real Experience",
      description: "Built by someone who understands your pain points, not by a startup guessing your needs."
    },
    {
      icon: Target,
      title: "Purposeful Design",
      description: "No bloat, just what you need. Lightweight but powerful operational tools."
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Built in public with feedback from real servicepreneurs who use it daily."
    }
  ];

  const whoShouldUse = [
    "Editors working with multiple creators",
    "SEO experts handling client retainers", 
    "Social media managers coordinating approvals",
    "Consultants managing 1:1 client sessions",
    "Anyone who delivers services and manages feedback, invoices, and delivery"
  ];

  return (
    <div className="min-h-screen bg-white">
      <WebsiteHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">✨</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Chaos to Clarity
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A tool built by a servicepreneur for servicepreneurs
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-4xl mb-4">🧠</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How This Idea Was Born</h2>
              <p className="text-gray-600 mb-4">
                I'm Raj, the founder of OpsDesk — and like many agency owners and freelancers, 
                I was drowning in client work, feedback loops, invoices, approvals, revisions, and missed messages.
              </p>
              <p className="text-gray-600 mb-4">
                I wasn't lacking skills or clients. <strong>I was lacking structure.</strong>
              </p>
              <p className="text-gray-600 mb-4">
                Running my own SEO and video editing agency, I realized how broken and scattered 
                most service operations are. We were using Google Sheets, WhatsApp, Notion, Trello, 
                and still forgetting who approved what, which invoice was paid, or when a revision was requested.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-800 font-medium italic">
                  "Why isn't there a clean, purpose-built tool just for servicepreneurs like me?"
                </p>
                <p className="text-gray-600 mt-2">So I built it.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 mb-4">Servicepreneurs Served</div>
                <div className="text-4xl font-bold text-purple-600 mb-2">10k+</div>
                <div className="text-gray-600 mb-4">Client Projects Managed</div>
                <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
                <div className="text-gray-600">Revenue Tracked</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            To help every freelancer and service-based business get clarity on client work, 
            track feedback & revisions in one place, log invoices and approvals without friction, 
            and run lean, efficient operations with pride.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🛠️</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes OpsDesk Unique?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Designed specifically for agency owners & servicepreneurs</h3>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🧠</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Built by someone who lives this life — not by a startup guessing your pain</h3>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Takes feedback seriously — literally logs it project by project</h3>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">💸</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tracks money with clarity — unpaid invoices don't go unseen</h3>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">✨</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Lightweight but powerful — no bloat, just what you need</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Use This */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">👤</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Use This?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whoShouldUse.map((user, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{user}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Message */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-6">🫱🏽‍🫲🏽</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Grow Together
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-lg text-white mb-4">
              I'm building this in public — learning, iterating, improving.
              If you're a servicepreneur, I'd love your feedback, feature requests, and ideas.
            </p>
            <p className="text-lg text-white italic">
              Because this isn't just a product — it's a platform built to support the way we work.
            </p>
            <div className="mt-6">
              <p className="text-blue-100 text-lg">— Raj</p>
              <p className="text-blue-100">Founder, Servicepreneur, Creator of OpsDesk</p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Start Your Journey
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                Share Your Feedback
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  );
};

export default AboutUs;
