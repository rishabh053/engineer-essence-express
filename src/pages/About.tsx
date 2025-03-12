
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
      <section className="pt-24 pb-12">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">About Me</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Software Engineer & Cloud Infrastructure Specialist
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Hello! I'm Rishabh Raj, a software engineer based in Bengaluru, India.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="aspect-square rounded-md overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Rishabh Raj" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Bengaluru, Karnataka, India</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Current Role</h3>
                    <p className="text-muted-foreground">Software Engineer 2 at Dell Technologies</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Focus Areas</h3>
                    <p className="text-muted-foreground">Cloud Infrastructure, DevOps, Container Orchestration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-16">
              <div ref={bioRef} className="opacity-0">
                <h2 className="text-2xl font-bold mb-6">Biography</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    I'm a software engineer with expertise in cloud infrastructure and DevOps practices. 
                    Currently, I work at Dell Technologies where I design and implement containerized solutions for enterprise applications.
                  </p>
                  <p>
                    My journey in technology began at C.V. Raman College of Engineering, where I studied Information Technology and developed a passion for building scalable systems. Since then, I've worked across different aspects of the software development lifecycle, with a focus on containerization and automation.
                  </p>
                  <p>
                    At Dell, I'm part of a team that develops cloud-native solutions for enterprise clients. My focus is on creating robust, efficient infrastructure using technologies like Kubernetes, Docker, and OpenShift while maintaining exceptional performance and reliability.
                  </p>
                  <p>
                    Before joining Dell, I worked at Wipro as a Project Engineer, where I gained valuable experience in software development and began specializing in DevOps practices and container orchestration.
                  </p>
                </div>
              </div>

              <div ref={educationRef} className="opacity-0">
                <h2 className="text-2xl font-bold mb-6">Education & Work Experience</h2>
                <div className="space-y-6">
                  <Card className="bg-secondary border-none">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Software Engineer 2</h3>
                          <p className="text-muted-foreground">Dell Technologies</p>
                          <p className="text-sm text-muted-foreground">Nov 2022 - Present</p>
                          <p className="mt-2">
                            Building cloud infrastructure solutions and container orchestration platforms.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary border-none">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Project Engineer</h3>
                          <p className="text-muted-foreground">Wipro</p>
                          <p className="text-sm text-muted-foreground">Sep 2020 - Oct 2022</p>
                          <p className="mt-2">
                            Worked on DevOps automation and CI/CD pipeline implementation.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary border-none">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Bachelor of Technology - BTech, Information Technology</h3>
                          <p className="text-muted-foreground">C.V. Raman College of Engineering</p>
                          <p className="text-sm text-muted-foreground">Apr 2016 - Apr 2020</p>
                          <p className="mt-2">
                            Focused on software engineering and cloud computing technologies.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div ref={valuesRef} className="opacity-0">
                <h2 className="text-2xl font-bold mb-6">Professional Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="glass-card hover-scale">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        Infrastructure as Code
                      </h3>
                      <p className="text-muted-foreground">
                        I believe in automating infrastructure deployment for consistency and reliability.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card hover-scale">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                        <Heart className="h-5 w-5 text-primary" />
                        Developer Experience
                      </h3>
                      <p className="text-muted-foreground">
                        Technical solutions should enhance developer productivity and satisfaction.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card hover-scale">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        Continuous Learning
                      </h3>
                      <p className="text-muted-foreground">
                        Cloud technologies evolve rapidly, and I'm committed to growing my expertise.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card hover-scale">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        Automation Excellence
                      </h3>
                      <p className="text-muted-foreground">
                        Great software delivery comes from well-designed CI/CD pipelines and automation.
                      </p>
                    </CardContent>
                  </Card>
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
