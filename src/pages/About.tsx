
import React, { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
  const bioRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

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

    if (bioRef.current) observer.observe(bioRef.current);
    if (educationRef.current) observer.observe(educationRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);

    return () => {
      if (bioRef.current) observer.unobserve(bioRef.current);
      if (educationRef.current) observer.unobserve(educationRef.current);
      if (valuesRef.current) observer.unobserve(valuesRef.current);
    };
  }, []);

  return (
    <Layout>
      <section className="apple-section apple-section-hero bg-gradient-to-b from-background to-apple-gray-50/30">
        <div className="apple-container">
          <div className="max-w-5xl mx-auto text-center apple-spacing-lg">
            <div className="apple-skill mb-8 w-fit mx-auto animate-fade-in">About Me</div>
            <h1 className="apple-hero mb-8 text-balance animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Software Engineer & Cloud Infrastructure Specialist
            </h1>
            <p className="apple-subtitle mb-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hello! I'm Rishabh Raj, a software engineer based in Bengaluru, India.
            </p>
          </div>
        </div>
      </section>

      <section className="apple-section apple-section-padding">
        <div className="apple-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="aspect-square rounded-3xl overflow-hidden mb-8 apple-card">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Rishabh Raj" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="apple-spacing-md">
                  <div>
                    <h3 className="apple-title">Location</h3>
                    <p className="apple-body">Bengaluru, Karnataka, India</p>
                  </div>
                  <div>
                    <h3 className="apple-title">Current Role</h3>
                    <p className="apple-body">Software Engineer 2 at Dell Technologies</p>
                  </div>
                  <div>
                    <h3 className="apple-title">Focus Areas</h3>
                    <p className="apple-body">Cloud Infrastructure, DevOps, Container Orchestration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 apple-spacing-3xl">
              <div ref={bioRef} className="opacity-0">
                <h2 className="apple-headline mb-8">Biography</h2>
                <div className="apple-spacing-md">
                  <p className="apple-body">
                    I'm a software engineer with expertise in cloud infrastructure and DevOps practices. 
                    Currently, I work at Dell Technologies where I design and implement containerized solutions for enterprise applications.
                  </p>
                  <p className="apple-body">
                    My journey in technology began at C.V. Raman College of Engineering, where I studied Information Technology and developed a passion for building scalable systems. Since then, I've worked across different aspects of the software development lifecycle, with a focus on containerization and automation.
                  </p>
                  <p className="apple-body">
                    At Dell, I'm part of a team that develops cloud-native solutions for enterprise clients. My focus is on creating robust, efficient infrastructure using technologies like Kubernetes, Docker, and OpenShift while maintaining exceptional performance and reliability.
                  </p>
                  <p className="apple-body">
                    Before joining Dell, I worked at Wipro as a Project Engineer, where I gained valuable experience in software development and began specializing in DevOps practices and container orchestration.
                  </p>
                </div>
              </div>

              <div ref={educationRef} className="opacity-0">
                <h2 className="apple-headline mb-12">Education & Work Experience</h2>
                <div className="apple-spacing-lg">
                  <div className="apple-card p-8">
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <Briefcase className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="apple-title">Software Engineer 2</h3>
                        <p className="apple-body">Dell Technologies</p>
                        <p className="apple-caption mb-4">Nov 2022 - Present</p>
                        <p className="apple-body">
                          Building cloud infrastructure solutions and container orchestration platforms.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="apple-card p-8">
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <Briefcase className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="apple-title">Project Engineer</h3>
                        <p className="apple-body">Wipro</p>
                        <p className="apple-caption mb-4">Sep 2020 - Oct 2022</p>
                        <p className="apple-body">
                          Worked on DevOps automation and CI/CD pipeline implementation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="apple-card p-8">
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-accent/10 rounded-full">
                        <GraduationCap className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="apple-title">Bachelor of Technology - BTech, Information Technology</h3>
                        <p className="apple-body">C.V. Raman College of Engineering</p>
                        <p className="apple-caption mb-4">Apr 2016 - Apr 2020</p>
                        <p className="apple-body">
                          Focused on software engineering and cloud computing technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={valuesRef} className="opacity-0">
                <h2 className="apple-headline mb-12">Professional Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="apple-card p-8 hover:scale-[1.02] transition-transform duration-300">
                    <h3 className="apple-title flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent/10 rounded-full">
                        <Briefcase className="h-5 w-5 text-accent" />
                      </div>
                      Infrastructure as Code
                    </h3>
                    <p className="apple-body">
                      I believe in automating infrastructure deployment for consistency and reliability.
                    </p>
                  </div>

                  <div className="apple-card p-8 hover:scale-[1.02] transition-transform duration-300">
                    <h3 className="apple-title flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent/10 rounded-full">
                        <Heart className="h-5 w-5 text-accent" />
                      </div>
                      Developer Experience
                    </h3>
                    <p className="apple-body">
                      Technical solutions should enhance developer productivity and satisfaction.
                    </p>
                  </div>

                  <div className="apple-card p-8 hover:scale-[1.02] transition-transform duration-300">
                    <h3 className="apple-title flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent/10 rounded-full">
                        <GraduationCap className="h-5 w-5 text-accent" />
                      </div>
                      Continuous Learning
                    </h3>
                    <p className="apple-body">
                      Cloud technologies evolve rapidly, and I'm committed to growing my expertise.
                    </p>
                  </div>

                  <div className="apple-card p-8 hover:scale-[1.02] transition-transform duration-300">
                    <h3 className="apple-title flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent/10 rounded-full">
                        <Award className="h-5 w-5 text-accent" />
                      </div>
                      Automation Excellence
                    </h3>
                    <p className="apple-body">
                      Great software delivery comes from well-designed CI/CD pipelines and automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
