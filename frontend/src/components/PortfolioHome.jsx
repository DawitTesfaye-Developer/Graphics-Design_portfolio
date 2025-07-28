import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ExternalLink, ChevronRight, Star, Award, Coffee, Palette, Monitor, Package, Camera, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';
import { 
  mockDesigner, 
  mockServices, 
  mockProjects, 
  mockTestimonials, 
  mockSkills, 
  mockExperience,
  mockAwards 
} from '../mock';

const PortfolioHome = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % mockProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getServiceIcon = (title) => {
    switch (title) {
      case 'Brand Identity': return <Palette className="w-6 h-6" />;
      case 'Print Design': return <Coffee className="w-6 h-6" />;
      case 'Digital Design': return <Monitor className="w-6 h-6" />;
      case 'Packaging Design': return <Package className="w-6 h-6" />;
      case 'Campaign Design': return <Target className="w-6 h-6" />;
      case 'Art Direction': return <Camera className="w-6 h-6" />;
      default: return <Palette className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glassmorphism">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gradient">
              {mockDesigner.name}
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-gray-600 transition-colors">Home</a>
              <a href="#portfolio" className="hover:text-gray-600 transition-colors">Portfolio</a>
              <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
              <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
            </div>
            <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-gradient min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-gradient leading-tight">
                  {mockDesigner.title}
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl">
                  {mockDesigner.tagline}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                  View My Work
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Download Resume
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{mockDesigner.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>8+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
                <img 
                  src={mockProjects[currentProject].image}
                  alt={mockProjects[currentProject].title}
                  className="w-full h-96 object-cover transition-all duration-1000"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold">{mockProjects[currentProject].title}</h3>
                    <p className="text-gray-200">{mockProjects[currentProject].category}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-4 space-x-2">
                {mockProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentProject ? 'bg-gray-900 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design solutions to elevate your brand and connect with your audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.map((service) => (
              <Card key={service.id} className={`hover-lift ${service.color} border-2`}>
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                    {getServiceIcon(service.title)}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of projects showcasing creative solutions across various industries
            </p>
          </div>

          <div className="portfolio-grid">
            {mockProjects.map((project) => (
              <Card key={project.id} className={`hover-lift overflow-hidden ${project.color}`}>
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <p className="text-sm text-gray-600">{project.client} • {project.year}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-xl text-gray-600">
              What clients say about working with me
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">About Me</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {mockDesigner.bio}
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
                  <div className="space-y-4">
                    {mockSkills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6">Awards & Recognition</h3>
                  <div className="space-y-4">
                    {mockAwards.map((award) => (
                      <div key={award.id} className="flex items-start space-x-3">
                        <Award className="w-5 h-5 text-yellow-500 mt-1" />
                        <div>
                          <p className="font-semibold">{award.title}</p>
                          <p className="text-gray-600">{award.organization} • {award.year}</p>
                          <p className="text-sm text-gray-500">{award.project}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {mockExperience.map((exp, index) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{exp.title}</h4>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                      <p className="font-medium text-gray-600 mb-2">{exp.company}</p>
                      <p className="text-gray-700">{exp.description}</p>
                      {index < mockExperience.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Let's Connect</CardTitle>
                  <CardDescription>
                    Ready to bring your vision to life? Let's discuss your next project.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span>{mockDesigner.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <span>{mockDesigner.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span>{mockDesigner.location}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Let's Create Together</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">{mockDesigner.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">{mockDesigner.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">{mockDesigner.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-300">
                  Tell me about your project and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500">
                    <option>Brand Identity</option>
                    <option>Print Design</option>
                    <option>Digital Design</option>
                    <option>Packaging Design</option>
                    <option>Campaign Design</option>
                    <option>Art Direction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                  Send Message
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{mockDesigner.name}</h3>
              <p className="text-gray-400 mb-6">{mockDesigner.tagline}</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Behance</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Brand Identity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Print Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Packaging Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>{mockDesigner.email}</p>
                <p>{mockDesigner.phone}</p>
                <p>{mockDesigner.location}</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 {mockDesigner.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioHome;