
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
      {/* Hero Section - Apple.com style */}
      <section className="apple-section apple-section-hero bg-gradient-to-b from-background to-apple-gray-50/30">
        <div className="apple-container">
          <div className="max-w-5xl mx-auto text-center apple-spacing-lg">
            <div className="apple-skill mb-12 mx-auto w-fit">Software Engineer 2 @ Dell</div>
            <h1 className="apple-hero mb-8 text-balance animate-fade-in">
              Rishabh Raj
            </h1>
            <p className="apple-subtitle mb-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Software engineer specializing in Kubernetes, Docker, and cloud-native technologies at Dell Technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/experience" className="apple-button-primary">
                Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/contact" className="apple-button-secondary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Apple.com style */}
      <section className="apple-section apple-section-padding bg-apple-gray-50/50">
        <div className="apple-container">
          <div className="max-w-7xl mx-auto text-center apple-spacing-xl">
            <h2 className="apple-headline mb-20 animate-fade-in">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 animate-slide-up">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="apple-skill group cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="transition-transform group-hover:scale-110 mr-2">
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Apple.com style */}
      <section className="apple-section apple-section-padding bg-gradient-to-b from-background to-apple-gray-50/30">
        <div className="apple-container">
          <div className="max-w-4xl mx-auto text-center apple-spacing-lg">
            <h2 className="apple-headline mb-8 animate-fade-in">
              Get in Touch
            </h2>
            <p className="apple-subtitle mb-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              I'm currently open to new opportunities and collaborations.
            </p>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/contact" className="apple-button-primary">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};

export default Index;
