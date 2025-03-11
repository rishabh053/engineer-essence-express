
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Server, Database } from 'lucide-react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
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

    if (heroRef.current) observer.observe(heroRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  const skills = [
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Java", category: "backend" },
    { name: "Spring Boot", category: "backend" },
    { name: "Python", category: "backend" },
    { name: "AWS", category: "cloud" },
    { name: "Docker", category: "devops" },
    { name: "Kubernetes", category: "devops" },
    { name: "PostgreSQL", category: "database" },
    { name: "MongoDB", category: "database" },
  ];

  const featuredProjects = [
    {
      title: "Enterprise Data Pipeline",
      description: "Designed and implemented a scalable data processing system for Dell's enterprise customers, handling petabytes of data.",
      tags: ["Java", "Spark", "Kafka", "AWS"],
      link: "/projects"
    },
    {
      title: "Customer Dashboard",
      description: "Built a real-time analytics dashboard for service monitoring, improving response time by 40%.",
      tags: ["React", "TypeScript", "Node.js", "GraphQL"],
      link: "/projects"
    },
    {
      title: "Inventory Management System",
      description: "Developed an automated inventory system with predictive analytics for supply chain optimization.",
      tags: ["Python", "TensorFlow", "PostgreSQL", "Docker"],
      link: "/projects"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-5"></div>
        <div className="section-container relative z-10">
          <div 
            ref={heroRef} 
            className="max-w-3xl opacity-0" 
          >
            <Badge className="mb-4">Software Engineer @ Dell</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Crafting elegant solutions to complex problems
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              I'm Alex Chen, a software engineer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products at Dell Technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-secondary py-24">
        <div className="section-container">
          <div ref={skillsRef} className="space-y-12 opacity-0">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Technical Proficiency
              </h2>
              <p className="text-lg text-muted-foreground">
                With over 5 years of experience, I've developed expertise across the full software development stack.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-card hover-scale">
                <CardHeader>
                  <Code className="h-8 w-8 mb-2" />
                  <CardTitle>Frontend Development</CardTitle>
                  <CardDescription>
                    Building responsive, accessible user interfaces
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter(skill => skill.category === "frontend")
                      .map(skill => (
                        <Badge key={skill.name} variant="secondary">{skill.name}</Badge>
                      ))
                    }
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-scale">
                <CardHeader>
                  <Server className="h-8 w-8 mb-2" />
                  <CardTitle>Backend Development</CardTitle>
                  <CardDescription>
                    Creating robust, scalable server applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter(skill => skill.category === "backend")
                      .map(skill => (
                        <Badge key={skill.name} variant="secondary">{skill.name}</Badge>
                      ))
                    }
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover-scale">
                <CardHeader>
                  <Database className="h-8 w-8 mb-2" />
                  <CardTitle>Infrastructure & Data</CardTitle>
                  <CardDescription>
                    Managing cloud infrastructure and databases
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter(skill => ["cloud", "devops", "database"].includes(skill.category))
                      .map(skill => (
                        <Badge key={skill.name} variant="secondary">{skill.name}</Badge>
                      ))
                    }
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
        <div className="section-container">
          <div ref={projectsRef} className="space-y-12 opacity-0">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4">Portfolio</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                A selection of projects I've worked on at Dell and in my personal time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <Card key={index} className="glass-card hover-scale">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link 
                      to={project.link} 
                      className="text-sm font-medium text-primary inline-flex items-center hover:underline"
                    >
                      View Project <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. 
            If you're looking for a software engineer who brings both technical expertise and a 
            user-centered approach, let's connect.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
