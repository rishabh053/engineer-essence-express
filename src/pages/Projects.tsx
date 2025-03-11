
import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  const projects = [
    {
      title: "Enterprise Data Pipeline",
      description: "A scalable data processing system for enterprise customers, handling petabytes of data with real-time analytics capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      tags: ["Java", "Spark", "Kafka", "AWS"],
      category: "professional",
      links: {
        demo: false,
        github: false
      }
    },
    {
      title: "Customer Dashboard",
      description: "Real-time analytics dashboard for service monitoring that improved response time by 40%. Features interactive visualizations and customizable alerts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      tags: ["React", "TypeScript", "GraphQL", "Node.js"],
      category: "professional",
      links: {
        demo: false,
        github: false
      }
    },
    {
      title: "Inventory Management System",
      description: "Automated inventory system with predictive analytics for supply chain optimization. Reduced inventory costs by 15% while maintaining stock levels.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      tags: ["Python", "TensorFlow", "PostgreSQL", "Docker"],
      category: "professional",
      links: {
        demo: false,
        github: false
      }
    },
    {
      title: "DevOps Automation Suite",
      description: "Set of tools for automating deployment pipelines, including infrastructure as code, monitoring, and alerting systems.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      tags: ["Terraform", "AWS", "Kubernetes", "Go"],
      category: "professional",
      links: {
        demo: false,
        github: false
      }
    },
    {
      title: "Weather Forecast App",
      description: "Interactive weather application that provides detailed forecasts, historical data, and customizable alerts for multiple locations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      tags: ["React", "Redux", "Node.js", "Weather API"],
      category: "personal",
      links: {
        demo: true,
        github: true
      }
    },
    {
      title: "Budget Tracker",
      description: "Personal finance application for tracking expenses, setting budgets, and visualizing spending patterns over time.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2611&q=80",
      tags: ["React", "Firebase", "Chart.js", "PWA"],
      category: "personal",
      links: {
        demo: true,
        github: true
      }
    },
    {
      title: "Recipe Finder",
      description: "Web application that allows users to search for recipes based on ingredients they have, dietary restrictions, and meal types.",
      image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      tags: ["JavaScript", "API Integration", "CSS Grid", "Responsive Design"],
      category: "personal",
      links: {
        demo: true,
        github: true
      }
    },
    {
      title: "Markdown Editor",
      description: "Browser-based markdown editor with real-time preview, syntax highlighting, and export options for multiple formats.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
      tags: ["TypeScript", "React", "CodeMirror", "Electron"],
      category: "personal",
      links: {
        demo: true,
        github: true
      }
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Layout>
      <section className="pt-24 pb-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">Projects</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              My Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A collection of professional and personal projects that showcase my skills and interests.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="section-container">
          <div ref={projectsRef} className="opacity-0">
            <Tabs defaultValue="all" className="max-w-4xl mx-auto mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger 
                  value="all"
                  onClick={() => setActiveFilter("all")}
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger 
                  value="professional"
                  onClick={() => setActiveFilter("professional")}
                >
                  Professional
                </TabsTrigger>
                <TabsTrigger 
                  value="personal"
                  onClick={() => setActiveFilter("personal")}
                >
                  Personal
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="glass-card hover-scale overflow-hidden flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge>
                        {project.category === "professional" ? "Professional" : "Personal"}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {project.links.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href="#" target="_blank" rel="noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button size="sm" asChild>
                        <a href="#" target="_blank" rel="noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {!project.links.github && !project.links.demo && (
                      <p className="text-sm text-muted-foreground italic">
                        Proprietary project, code not publicly available
                      </p>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
