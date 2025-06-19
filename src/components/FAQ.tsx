import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How quickly can I schedule a consultation?",
      answer: "Most consultations can be scheduled within 24-48 hours. For urgent farming issues, we offer emergency consultations that can be arranged within a few hours."
    },
    {
      question: "Do you offer on-site visits?",
      answer: "Yes, we provide on-site consultations for tea plantations. Our experts can visit your farm to conduct soil analysis, assess plant health, and provide hands-on guidance. Additional travel fees may apply based on location."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cryptocurrency payments for consultation fees."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied with your consultation, we'll provide a full refund within 30 days of your session."
    },
    {
      question: "Do you provide follow-up support?",
      answer: "Yes, all consultations include 30 days of follow-up support via email. You can ask questions and get clarification on the recommendations provided during your session."
    },
    {
      question: "What languages do your experts speak?",
      answer: "Our experts are fluent in English, Spanish, Mandarin, and Hindi. We can arrange consultations in other languages upon request with advance notice."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600">Get answers to common questions about our tea consultation services</p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-green-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;