
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
    { name: "Golang", category: "backend" },
    { name: "Kubernetes", category: "devops" },
    { name: "OpenShift", category: "devops" },
    { name: "Docker", category: "devops" },
    { name: "CI/CD", category: "devops" },
    { name: "Jenkins", category: "devops" },
  ];

  const featuredProjects = [
    {
      title: "Container Orchestration Platform",
      description: "Designed and implemented a Kubernetes-based orchestration system for microservices deployment at Dell.",
      tags: ["Golang", "Kubernetes", "Docker", "CI/CD"],
      link: "/projects"
    },
    {
      title: "DevOps Automation Pipeline",
      description: "Built an end-to-end CI/CD pipeline with Jenkins, improving deployment efficiency by 60%.",
      tags: ["Jenkins", "Docker", "OpenShift", "Golang"],
      link: "/projects"
    },
    {
      title: "Cloud Migration Framework",
      description: "Developed a framework for migrating legacy applications to containerized cloud environments.",
      tags: ["Kubernetes", "Docker", "Golang", "OpenShift"],
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
            <Badge className="mb-4">Software Engineer 2 @ Dell</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Building robust cloud infrastructure & DevOps solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              I'm Rishabh Raj, a software engineer specializing in Kubernetes, Docker, and cloud-native technologies. 
              Currently, I'm focused on developing scalable infrastructure solutions at Dell Technologies.
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
                With experience at Dell Technologies and Wipro, I've developed expertise in cloud-native technologies and DevOps practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-card hover-scale">
                <CardHeader>
                  <Code className="h-8 w-8 mb-2" />
                  <CardTitle>Backend Development</CardTitle>
                  <CardDescription>
                    Building scalable applications with Golang
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
                  <Server className="h-8 w-8 mb-2" />
                  <CardTitle>DevOps & CI/CD</CardTitle>
                  <CardDescription>
                    Automating deployment and infrastructure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills
                      .filter(skill => skill.category === "devops")
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
                  <CardTitle>Container Orchestration</CardTitle>
                  <CardDescription>
                    Managing containerized applications at scale
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">OpenShift</Badge>
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
                A selection of projects I've worked on at Dell Technologies and Wipro.
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
            If you're looking for a software engineer with expertise in cloud-native technologies and DevOps, let's connect.
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
