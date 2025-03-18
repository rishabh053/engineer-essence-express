
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
      {/* Hero Section - Simplified */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 backdrop-blur-sm"></div>
        <div className="section-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="mb-4">Software Engineer 2 @ Dell</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Rishabh Raj
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
              Software engineer specializing in Kubernetes, Docker, and cloud-native technologies at Dell Technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/experience">
                  Experience <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - With Icons */}
      <section className="bg-secondary py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map(skill => <Badge key={skill.name} variant="secondary" className="text-sm px-3 py-1 flex items-center">
                  {skill.icon}
                  {skill.name}
                </Badge>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8">
              I'm currently open to new opportunities and collaborations.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};

export default Index;
