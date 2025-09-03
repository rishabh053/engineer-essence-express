
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Server, 
  Database, 
  Terminal, 
  Github, 
  GitBranch,
  MessageSquare,
  Share,
  FileCode,
  Workflow,
  Package,
  Box,
  Gauge,
  Disc,
  Send,
  Link as LinkIcon
} from 'lucide-react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  // Skills data with corresponding icons
  const skills = [
    {
      name: "Golang",
      icon: <Code className="w-4 h-4 mr-1" />
    }, 
    {
      name: "Kubernetes",
      icon: <Server className="w-4 h-4 mr-1" />
    }, 
    {
      name: "OpenShift",
      icon: <Terminal className="w-4 h-4 mr-1" />
    }, 
    {
      name: "Docker",
      icon: <Database className="w-4 h-4 mr-1" />
    }, 
    {
      name: "CI/CD",
      icon: <GitBranch className="w-4 h-4 mr-1" />
    }, 
    {
      name: "Jenkins",
      icon: <Github className="w-4 h-4 mr-1" />
    },
    {
      name: "RabbitMQ",
      icon: <MessageSquare className="w-4 h-4 mr-1" />
    },
    {
      name: "Apache Kafka",
      icon: <Share className="w-4 h-4 mr-1" />
    },
    {
      name: "VS Code / Goland",
      icon: <FileCode className="w-4 h-4 mr-1" />
    },
    {
      name: "GitHub Actions",
      icon: <Workflow className="w-4 h-4 mr-1" />
    },
    {
      name: "Podman",
      icon: <Box className="w-4 h-4 mr-1" />
    },
    {
      name: "Helm",
      icon: <Package className="w-4 h-4 mr-1" />
    },
    {
      name: "Prometheus",
      icon: <Gauge className="w-4 h-4 mr-1" />
    },
    {
      name: "Redis",
      icon: <Database className="w-4 h-4 mr-1" />
    },
    {
      name: "PostgreSQL",
      icon: <Disc className="w-4 h-4 mr-1" />
    },
    {
      name: "Postman",
      icon: <Send className="w-4 h-4 mr-1" />
    },
    {
      name: "REST API",
      icon: <LinkIcon className="w-4 h-4 mr-1" />
    }
  ];

  return <Layout>
      {/* Hero Section - Apple-inspired minimal design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="skill-badge mb-8 mx-auto w-fit">Software Engineer 2 @ Dell</div>
            <h1 className="hero-text mb-8 text-balance animate-fade-in">
              Rishabh Raj
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Software engineer specializing in Kubernetes, Docker, and cloud-native technologies at Dell Technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="apple-button-primary">
                <Link to="/experience">
                  Experience <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="apple-button-secondary">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Apple-inspired grid layout */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="section-container">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="section-title mb-16 animate-fade-in">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-slide-up">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="skill-badge group cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="transition-transform group-hover:scale-110 mr-2">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Apple-inspired minimal call to action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-muted/10 to-background"></div>
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-8 animate-fade-in">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              I'm currently open to new opportunities and collaborations.
            </p>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Button asChild size="lg" className="apple-button-primary">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};

export default Index;
