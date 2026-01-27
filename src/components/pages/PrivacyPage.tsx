import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
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
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-paragraph text-sm text-foreground">Legal</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="font-heading text-6xl lg:text-7xl text-foreground"
          >
            Privacy
            <br />
            <span className="text-primary">Policy</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="font-paragraph text-base text-secondary"
          >
            Last updated: January 27, 2026
          </motion.p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-12 font-paragraph text-base text-secondary leading-relaxed"
        >
          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Introduction</h2>
            <p>
              At BestieBoxed, we value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you visit our 
              website or make a purchase.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Name, email address, and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Order history and preferences</li>
              <li>Communications with our customer service team</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and customer experience</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Service providers who help us operate our business (shipping, payment processing, etc.)</li>
              <li>Law enforcement when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information. 
              All payment transactions are encrypted using SSL technology. However, no method of 
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience, analyze 
              site traffic, and personalize content. You can control cookies through your browser 
              settings, but disabling them may affect site functionality.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to certain processing of your data</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              significant changes by posting the new policy on this page and updating the 
              "Last updated" date.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your personal 
              information, please contact us at:
            </p>
            <p className="text-foreground">
              Email: hello@bestieboxed.com
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
