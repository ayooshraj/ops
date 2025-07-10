
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WebsiteHeader from "@/components/WebsiteHeader";
import WebsiteFooter from "@/components/WebsiteFooter";
import { Play, ArrowLeft, CheckCircle, Users, FolderOpen, Receipt, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const DemoVideo = () => {
  const benefits = [
    "See how to manage multiple clients effortlessly",
    "Learn to track feedback and revisions in one place", 
    "Discover invoice management without friction",
    "Watch real agency workflows in action",
    "Get started in under 5 minutes"
  ];

  const features = [
    {
      icon: Users,
      title: "Client Management Demo",
      description: "Watch how easy it is to add, organize, and track all your clients in one place."
    },
    {
      icon: FolderOpen,
      title: "Project Workflow",
      description: "See project creation, status tracking, and progress monitoring in real-time."
    },
    {
      icon: Receipt,
      title: "Invoice Generation",
      description: "Learn how to create professional invoices and track payments seamlessly."
    },
    {
      icon: BarChart3,
      title: "Dashboard Analytics",
      description: "Discover powerful insights and reporting features for better decision making."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <WebsiteHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Watch OpsDesk in Action
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              See how OpsDesk transforms chaotic service operations into streamlined, 
              professional workflows. Built by a servicepreneur, for servicepreneurs.
            </p>
          </div>

          {/* Interactive Demo Video Container */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                {/* Interactive Demo Interface */}
                <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="ml-4 text-sm">OpsDesk Dashboard</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Interactive Demo
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Experience OpsDesk's full functionality with our live demo
                      </p>
                      <Link to="/signup">
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                          Try Live Demo
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Demo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See Every Feature in Action
            </h2>
            <p className="text-xl text-gray-600">
              Explore how each feature works to streamline your agency operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {feature.description}
                  </CardDescription>
                  <Link to="/signup">
                    <Button variant="outline" size="sm">
                      Try This Feature
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What You'll Learn in This Demo
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Join hundreds of servicepreneurs who've already transformed 
                their operations with OpsDesk.
              </p>
              <div className="space-y-3">
                <Link to="/signup">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Have Questions? Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            From Chaos to Clarity in Minutes
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Stop juggling multiple tools. Start managing your service business like a pro.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  );
};

export default DemoVideo;
