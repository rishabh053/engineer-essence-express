
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
      <section className="apple-section apple-section-hero bg-gradient-to-b from-background to-apple-gray-50/30">
        <div className="apple-container">
          <div className="max-w-5xl mx-auto text-center apple-spacing-lg">
            <div className="apple-skill mb-8 w-fit mx-auto animate-fade-in">Contact</div>
            <h1 className="apple-hero mb-8 text-balance animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Get in Touch
            </h1>
            <p className="apple-subtitle mb-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Have a question or want to work together? Feel free to reach out.
            </p>
          </div>
        </div>
      </section>

      <section className="apple-section apple-section-padding">
        <div className="apple-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="apple-spacing-2xl animate-slide-right">
              <h2 className="apple-headline">Contact Information</h2>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="apple-card p-8 group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center gap-6">
                      <div className="bg-accent/10 p-4 rounded-full text-accent group-hover:bg-accent/20 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="apple-caption uppercase tracking-wide mb-1">{info.label}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="apple-body hover:text-accent transition-colors"
                            target={info.link.startsWith('mailto') ? undefined : '_blank'}
                            rel="noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="apple-body">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="apple-card p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="apple-title mb-6">Availability</h3>
                <p className="apple-body mb-8">
                  I'm currently open to:
                </p>
                <ul className="apple-spacing-sm">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <span className="apple-body">Full-time senior engineering positions</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <span className="apple-body">Technical consulting opportunities</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <span className="apple-body">Speaking engagements at tech conferences</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <span className="apple-body">Mentoring and educational collaborations</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="apple-headline mb-12">Send Me a Message</h2>
              <div className="apple-card p-10">
                <form onSubmit={handleSubmit} className="apple-spacing-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="apple-spacing-xs">
                      <label htmlFor="name" className="apple-caption uppercase tracking-wide">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="rounded-2xl border-border/30 bg-apple-gray-50/50 focus:border-accent focus:bg-background transition-colors h-12"
                        required
                      />
                    </div>
                    <div className="apple-spacing-xs">
                      <label htmlFor="email" className="apple-caption uppercase tracking-wide">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="rounded-2xl border-border/30 bg-apple-gray-50/50 focus:border-accent focus:bg-background transition-colors h-12"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="apple-spacing-xs">
                    <label htmlFor="subject" className="apple-caption uppercase tracking-wide">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="rounded-2xl border-border/30 bg-apple-gray-50/50 focus:border-accent focus:bg-background transition-colors h-12"
                      required
                    />
                  </div>
                  
                  <div className="apple-spacing-xs">
                    <label htmlFor="message" className="apple-caption uppercase tracking-wide">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={6}
                      className="rounded-2xl border-border/30 bg-apple-gray-50/50 focus:border-accent focus:bg-background transition-colors resize-none"
                      required
                    />
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="w-full apple-button-primary">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
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
