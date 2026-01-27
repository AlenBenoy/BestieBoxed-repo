import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const faqs = [
    {
      category: 'Orders & Shipping',
      questions: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping takes 5-7 business days, express shipping takes 2-3 business days, and overnight shipping takes 1 business day. All orders are processed within 1-2 business days.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Currently, we only ship within the United States. We\'re working on expanding our shipping options to serve our international besties soon!'
        },
        {
          question: 'How can I track my order?',
          answer: 'Once your order ships, you\'ll receive a tracking number via email. You can use this number to track your package on the carrier\'s website.'
        },
        {
          question: 'What if my package is lost or damaged?',
          answer: 'If your package is lost or arrives damaged, please contact us immediately at hello@bestieboxed.com. We\'ll work with the carrier and send you a replacement right away.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy. Items must be unused, in original condition with tags attached. Contact us to initiate a return and we\'ll send you a prepaid return label.'
        },
        {
          question: 'How do I exchange an item?',
          answer: 'Contact us at hello@bestieboxed.com with your order number and the item you\'d like to exchange. We\'ll expedite your exchange at no additional cost.'
        },
        {
          question: 'Are there any items that can\'t be returned?',
          answer: 'Final sale items, personalized products, and items marked as non-returnable cannot be returned. These items are clearly marked on the product page.'
        },
        {
          question: 'How long does it take to process a refund?',
          answer: 'Refunds are processed within 5-7 business days after we receive your return. The refund will be issued to your original payment method.'
        }
      ]
    },
    {
      category: 'Products',
      questions: [
        {
          question: 'Are your products ethically sourced?',
          answer: 'Yes! We carefully select products from suppliers who share our values of quality, sustainability, and ethical practices. We believe in supporting brands that care.'
        },
        {
          question: 'Do you restock sold-out items?',
          answer: 'We do our best to restock popular items, but some products are limited edition. Sign up for our newsletter or follow us on social media for restock announcements.'
        },
        {
          question: 'Can I request a custom product?',
          answer: 'While we don\'t currently offer custom products, we love hearing your ideas! Send us your suggestions at hello@bestieboxed.com and we\'ll consider them for future collections.'
        },
        {
          question: 'How do I care for my products?',
          answer: 'Each product comes with specific care instructions. Generally, we recommend following the care label and treating your items gently to ensure they last.'
        }
      ]
    },
    {
      category: 'Account & Payment',
      questions: [
        {
          question: 'Do I need an account to place an order?',
          answer: 'No, you can checkout as a guest. However, creating an account allows you to track orders, save your favorite items, and checkout faster in the future.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay for a secure and convenient checkout experience.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Absolutely! We use industry-standard encryption and secure payment processing to protect your information. We never store your full credit card details.'
        },
        {
          question: 'Can I use multiple discount codes?',
          answer: 'Only one discount code can be applied per order. If you have multiple codes, we recommend using the one that gives you the best savings.'
        }
      ]
    }
  ];

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
            <span className="font-paragraph text-sm text-foreground">Help Center</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="font-heading text-6xl lg:text-7xl text-foreground"
          >
            Frequently Asked
            <br />
            <span className="text-primary">Questions</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="font-paragraph text-lg text-secondary"
          >
            Find answers to common questions about orders, shipping, returns, and more
          </motion.p>
        </motion.div>
      </section>

      {/* FAQ Content */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <h2 className="font-heading text-4xl text-foreground">
                {category.category}
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem 
                    key={faqIndex} 
                    value={`item-${categoryIndex}-${faqIndex}`}
                    className="border border-secondary/10 rounded-2xl px-8 bg-background hover:bg-primary/5 transition-colors"
                  >
                    <AccordionTrigger className="font-heading text-xl text-foreground hover:text-primary py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-paragraph text-base text-secondary leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full max-w-[100rem] mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary/20 via-accent-gold/10 to-primary/20 p-16 text-center"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-heading text-4xl text-foreground">
              Still Have Questions?
            </h2>
            <p className="font-paragraph text-lg text-secondary">
              We're here to help! Reach out to our friendly customer service team
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-paragraph text-base rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
          
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-primary/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-accent-gold/20 rounded-full" />
        </motion.div>
      </section>
    </div>
  );
}
