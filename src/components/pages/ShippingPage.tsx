import { motion } from 'framer-motion';
import { Package, RefreshCw, Heart, Truck } from 'lucide-react';

export default function ShippingPage() {
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
            <span className="font-paragraph text-sm text-foreground">Shipping & Returns</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="font-heading text-6xl lg:text-7xl text-foreground"
          >
            Delivery & Returns
            <br />
            <span className="text-primary">Made Simple</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="font-paragraph text-lg text-secondary"
          >
            We want your shopping experience to be as smooth and joyful as possible
          </motion.p>
        </motion.div>
      </section>

      {/* Shipping Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Shipping Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-4xl text-foreground">
                Shipping Information
              </h2>
            </div>

            <div className="space-y-6 font-paragraph text-base text-secondary leading-relaxed">
              <div className="p-8 rounded-2xl bg-primary/5 space-y-4">
                <h3 className="font-heading text-2xl text-foreground">Standard Shipping</h3>
                <p>
                  <strong className="text-foreground">Delivery Time:</strong> 5-7 business days
                </p>
                <p>
                  <strong className="text-foreground">Cost:</strong> $5.99 (Free on orders over $75)
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-primary/5 space-y-4">
                <h3 className="font-heading text-2xl text-foreground">Express Shipping</h3>
                <p>
                  <strong className="text-foreground">Delivery Time:</strong> 2-3 business days
                </p>
                <p>
                  <strong className="text-foreground">Cost:</strong> $12.99
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-primary/5 space-y-4">
                <h3 className="font-heading text-2xl text-foreground">Overnight Shipping</h3>
                <p>
                  <strong className="text-foreground">Delivery Time:</strong> 1 business day
                </p>
                <p>
                  <strong className="text-foreground">Cost:</strong> $24.99
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-gold/5">
                <h3 className="font-heading text-2xl text-foreground mb-4">Processing Time</h3>
                <p>
                  All orders are processed within 1-2 business days. Orders placed on weekends 
                  or holidays will be processed the next business day. You'll receive a tracking 
                  number via email once your order ships.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Returns Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <RefreshCw className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-4xl text-foreground">
                Returns & Exchanges
              </h2>
            </div>

            <div className="space-y-6 font-paragraph text-base text-secondary leading-relaxed">
              <div className="p-8 rounded-2xl bg-primary/5 space-y-4">
                <h3 className="font-heading text-2xl text-foreground">30-Day Return Policy</h3>
                <p>
                  We want you to love your purchase! If you're not completely satisfied, 
                  you can return any item within 30 days of delivery for a full refund or exchange.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-primary/5 space-y-4">
                <h3 className="font-heading text-2xl text-foreground">Return Requirements</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Items must be unused and in original condition</li>
                  <li>Original packaging and tags must be intact</li>
                  <li>Proof of purchase required</li>
                  <li>Some items (final sale, personalized) are non-returnable</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-primary/5 space-y-4">
                <h3 className="font-heading text-2xl text-foreground">How to Return</h3>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Contact us at hello@bestieboxed.com to initiate a return</li>
                  <li>We'll send you a prepaid return label</li>
                  <li>Pack your item securely with original packaging</li>
                  <li>Drop off at any carrier location</li>
                  <li>Refund processed within 5-7 business days after we receive your return</li>
                </ol>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-gold/5">
                <h3 className="font-heading text-2xl text-foreground mb-4">Exchanges</h3>
                <p>
                  Need a different size or color? We're happy to help! Contact us and we'll 
                  expedite your exchange at no additional cost. Exchange items ship within 
                  1-2 business days of receiving your return.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-4xl text-foreground">
                Packaging & Care
              </h2>
            </div>

            <div className="p-8 rounded-2xl bg-primary/5 space-y-4 font-paragraph text-base text-secondary leading-relaxed">
              <p>
                Every BestieBoxed order is carefully packaged with love and attention to detail. 
                We use eco-friendly materials whenever possible and ensure your items arrive 
                in perfect condition.
              </p>
              <p>
                Your package will include care instructions for your products to help them 
                last longer and maintain their beauty.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
