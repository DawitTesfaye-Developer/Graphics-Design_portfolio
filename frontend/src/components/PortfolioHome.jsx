import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, ChevronLeft, ChevronRight, X, Filter } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glassmorphism">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gradient">{mockDesigner.name}</h1>
              <p className="text-sm text-gray-600">{mockDesigner.title}</p>
            </div>
            <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-5xl lg:text-7xl font-bold text-gradient mb-6">
              {mockDesigner.tagline}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A curated collection of design projects spanning brand identity, digital design, 
              and creative campaigns that tell compelling visual stories.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span>Portfolio 2022-2024</span>
              <span>•</span>
              <span>{mockProjects.length} Projects</span>
              <span>•</span>
              <span>{mockDesigner.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Featured Work</h3>
            <p className="text-gray-600">Highlighted projects that showcase the breadth of creative solutions</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card 
                key={project.id} 
                className={`hover-lift overflow-hidden cursor-pointer ${project.color} border-2`}
                onClick={() => openProjectModal(project)}
              >
                <div className="relative">
                  <img 
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 font-medium">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-600">{project.category} • {project.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
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

      {/* Project Filter & Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-8">All Projects</h3>
            
            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              <Filter className="w-4 h-4 text-gray-500" />
              {mockCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gray-900" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="hover-lift overflow-hidden cursor-pointer group"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative">
                  <img 
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 mb-2">
                        {project.category}
                      </Badge>
                      <h4 className="text-white font-semibold text-lg">{project.title}</h4>
                      <p className="text-white/80 text-sm">{project.client}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-gray-700" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl h-[90vh] p-0 overflow-hidden">
          {selectedProject && (
            <div className="h-full flex flex-col">
              {/* Image Gallery */}
              <div className="relative flex-1 bg-gray-100">
                <img 
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-4 h-4" />
                </Button>

                {/* Image Counter */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-8 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                    <p className="text-gray-600">{selectedProject.client} • {selectedProject.year}</p>
                  </div>
                  <Badge variant="secondary" className="bg-gray-100">
                    {selectedProject.category}
                  </Badge>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Let's Work Together
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and explore how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Mail className="w-5 h-5 mr-2" />
              {mockDesigner.email}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 {mockDesigner.name}. All rights reserved.</p>
            </div>
            <div className="text-sm text-gray-400">
              <span>Portfolio • {mockProjects.length} Projects • {mockDesigner.location}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioHome;