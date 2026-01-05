import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "FAQs - Aam Pannaa Creations | Common Questions Answered",
  description: "Find answers to frequently asked questions about our web development, branding, social media management, and digital services.",
  keywords: ["FAQs", "Questions", "Web Development", "Digital Marketing", "Branding"],
};

const faqCategories = [
  {
    category: "General Questions",
    faqs: [
      {
        question: "What services does Aam Pannaa Creations offer?",
        answer: "We offer a comprehensive range of digital services including web development, branding and design, social media management, content creation, SEO optimization, podcast editing, and business consulting for startups and women-led ventures.",
      },
      {
        question: "Where are you located?",
        answer: "We are based in Ghaziabad, Delhi NCR, India. However, we serve clients across India and internationally through our remote collaboration capabilities.",
      },
      {
        question: "How can I get started with your services?",
        answer: "Simply reach out to us through our contact form, email, or phone. We'll schedule a free consultation to understand your needs and provide a customized solution tailored to your business goals.",
      },
      {
        question: "What industries do you work with?",
        answer: "We work with diverse industries including startups, e-commerce, hospitality, education, healthcare, fashion, and personal brands. We specialize in helping women-led ventures and emerging businesses establish their digital presence.",
      },
    ],
  },
  {
    category: "Services & Pricing",
    faqs: [
      {
        question: "How much do your services cost?",
        answer: "Our pricing varies based on project scope, complexity, and requirements. We offer flexible packages and custom solutions. Contact us for a detailed quote tailored to your specific needs and budget.",
      },
      {
        question: "Do you offer package deals or monthly retainers?",
        answer: "Yes! We offer both project-based packages and monthly retainer options for ongoing services like social media management, content creation, and website maintenance. This provides better value and consistent support.",
      },
      {
        question: "What is your typical project timeline?",
        answer: "Timelines vary by project. A basic website takes 2-4 weeks, while comprehensive branding projects may take 4-8 weeks. We provide detailed timelines during our consultation and keep you updated throughout the process.",
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer: "Absolutely! We offer maintenance packages, technical support, and consultation services to ensure your digital assets continue to perform optimally. We're committed to long-term partnerships with our clients.",
      },
    ],
  },
  {
    category: "Web Development",
    faqs: [
      {
        question: "What technologies do you use for web development?",
        answer: "We use modern, industry-standard technologies including Next.js, React, TypeScript, Tailwind CSS, and Node.js. We choose the best tech stack based on your project requirements for optimal performance and scalability.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Yes, all our websites are fully responsive and mobile-optimized. We follow a mobile-first approach to ensure your site looks and performs beautifully on all devices and screen sizes.",
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Definitely! We specialize in website redesigns, whether you need a complete overhaul or specific improvements. We'll analyze your current site and create a modern, user-friendly design that aligns with your brand.",
      },
      {
        question: "Do you provide website hosting and domain services?",
        answer: "Yes, we can help you with domain registration, hosting setup, and ongoing technical management. We work with reliable hosting providers to ensure your website is fast, secure, and always available.",
      },
    ],
  },
  {
    category: "Branding & Design",
    faqs: [
      {
        question: "What does your branding package include?",
        answer: "Our branding packages include logo design, color palette, typography selection, brand guidelines, business cards, social media templates, and other collateral. We create a cohesive visual identity that represents your business values.",
      },
      {
        question: "How many logo concepts will I receive?",
        answer: "We typically provide 3-5 initial logo concepts based on your brief. You'll have opportunities for revisions to refine the chosen concept until you're completely satisfied with the final design.",
      },
      {
        question: "Can you help with personal branding?",
        answer: "Yes! We specialize in personal branding for entrepreneurs, coaches, consultants, and professionals. We help you establish a strong, authentic presence that resonates with your target audience.",
      },
      {
        question: "What file formats will I receive for my designs?",
        answer: "You'll receive your designs in multiple formats including PNG, JPG, SVG, PDF, and source files (AI/PSD). This ensures you have the right format for any application, from web to print.",
      },
    ],
  },
  {
    category: "Social Media & Content",
    faqs: [
      {
        question: "Which social media platforms do you manage?",
        answer: "We manage all major platforms including Instagram, Facebook, LinkedIn, Twitter/X, Pinterest, and YouTube. We recommend the best platforms based on your target audience and business goals.",
      },
      {
        question: "How often will you post on my social media accounts?",
        answer: "Posting frequency depends on your package and strategy. Typically, we post 3-5 times per week per platform with a mix of promotional, educational, and engaging content. We create a custom content calendar for your approval.",
      },
      {
        question: "Do you create content or should I provide it?",
        answer: "We handle complete content creation including graphics, captions, hashtags, and scheduling. However, we welcome any content, ideas, or brand assets you'd like to share to maintain your authentic voice.",
      },
      {
        question: "How do you measure social media success?",
        answer: "We track key metrics including engagement rate, reach, follower growth, website traffic, and conversions. We provide monthly reports with insights and recommendations for continuous improvement.",
      },
    ],
  },
  {
    category: "Process & Communication",
    faqs: [
      {
        question: "How does your onboarding process work?",
        answer: "After our initial consultation, we'll send you a detailed proposal and contract. Once approved, we'll conduct a kickoff meeting to gather requirements, share our process, and establish communication channels and timelines.",
      },
      {
        question: "How often will we communicate during the project?",
        answer: "We maintain regular communication through your preferred channels (email, calls, WhatsApp). We provide weekly updates for ongoing projects and are always available for urgent queries or feedback.",
      },
      {
        question: "What do you need from me to get started?",
        answer: "We'll need your brand assets (if any), content, preferences, goals, and any specific requirements. We'll provide a detailed questionnaire to help us understand your vision and create the perfect solution.",
      },
      {
        question: "What if I need revisions?",
        answer: "Revisions are included in all our packages. We work closely with you to ensure the final deliverable meets your expectations. The number of revision rounds depends on your package tier.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFFDE8] to-[#FFFBD2]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#FFFDE8] to-[#FFFBD2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bricolage font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we can help transform your digital presence.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Title */}
              <div className="border-l-4 border-[#FF69B4] pl-4">
                <h2 className="font-bricolage font-bold text-2xl md:text-3xl text-gray-900">
                  {category.category}
                </h2>
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`item-${categoryIndex}-${faqIndex}`}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="hover:no-underline py-5 text-left">
                      <span className="font-bricolage font-semibold text-lg text-gray-900 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#FF69B4] to-[#FFB6C1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bricolage font-bold text-3xl md:text-4xl text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {`We're here to help! Reach out to us and we'll get back to you as soon as possible.`}
          </p>
          <Link
            href="/#contact-form"
            className="inline-block px-8 py-4 bg-white text-[#FF69B4] font-bricolage font-bold text-lg rounded-full shadow-[0px_8px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,0.3)] transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}