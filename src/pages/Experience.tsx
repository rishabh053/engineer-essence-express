
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
      <section className="apple-section apple-section-hero bg-gradient-to-b from-background to-apple-gray-50/30">
        <div className="apple-container">
          <div className="max-w-5xl mx-auto text-center apple-spacing-lg">
            <div className="apple-skill mb-8 w-fit mx-auto animate-fade-in">Experience</div>
            <h1 className="apple-hero mb-8 text-balance animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Professional Journey
            </h1>
            <p className="apple-subtitle mb-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              My career path and skills developed in the cloud infrastructure and DevOps space.
            </p>
          </div>
        </div>
      </section>

      <section className="apple-section apple-section-padding">
        <div className="apple-container">
          <div ref={timelineRef} className="opacity-0">
            <h2 className="apple-headline text-center mb-20">Work History</h2>
            <div className="apple-spacing-xl max-w-5xl mx-auto">
              {experiences.map((exp, index) => (
                <div key={index} className="apple-card p-12 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-8">
                    <div>
                      <h3 className="apple-title mb-3">{exp.title}</h3>
                      <p className="apple-subtitle">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <div className="apple-skill whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="h-px bg-border/30 my-8"></div>
                  
                  <div className="apple-spacing-lg">
                    <ul className="apple-spacing-sm">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                          <span className="apple-body">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-3 pt-6">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="apple-skill">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="apple-section apple-section-padding bg-apple-gray-50/50">
        <div className="apple-container">
          <div ref={skillsRef} className="opacity-0">
            <h2 className="apple-headline text-center mb-20">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={category} className="apple-card p-8 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="apple-title mb-6">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="apple-skill">{skill}</span>
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
