import { motion } from 'framer-motion';
import { Mail, MessageCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log('Form submitted:', formData);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-24">
        <motion.div
          initial="initial"
          animate="animate"
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full"
          >
            <Heart className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="font-paragraph text-sm text-foreground">Get In Touch</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="font-heading text-6xl lg:text-7xl text-foreground"
          >
            We'd Love to
            <br />
            <span className="text-primary">Hear From You</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="font-paragraph text-lg text-secondary"
          >
            Have a question, suggestion, or just want to say hello? 
            We're here and happy to chat!
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading text-4xl text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="font-paragraph text-base text-secondary">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-paragraph text-sm text-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-paragraph text-sm text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="font-paragraph text-sm text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-paragraph text-sm text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-heading text-4xl text-foreground mb-4">
                Other Ways to Connect
              </h2>
              <p className="font-paragraph text-base text-secondary">
                Choose the method that works best for you
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  title: 'Email Us',
                  description: 'Drop us a line anytime',
                  contact: 'droptobestieboxed@gmail.com',
                  link: 'mailto:droptobestieboxed@gmail.com'
                },
                
              ].map((method, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-primary/5 space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                      <method.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl text-foreground">
                        {method.title}
                      </h3>
                      <p className="font-paragraph text-sm text-secondary">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <a 
                    href={method.link}
                    className="inline-block font-paragraph text-base text-primary hover:text-primary/80 transition-colors"
                  >
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-gold/5 space-y-4">
              <h3 className="font-heading text-2xl text-foreground">
                Customer Support Hours
              </h3>
              <div className="space-y-2 font-paragraph text-base text-secondary">
                <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
