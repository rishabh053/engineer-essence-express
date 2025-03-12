
import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

    if (timelineRef.current) observer.observe(timelineRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (timelineRef.current) observer.unobserve(timelineRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  const experiences = [
    {
      title: "Software Engineer 2",
      company: "Dell Technologies",
      location: "Bengaluru, Karnataka, India",
      period: "Nov 2022 - Present",
      description: [
        "Lead developer for containerized microservices infrastructure using Kubernetes and Docker",
        "Architected and implemented CI/CD pipelines for automated testing and deployment",
        "Optimized container orchestration resulting in 45% performance improvement",
        "Collaborated with cross-functional teams to design scalable cloud solutions"
      ],
      technologies: ["Golang", "Kubernetes", "Docker", "OpenShift", "CI/CD", "Jenkins"]
    },
    {
      title: "Project Engineer",
      company: "Wipro",
      location: "Bengaluru, Karnataka, India",
      period: "Sep 2020 - Oct 2022",
      description: [
        "Developed automation scripts for infrastructure provisioning and configuration",
        "Built and maintained CI/CD pipelines using Jenkins for multiple projects",
        "Implemented containerization strategies for legacy applications",
        "Collaborated with development teams to improve deployment workflows"
      ],
      technologies: ["Docker", "Jenkins", "CI/CD", "Bash", "Python", "Git"]
    }
  ];

  const skills = {
    "Programming Languages": ["Golang", "Python", "Bash"],
    "Container & Orchestration": ["Kubernetes", "Docker", "OpenShift", "Helm"],
    "CI/CD & DevOps": ["Jenkins", "GitLab CI", "ArgoCD", "Tekton"],
    "Cloud & Infrastructure": ["AWS", "Azure", "Terraform", "Ansible"],
    "Tools & Methodologies": ["Git", "Agile/Scrum", "JIRA", "Prometheus", "Grafana"]
  };

  return (
    <Layout>
      <section className="pt-24 pb-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">Experience</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Professional Journey
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              My career path and skills developed in the cloud infrastructure and DevOps space.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="section-container">
          <div ref={timelineRef} className="opacity-0">
            <h2 className="text-2xl font-bold mb-12 text-center">Work History</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <Card key={index} className="glass-card hover-scale">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                      <div>
                        <h3 className="font-bold text-xl">{exp.title}</h3>
                        <p className="text-muted-foreground text-lg">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <Badge variant="outline" className="md:text-right whitespace-nowrap">
                        {exp.period}
                      </Badge>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-4">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="section-container">
          <div ref={skillsRef} className="opacity-0">
            <h2 className="text-2xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="glass-card hover-scale">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge key={index} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
