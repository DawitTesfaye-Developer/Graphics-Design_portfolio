import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, ChevronLeft, ChevronRight, X, Filter, Sparkles, Heart, Eye, Phone, Linkedin, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { 
  mockDesigner, 
  mockProjects,
  mockCategories
} from '../mock';

const PortfolioHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects = selectedCategory === 'All' 
    ? mockProjects 
    : mockProjects.filter(project => project.category === selectedCategory);

  const featuredProjects = mockProjects.filter(project => project.featured);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 2000);
    } catch (err) {
      console.log('Failed to copy text');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-xl"></div>
        <div className="floating-shape absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-2xl animation-delay-1000"></div>
        <div className="floating-shape absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-amber-200/25 to-orange-200/25 rounded-full blur-xl animation-delay-2000"></div>
      </div>

      {/* Enhanced Header */}
      <header className="fixed top-0 w-full z-50 premium-glassmorphism border-b border-white/20">
        <nav className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="group">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent">
                {mockDesigner.name}
              </h1>
              <p className="text-sm text-slate-500 font-medium tracking-wide">{mockDesigner.title}</p>
            </div>
            <Button 
              size="sm" 
              className="premium-button group overflow-hidden relative"
              onClick={() => setContactModalOpen(true)}
            >
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              <span>Contact</span>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section with Enhanced Design */}
      <section className="hero-section pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 mb-6 animate-pulse-subtle">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-slate-700">Available for new projects</span>
              </div>
            </div>
            
            <h2 className="hero-title text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-slate-800">Visual</span>
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                storytelling through design
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              A curated collection of design projects spanning brand identity, digital design, 
              and creative campaigns that tell compelling visual stories across diverse industries.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="premium-button-large group">
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Portfolio
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="premium-outline-button"
                onClick={() => setContactModalOpen(true)}
              >
                <Heart className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Portfolio 2022-2024</span>
              </div>
              <span>•</span>
              <span>{mockProjects.length} Creative Projects</span>
              <span>•</span>
              <span>{mockDesigner.location}</span>
            </div>
          </div>
        </div>
        
        {/* Hero Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent"></div>
      </section>

      {/* Enhanced Featured Projects */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-100 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-semibold text-indigo-700">Featured Work</span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">
              Crafted with <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">passion</span>
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Highlighted projects that showcase the breadth of creative solutions and artistic vision</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`premium-card overflow-hidden cursor-pointer group ${project.color} border-0 shadow-xl`}
                onClick={() => openProjectModal(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="premium-badge bg-white/90 backdrop-blur-sm border-0 font-semibold text-slate-700">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">{project.title}</h4>
                          <p className="text-white/80 text-sm">{project.category}</p>
                        </div>
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-slate-800">{project.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{project.client} • {project.year}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="premium-tag">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Project Gallery */}
      <section className="py-24 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-800">All Creative Work</h3>
            
            {/* Enhanced Filter Buttons */}
            <div className="inline-flex items-center gap-3 p-2 bg-white/80 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg mb-16">
              <Filter className="w-4 h-4 text-slate-500 ml-3" />
              {mockCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`premium-filter-button ${
                    selectedCategory === category 
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg" 
                      : "text-slate-600 hover:text-slate-800 hover:bg-white/60"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="premium-project-card overflow-hidden cursor-pointer group border-0 shadow-lg hover:shadow-2xl"
                onClick={() => openProjectModal(project)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="premium-category-badge mb-3">
                        {project.category}
                      </Badge>
                      <h4 className="text-white font-bold text-lg mb-1 truncate">{project.title}</h4>
                      <p className="text-white/80 text-sm truncate">{project.client}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <ExternalLink className="w-4 h-4 text-slate-700" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-10 h-10 text-slate-400" />
              </div>
              <p className="text-slate-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-6xl h-[95vh] p-0 overflow-hidden bg-white/95 backdrop-blur-xl border-0 shadow-2xl">
          {selectedProject && (
            <div className="h-full flex flex-col">
              {/* Enhanced Image Gallery */}
              <div className="relative flex-1 bg-gradient-to-br from-slate-50 to-slate-100">
                <img 
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain transition-all duration-500"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      className="premium-nav-button absolute left-6 top-1/2 -translate-y-1/2"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      className="premium-nav-button absolute right-6 top-1/2 -translate-y-1/2"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </>
                )}

                <Button
                  className="premium-close-button absolute top-6 right-6"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Enhanced Image Counter */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                    <div className="bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                      {currentImageIndex + 1} of {selectedProject.images.length}
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Project Info */}
              <div className="p-10 bg-white/90 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-3 text-slate-800">{selectedProject.title}</h3>
                      <p className="text-slate-500 text-lg font-medium">{selectedProject.client} • {selectedProject.year}</p>
                    </div>
                    <Badge className="premium-category-badge text-base px-4 py-2">
                      {selectedProject.category}
                    </Badge>
                  </div>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    {selectedProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag, index) => (
                      <Badge key={index} className="premium-tag-large">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Modal */}
      <Dialog open={contactModalOpen} onOpenChange={setContactModalOpen}>
        <DialogContent className="max-w-md p-0 overflow-hidden bg-white/95 backdrop-blur-xl border-0 shadow-2xl">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Let's Connect</h3>
              <p className="text-slate-600">Ready to bring your vision to life?</p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="group">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:border-blue-200 transition-all cursor-pointer" 
                     onClick={() => copyToClipboard(mockDesigner.email, 'email')}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Email</p>
                      <p className="text-blue-600 text-sm">{mockDesigner.email}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-100 hover:border-emerald-200 transition-all cursor-pointer"
                     onClick={() => copyToClipboard(mockDesigner.phone, 'phone')}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Phone</p>
                      <p className="text-emerald-600 text-sm">{mockDesigner.phone}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="group">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-100 hover:border-violet-200 transition-all cursor-pointer"
                     onClick={() => window.open(`https://${mockDesigner.linkedin}`, '_blank')}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-violet-500 rounded-full flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">LinkedIn</p>
                      <p className="text-violet-600 text-sm">Connect with me</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <Button 
                className="w-full premium-contact-button"
                onClick={() => setContactModalOpen(false)}
              >
                <Heart className="w-5 h-5 mr-2" />
                Thanks for reaching out!
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enhanced Contact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-20 left-32 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-32 left-16 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute top-16 left-64 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-40 left-48 w-1 h-1 bg-white rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium">Let's create something amazing</span>
            </div>
            
            <h3 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to bring your
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                vision to life?
              </span>
            </h3>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it and explore how we can create something beautiful together that resonates with your audience.
            </p>
            
            <Button 
              size="lg" 
              className="premium-contact-button group"
              onClick={() => setContactModalOpen(true)}
            >
              <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-medium">Get In Touch</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black text-white py-12 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <p className="text-slate-400">&copy; 2024 {mockDesigner.name}. Crafted with love and creativity.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Portfolio
              </span>
              <span>•</span>
              <span>{mockProjects.length} Projects</span>
              <span>•</span>
              <span>{mockDesigner.location}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioHome;