import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronLeft, ChevronRight, CreditCard, ShieldCheck, Zap, ArrowRight, Globe, Lock, Clock } from "lucide-react";

export default function Home() {
  useEffect(() => {
    document.title = "Flowpay - A Scalable Payment Gateway";
  }, []);

  const features = [
    {
      title: "Global Payments",
      description: "Accept payments from customers worldwide with multiple currency support.",
      icon: <Globe className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Ultra Fast",
      description: "Process transactions in milliseconds with our optimized infrastructure.",
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
    },
    {
      title: "Bank-level Security",
      description: "Enterprise-grade encryption and security measures to protect your data.",
      icon: <Lock className="h-10 w-10 text-green-500" />,
    },
    {
      title: "Instant Settlements",
      description: "Get your funds faster with our quick settlement process.",
      icon: <Clock className="h-10 w-10 text-purple-500" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Flowpay revolutionized how we handle payments. The integration was seamless and our payment processing time decreased by 80%.",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Michael Chen",
      company: "Global Commerce",
      text: "Since switching to Flowpay, our transaction success rate improved dramatically. Their support team is also incredibly responsive.",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Emma Rodriguez",
      company: "Retail Solutions",
      text: "The analytics dashboard has given us insights we never had before. Flowpay is more than just a payment processor - it's a business tool.",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses",
      features: ["2.5% + $0.30 per transaction", "24/7 support", "Basic analytics", "10 payment methods"],
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      description: "Ideal for growing companies",
      features: ["1.9% + $0.20 per transaction", "Priority support", "Advanced analytics", "All payment methods"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: ["Custom pricing", "Dedicated account manager", "Custom integrations", "Fraud protection suite"],
      popular: false,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-blue-950 text-white min-h-screen">
      {/* Navbar */}
      <header className="w-full py-6 px-8 flex justify-between items-center sticky top-0 bg-black bg-opacity-70 backdrop-blur-md z-50">
        <div className="flex items-center space-x-2">
          <CreditCard className="h-8 w-8 text-blue-500" />
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Flowpay
          </h1>
        </div>
        <nav>
          <ul className="hidden md:flex space-x-8">
            {["Features", "Testimonials", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
          Sign Up
        </Button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="md:w-1/2 text-left mb-10 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Seamless Payments
            </span>
            <br /> for Modern Businesses
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
            A scalable payment gateway built to handle millions of transactions with enterprise-grade security and lightning-fast processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg font-medium">
              Get Started Free
            </Button>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20 px-8 py-6 rounded-lg text-lg font-medium">
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-8 flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-700 border-2 border-blue-900"></div>
              ))}
            </div>
            <p className="ml-4 text-gray-400">
              <span className="text-blue-400 font-bold">2,500+</span> businesses trust Flowpay
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl p-1 shadow-lg shadow-blue-500/20">
            <div className="bg-black rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-gray-400 text-sm">Payment Status</p>
                  <p className="text-lg font-bold">97.8% Success Rate</p>
                </div>
                <ShieldCheck className="text-green-500 h-10 w-10" />
              </div>
              
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between bg-gray-900 p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">Transaction #{Math.floor(Math.random() * 10000)}</p>
                        <p className="text-sm text-gray-400">{new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                    <p className="text-green-400 font-medium">$429.00</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-blue-900 bg-opacity-30 p-4 rounded-lg border border-blue-800">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-300">Processing Fee (1.9%)</p>
                  <p className="text-sm font-medium">$8.15</p>
                </div>
                <div className="h-1 w-full bg-gray-800 rounded-full mt-2">
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-black bg-opacity-50 py-12">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-center text-gray-400 mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 w-32 bg-gray-800 rounded-md opacity-70"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Powerful Features</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Our comprehensive suite of tools gives you everything you need to manage payments effortlessly.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-all duration-300 cursor-pointer h-full">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle className='text-gray-50'>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="bg-gray-900 border-gray-800 w-80">
                <div className="flex justify-between space-x-4">
                  <div>{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                    <div className="mt-2 flex items-center">
                      <span className="text-blue-400 text-sm">Learn more</span>
                      <ArrowRight className="ml-1 h-3 w-3 text-blue-400" />
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-black">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How Flowpay Works</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Get up and running in minutes, not days
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Account",
                description: "Sign up in seconds and verify your business details."
              },
              {
                step: "02",
                title: "Integrate API",
                description: "Implement our simple SDKs in your app or website."
              },
              {
                step: "03",
                title: "Start Processing",
                description: "Begin accepting payments from customers worldwide."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-gray-800">{item.step}</div>
                <h3 className="text-2xl font-bold mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                    <ArrowRight className="h-8 w-8 text-blue-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Join thousands of satisfied customers using Flowpay
        </p>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full">
                  <Card className="bg-gray-900 border-gray-800 p-8">
                    <CardContent className="pt-4">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                          <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-lg mb-6 text-gray-300">"{testimonial.text}"</p>
                        <h4 className="font-bold text-lg text-gray-50">{testimonial.name}</h4>
                        <p className="text-gray-400">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-blue-800 transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-blue-800 transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-blue-500" : "bg-gray-700"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-950 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            No hidden fees. No surprises. Just pay for what you use.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`bg-gray-900 border-gray-800 overflow-hidden ${
                  plan.popular ? "border-blue-500 relative" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1">
                    POPULAR
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className='text-gray-50'>{plan.name}</CardTitle>
                  <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-50">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-400">/month</span>}
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2 text-green-500">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={`w-full py-6 ${
                      plan.popular 
                        ? "bg-blue-600 hover:bg-blue-700" 
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-purple-900 rounded-3xl p-1">
          <div className="bg-gray-950 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your payments?</h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Join thousands of businesses that trust Flowpay for secure, reliable, and fast payment processing.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg font-medium">
              Start Your Free Trial
            </Button>
            <p className="mt-4 text-gray-400 text-sm">No credit card required</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                {["Features", "Pricing", "Integrations", "API", "Documentation"].map((item) => (
                  <li key={item}><a href="#" className="text-gray-400 hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                {["About", "Customers", "Careers", "Blog", "Legal"].map((item) => (
                  <li key={item}><a href="#" className="text-gray-400 hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Help Center", "Community", "Status", "Webinars", "Partners"].map((item) => (
                  <li key={item}><a href="#" className="text-gray-400 hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                {["Sales", "Support", "Feedback", "Demo"].map((item) => (
                  <li key={item}><a href="#" className="text-gray-400 hover:text-white">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <CreditCard className="h-6 w-6 text-blue-500" />
              <h1 className="text-xl font-bold">Flowpay</h1>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Flowpay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}