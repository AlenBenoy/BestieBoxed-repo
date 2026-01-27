import { motion } from 'framer-motion';
import { Heart, Sparkles, Users } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function AboutPage() {
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
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full"
          >
            <Heart className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="font-paragraph text-sm text-foreground">Our Story</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="font-heading text-6xl lg:text-7xl text-foreground"
          >
            Life Deserves to Feel
            <br />
            <span className="text-primary">Beautiful</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="font-paragraph text-lg text-secondary leading-relaxed"
          >
            BestieBoxed was born from a simple belief: that everyday moments deserve to be celebrated, 
            that comfort can be beautiful, and that small joys make life worth living.
          </motion.p>
        </motion.div>
      </section>
      {/* Story Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-5xl text-foreground">
              Where It All Began
            </h2>
            <div className="space-y-4 font-paragraph text-lg text-secondary leading-relaxed">
              <p className="text-sm">We didn't start this brand with a big plan. We started it because we were tired. Tired of the corporate rush, endless deadlines and days that looked successful on paper but felt empty in real life. Somewhere between meetings, we realized we wanted something different, a life that felt lighter, softer, and more beautiful.We have</p>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent-gold/10">
              <Image 
                src="https://static.wixstatic.com/media/8ba94d_37a6d75134974755872d9a2940f6ccde~mv2.png?originWidth=576&originHeight=704"
                alt="BestieBoxed aesthetic lifestyle"
                className="w-full h-full object-cover"
                width={600}
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Values Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl text-foreground mb-6">
            What Drives Us
          </h2>
          <p className="font-paragraph text-lg text-secondary max-w-2xl mx-auto">
            Our values shape every decision we make and every product we curate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: Heart,
              title: 'Intentional Living',
              description: 'We believe in choosing quality over quantity, beauty over clutter, and moments over things. Every item we offer is selected with care and purpose.'
            },
            {
              icon: Sparkles,
              title: 'Aesthetic Excellence',
              description: 'Beauty matters. We curate products that not only serve a purpose but also bring visual joy and elevate your everyday spaces.'
            },
            {
              icon: Users,
              title: 'Community First',
              description: 'Our customers are our besties. We build relationships, not transactions, and create a space where everyone feels welcome and inspired.'
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="text-center space-y-6 p-8 rounded-2xl bg-primary/5"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                <value.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading text-3xl text-foreground">{value.title}</h3>
              <p className="font-paragraph text-base text-secondary leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Mission Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/20 via-accent-gold/10 to-primary/20 p-16 text-center"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading text-5xl text-foreground">
              Our Mission
            </h2>
            <p className="font-paragraph text-lg text-secondary leading-relaxed">
              To inspire people to romanticize their lives by providing thoughtfully curated products 
              that bring comfort, beauty, and joy to everyday moments. We're here to remind you that 
              life is meant to be savored, celebrated, and made a little prettier along the way.
            </p>
          </div>
          
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-primary/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-accent-gold/20 rounded-full" />
        </motion.div>
      </section>
    </div>
  );
}
