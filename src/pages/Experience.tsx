
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
      <section className="pt-32 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="skill-badge mb-8 w-fit animate-fade-in">Experience</div>
            <h1 className="hero-text mb-8 text-balance animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Professional Journey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              My career path and skills developed in the cloud infrastructure and DevOps space.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <div ref={timelineRef} className="opacity-0">
            <h2 className="section-title text-center mb-20">Work History</h2>
            <div className="space-y-12 max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <div key={index} className="apple-card p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                      <p className="text-muted-foreground text-lg">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <div className="skill-badge whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="h-px bg-border/50 my-6"></div>
                  
                  <div className="space-y-6">
                    <ul className="space-y-3 text-muted-foreground">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-3 pt-4">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="skill-badge text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="section-container">
          <div ref={skillsRef} className="opacity-0">
            <h2 className="section-title text-center mb-20">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={category} className="apple-card p-8 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-xl font-semibold mb-6">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge text-xs">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
