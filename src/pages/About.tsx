
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
              Software Engineer & Problem Solver
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Hello! I'm Alex Chen, a software engineer based in Austin, TX.
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
                    alt="Alex Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Austin, TX</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Current Role</h3>
                    <p className="text-muted-foreground">Software Engineer II at Dell Technologies</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Focus Areas</h3>
                    <p className="text-muted-foreground">Enterprise Software, Cloud Solutions, Developer Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-16">
              <div ref={bioRef} className="opacity-0">
                <h2 className="text-2xl font-bold mb-6">Biography</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    I'm a software engineer with 5+ years of experience in building enterprise-grade applications. 
                    Currently, I work at Dell Technologies where I architect and implement scalable solutions for our enterprise clients.
                  </p>
                  <p>
                    My journey in technology began at the University of Texas, where I studied Computer Science and developed a passion for solving complex problems through elegant code. Since then, I've worked across the full software stack, from frontend applications to backend services and infrastructure.
                  </p>
                  <p>
                    At Dell, I'm part of a team that builds mission-critical software used by Fortune 500 companies. My focus is on creating robust, efficient systems that can handle large-scale data processing while maintaining exceptional performance and reliability.
                  </p>
                  <p>
                    Outside of my professional work, I contribute to open-source projects and mentor junior developers. I believe in continuous learning and sharing knowledge with the broader technology community.
                  </p>
                </div>
              </div>

              <div ref={educationRef} className="opacity-0">
                <h2 className="text-2xl font-bold mb-6">Education & Certifications</h2>
                <div className="space-y-6">
                  <Card className="bg-secondary border-none">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">B.S. in Computer Science</h3>
                          <p className="text-muted-foreground">University of Texas at Austin</p>
                          <p className="text-sm text-muted-foreground">2013 - 2017</p>
                          <p className="mt-2">
                            Graduated with honors. Focused on distributed systems and artificial intelligence.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary border-none">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">AWS Certified Solutions Architect</h3>
                          <p className="text-muted-foreground">Amazon Web Services</p>
                          <p className="text-sm text-muted-foreground">2020 - Present</p>
                          <p className="mt-2">
                            Professional-level certification for designing distributed systems on AWS.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary border-none">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Google Professional Cloud Developer</h3>
                          <p className="text-muted-foreground">Google Cloud</p>
                          <p className="text-sm text-muted-foreground">2021 - Present</p>
                          <p className="mt-2">
                            Expertise in building and deploying applications on Google Cloud Platform.
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
                        Quality First
                      </h3>
                      <p className="text-muted-foreground">
                        I believe in writing clean, maintainable code that stands the test of time.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card hover-scale">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                        <Heart className="h-5 w-5 text-primary" />
                        User-Centered
                      </h3>
                      <p className="text-muted-foreground">
                        Technical solutions should address real human needs and problems.
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
                        The tech field evolves rapidly, and I'm committed to growing my skills.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card hover-scale">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-primary" />
                        Team Excellence
                      </h3>
                      <p className="text-muted-foreground">
                        Great software comes from collaborative teams that communicate effectively.
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
