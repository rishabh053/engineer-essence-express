
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Linkedin, Github, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "alex@example.com",
      link: "mailto:alex@example.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Austin, TX",
      link: null
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/alexchen",
      link: "https://linkedin.com"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/alexchen",
      link: "https://github.com"
    }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="skill-badge mb-8 w-fit animate-fade-in">Contact</div>
            <h1 className="hero-text mb-8 text-balance animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Have a question or want to work together? Feel free to reach out.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12 animate-slide-right">
              <h2 className="section-title">Contact Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="apple-card p-6 group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:bg-primary/20 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground">{info.label}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-foreground hover:text-primary transition-colors font-medium"
                            target={info.link.startsWith('mailto') ? undefined : '_blank'}
                            rel="noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="apple-card p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold mb-4">Availability</h3>
                <p className="text-muted-foreground mb-6">
                  I'm currently open to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Full-time senior engineering positions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Technical consulting opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Speaking engagements at tech conferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Mentoring and educational collaborations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="section-title mb-12">Send Me a Message</h2>
              <div className="apple-card p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="rounded-2xl border-border/50 bg-muted/30 focus:border-primary focus:bg-background transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="rounded-2xl border-border/50 bg-muted/30 focus:border-primary focus:bg-background transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="rounded-2xl border-border/50 bg-muted/30 focus:border-primary focus:bg-background transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={6}
                      className="rounded-2xl border-border/50 bg-muted/30 focus:border-primary focus:bg-background transition-colors resize-none"
                      required
                    />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full apple-button-primary">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
