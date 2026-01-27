import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function TermsPage() {
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
            <FileText className="w-4 h-4 text-primary" />
            <span className="font-paragraph text-sm text-foreground">Legal</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="font-heading text-6xl lg:text-7xl text-foreground"
          >
            Terms of
            <br />
            <span className="text-primary">Service</span>
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
            <h2 className="font-heading text-3xl text-foreground">Agreement to Terms</h2>
            <p>
              By accessing and using the BestieBoxed website, you agree to be bound by these Terms 
              of Service and all applicable laws and regulations. If you do not agree with any of 
              these terms, you are prohibited from using this site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on BestieBoxed's website 
              for personal, non-commercial use only. This license does not include:
            </p>
            <ul className="space-y-2 list-disc list-inside ml-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for commercial purposes</li>
              <li>Attempting to reverse engineer any software on the site</li>
              <li>Removing copyright or proprietary notations</li>
              <li>Transferring materials to another person or server</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Product Information</h2>
            <p>
              We strive to provide accurate product descriptions, images, and pricing. However, 
              we do not warrant that product descriptions or other content is accurate, complete, 
              reliable, or error-free. We reserve the right to correct any errors and to change 
              or update information at any time without prior notice.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Pricing and Payment</h2>
            <p>
              All prices are in USD and are subject to change without notice. We reserve the right 
              to refuse or cancel any order for any reason, including pricing errors. Payment must 
              be received before order fulfillment. We accept major credit cards, PayPal, and Apple Pay.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Shipping and Delivery</h2>
            <p>
              We aim to process and ship orders within 1-2 business days. Delivery times vary based 
              on shipping method selected. We are not responsible for delays caused by shipping 
              carriers or customs. Risk of loss passes to you upon delivery to the carrier.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Returns and Refunds</h2>
            <p>
              Our return policy allows returns within 30 days of delivery. Items must be unused 
              and in original condition. Refunds are processed within 5-7 business days of receiving 
              the return. Shipping costs are non-refundable unless the return is due to our error.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">User Accounts</h2>
            <p>
              If you create an account, you are responsible for maintaining the confidentiality of 
              your account information and password. You agree to accept responsibility for all 
              activities that occur under your account. We reserve the right to refuse service or 
              terminate accounts at our discretion.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, 
              is the property of BestieBoxed and is protected by copyright and trademark laws. 
              You may not reproduce, distribute, or create derivative works without our express 
              written permission.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Limitation of Liability</h2>
            <p>
              BestieBoxed shall not be liable for any indirect, incidental, special, or consequential 
              damages arising out of or in connection with your use of the website or products. Our 
              total liability shall not exceed the amount paid by you for the product in question.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the 
              United States, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be 
              effective immediately upon posting. Your continued use of the website following any 
              changes constitutes acceptance of those changes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-3xl text-foreground">Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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
