// HPI 1.7-V
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Gift, ShoppingBag, ArrowRight, Star, Sun } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView, MotionValue } from 'framer-motion';
import { Image } from '@/components/ui/image';

// --- Utility Components ---

const SectionDivider = () => (
  <div className="w-full flex justify-center items-center py-12 opacity-20">
    <div className="h-px w-24 bg-foreground/50" />
    <div className="mx-4 text-foreground/50">✦</div>
    <div className="h-px w-24 bg-foreground/50" />
  </div>
);

const Marquee = ({ text, repeat = 4 }: { text: string; repeat?: number }) => {
  return (
    <div className="relative flex overflow-hidden bg-gradient-to-r from-accent-mint/10 via-primary/10 to-accent-pink/10 py-6 border-y border-primary/20">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="font-heading text-4xl text-primary/50 italic px-4">{text}</span>
            <Star className="w-6 h-6 text-accent-gold/60" />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex whitespace-nowrap absolute top-6 left-0"
        animate={{ x: [1000, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
         {/* Duplicate for seamless loop effect if needed, simplified above for robustness */}
      </motion.div>
    </div>
  );
};

// --- Core Components ---

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="bg-background min-h-screen overflow-clip selection:bg-primary/20 selection:text-primary-foreground">
      <style>{`
        .text-arch {
          font-variation-settings: "wdth" 100;
        }
        .clip-arch {
          clip-path: ellipse(150% 100% at 50% 0%);
        }
        .clip-scallop {
           --r: 20px;
           mask: 
             conic-gradient(from 45deg at calc(1.5*var(--r)) calc(1.5*var(--r)),#0000 25%,#000 0) 
              0 0/calc(3*var(--r)) calc(3*var(--r)),
             conic-gradient(from -135deg at calc(1.5*var(--r)) calc(1.5*var(--r)),#0000 25%,#000 0) 
              calc(1.5*var(--r)) 0/calc(3*var(--r)) calc(3*var(--r));
        }
      `}</style>
      {/* --- Hero Section: The Grand Reveal --- */}
      <section className="relative w-full min-h-[110vh] flex flex-col items-center pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-accent-mint/12 via-background to-accent-pink/8">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-b from-accent-mint/10 to-transparent" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-accent-pink/10 to-transparent" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-white rounded-full blur-3xl opacity-40 mix-blend-overlay" />
        </div>

        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-12"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full shadow-sm"
          >
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="font-paragraph text-sm tracking-widest uppercase text-foreground/80">Est. 2026 • Curated with Love</span>
          </motion.div>

          {/* Main Title - Arched Effect Simulation via Layout */}
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] tracking-tight"
            >
              <span className="block text-accent-mint">Small Joys,</span>
              <span className="block italic font-light text-accent-pink">Big Happiness</span>
            </motion.h1>
            
            {/* Decorative floating elements */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-12 lg:-right-24 text-accent-gold opacity-70"
            >
              <Sparkles className="w-16 h-16" />
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed font-noticia-text"
          >
            Discover personalized gift hampers, cozy corners, and moments worth celebrating. 
            We believe life should feel lighter, prettier, and full of little joys.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full justify-center"
          >

            <a 
              href="#hampers"
              className="group px-10 py-5 bg-primary text-white rounded-full hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              <span className="font-paragraph text-lg font-medium">Shop Now</span>
            </a>

            <Link 
              to="/about"
              className="group px-10 py-5 bg-white border border-secondary/20 text-foreground rounded-full hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <span className="font-paragraph text-lg text-destructive">Our Story</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Image - The "Box" Metaphor */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-[90rem] mt-20 aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-foreground/5 z-10 mix-blend-multiply pointer-events-none" />
          <Image 
            src="https://static.wixstatic.com/media/8ba94d_7cbb17887bc548b89f60da9d0a447f60~mv2.png?originWidth=1600&originHeight=896"
            alt="A curated collection of aesthetic items"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s]"
            width={1600}
          />
          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/40 to-transparent z-20 flex justify-between items-end">
            <div className="text-white">
              <p className="font-heading text-3xl md:text-4xl italic">The Seasonal Edit</p>
              <p className="font-paragraph text-sm opacity-90 mt-2">Curated for the romantic soul</p>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <ArrowRight className="w-6 h-6 text-white -rotate-45" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <Marquee text="Personalized Gift Hampers • Handcrafted Joy • Spread Happiness" />
      {/* --- Hamper Showcase Section --- */}
      <section id="hampers" className="w-full py-32 px-6 bg-gradient-to-b from-accent-mint/8 to-accent-pink/8">
        <div className="max-w-[120rem] mx-auto">
          <div className="text-center mb-20">
            <span className="font-paragraph text-sm text-primary tracking-widest uppercase mb-4 block">Our Specialty</span>
            <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-6">Personalized Gift Hampers</h2>
            <p className="font-paragraph text-lg text-secondary max-w-2xl mx-auto">
              Every hamper is thoughtfully curated and can be personalized to match your loved one's unique style and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: 'https://static.wixstatic.com/media/8ba94d_2e35e176f5c8440ab4fcd55b85919046~mv2.jpeg',
                title: 'Luxury Birthday Hamper',
                description: 'Premium curated gifts with personalized touches for unforgettable celebrations',
                color: 'from-accent-pink/25 to-accent-gold/15'
              },
              {
                image: 'https://static.wixstatic.com/media/8ba94d_2941cf6fcd5e437d979250065627bea1~mv2.jpeg',
                title: 'Elegant Gift Box',
                description: 'Sophisticated packaging with customizable contents for any occasion',
                color: 'from-accent-mint/25 to-primary/15'
              },
              {
                image: 'https://static.wixstatic.com/media/8ba94d_a4a5d3192b314f69b6aeb73f5945bd7d~mv2.jpeg',
                title: 'Minimalist Aesthetic',
                description: 'Clean, modern designs perfect for the contemporary gift-giver',
                color: 'from-primary/25 to-accent-mint/15'
              },
              {
                image: 'https://static.wixstatic.com/media/8ba94d_a0010831c9fd4221b2eeff1617441aa9~mv2.jpeg',
                title: 'Romantic Collection',
                description: 'Soft, romantic hampers with premium flowers and luxury items',
                color: 'from-accent-pink/25 to-primary/15'
              },
              {
                image: 'https://static.wixstatic.com/media/8ba94d_4d9d3e930406499c971ac04c3dffc4aa~mv2.jpeg',
                title: 'Celebration Deluxe',
                description: 'Bold, vibrant hampers for those who love to make a statement',
                color: 'from-accent-gold/25 to-accent-pink/15'
              },
              {
                image: 'https://static.wixstatic.com/media/8ba94d_1519a36b976541249386deb202774e09~mv2.jpeg',
                title: 'Personalized Luxury',
                description: 'Fully customizable hampers tailored to your exact specifications',
                color: 'from-primary/25 to-accent-gold/15'
              }
            ].map((hamper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${hamper.color} backdrop-blur-sm border border-white/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <Image
                    src={hamper.image}
                    alt={hamper.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    width={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-heading text-2xl text-foreground">{hamper.title}</h3>
                  <p className="font-paragraph text-sm text-secondary leading-relaxed">{hamper.description}</p>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-primary font-paragraph text-sm font-medium pt-2"
                  >
                    Customize Now <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="font-paragraph text-lg text-secondary mb-6">
              ✨ Ready-to-give hampers launching soon! Pre-order now to be among the first to receive them.
            </p>
            <Link
              to="/store"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-accent-pink text-white rounded-full font-paragraph font-medium hover:shadow-lg transition-all hover:scale-105"
            >
              <Gift className="w-5 h-5" />
              Explore All Hampers
            </Link>
          </motion.div>
        </div>
      </section>
      {/* --- Values Section: Sticky Stack --- */}
      <section className="relative w-full max-w-[120rem] mx-auto px-4 py-32">
        <div className="text-center mb-24">
          <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-6">What We Believe In</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="flex flex-col gap-32 max-w-6xl mx-auto">
          {[
            {
              icon: Heart,
              title: 'Soft Living',
              description: 'Embrace gentleness and create spaces that nurture your soul with cozy, thoughtful pieces.',
              color: 'bg-[#FDF2F8]', // Soft Pink
              accent: 'text-pink-400',
              imgPos: 'right'
            },
            {
              icon: Sparkles,
              title: 'Aesthetic Joy',
              description: 'Surround yourself with beauty that makes everyday moments feel special and intentional.',
              color: 'bg-[#F5F3FF]', // Soft Purple
              accent: 'text-violet-400',
              imgPos: 'left'
            },
            {
              icon: Gift,
              title: 'Thoughtful Gifting',
              description: 'Show love through carefully curated gifts that speak to the heart and spark happiness.',
              color: 'bg-[#FFFBEB]', // Soft Yellow
              accent: 'text-amber-400',
              imgPos: 'right'
            }
          ].map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </section>

      {/* --- Split Story Section (Inspiration Image Homage) --- */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row">
        {/* Left: Mint/Green equivalent (using Primary/Light) */}
        <div className="w-full lg:w-1/2 bg-[#F0FDF4] flex items-center justify-center p-12 lg:p-24 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-30" 
                style={{ backgroundImage: 'radial-gradient(#D4A5D4 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
           
           <div className="relative z-10 max-w-xl space-y-8">
             <div className="inline-block p-3 bg-white rounded-2xl shadow-sm rotate-3">
               <Sun className="w-8 h-8 text-accent-gold" />
             </div>
             <h2 className="font-heading text-5xl lg:text-7xl text-foreground leading-tight">
               Two Besties,<br/>
               <span className="text-primary italic">One Vision.</span>
             </h2>
             <p className="font-paragraph text-lg text-secondary leading-relaxed">
               BestieBoxed began as a shared dream between friends who wanted to make the world a little softer. 
               We curate items that we would gift to each other—things that feel like a warm hug or a sunny afternoon.
             </p>
             <Link 
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-white rounded-lg hover:bg-primary transition-colors font-paragraph"
              >
                Read Our Full Story
              </Link>
           </div>
        </div>

        {/* Right: Pink equivalent (using Primary) */}
        <div className="w-full lg:w-1/2 bg-primary/10 flex items-center justify-center p-12 lg:p-24 relative">
           <div className="relative w-full max-w-md aspect-[4/5]">
             {/* Decorative "Box" Elements */}
             <div className="absolute inset-0 bg-white rounded-t-full rounded-b-[3rem] shadow-2xl transform -rotate-2 z-10 overflow-hidden border-8 border-white">
                <Image 
                  src="https://static.wixstatic.com/media/8ba94d_90acd90458be48518cb9bfb66fc6e498~mv2.png?originWidth=768&originHeight=960"
                  alt="Founders"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-accent-gold/20 rounded-full blur-3xl z-0" />
             <div className="absolute top-12 -left-12 w-32 h-32 bg-primary/30 rounded-full blur-2xl z-0" />
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 z-20 bg-white p-6 rounded-full shadow-xl rotate-12"
             >
               <Heart className="w-8 h-8 text-destructive fill-destructive/20" />
             </motion.div>
           </div>
        </div>
      </section>
      {/* --- CTA Section --- */}
      <section className="w-full py-32 px-6 bg-foreground text-background overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full" 
                style={{ backgroundImage: 'linear-gradient(45deg, #D4A5D4 25%, transparent 25%, transparent 75%, #D4A5D4 75%, #D4A5D4), linear-gradient(45deg, #D4A5D4 25%, transparent 25%, transparent 75%, #D4A5D4 75%, #D4A5D4)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-6xl md:text-8xl text-white mb-6">
              Ready to Unbox<br/>
              <span className="text-primary italic">Happiness?</span>
            </h2>
            <p className="font-paragraph text-xl text-white/60 max-w-2xl mx-auto">
              Join our community of dreamers and soft-living enthusiasts. Your daily dose of joy is just a click away.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/store"
              className="inline-flex items-center gap-4 px-12 py-6 bg-white text-foreground rounded-full font-paragraph text-xl font-medium hover:bg-primary hover:text-white transition-colors shadow-2xl shadow-white/10"
            >
              <ShoppingBag className="w-6 h-6" />
              Shop The Collection
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// --- Sub-Components ---

function ValueCard({ value, index, }: { value: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px", once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative flex flex-col ${value.imgPos === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${value.color} rotate-3 group-hover:rotate-6 transition-transform duration-500`}>
          <value.icon className={`w-10 h-10 ${value.accent}`} />
        </div>
        <h3 className="font-heading text-4xl md:text-5xl text-foreground">{value.title}</h3>
        <p className="font-paragraph text-lg text-secondary leading-relaxed max-w-md mx-auto md:mx-0">
          {value.description}
        </p>
      </div>

      {/* Visual Content */}
      <div className="flex-1 w-full">
        <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden">
          <div className={`absolute inset-0 ${value.color} opacity-50`} />
          <Image 
            src="https://static.wixstatic.com/media/8ba94d_12c44badae024c7aa3e1b301e4311bf4~mv2.png?originWidth=576&originHeight=576"
            alt={value.title}
            className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 border-[1px] border-white/20 rounded-[2rem] m-4" />
        </div>
      </div>
    </motion.div>
  );
}
