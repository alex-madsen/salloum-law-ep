import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    title: 'Document Preparation',
    content: 'Our document preparation services include drafting and reviewing purchase agreements, lease agreements, title documents, and other real estate contracts. We ensure all documentation is accurate, comprehensive, and legally sound.'
  },
  {
    title: 'Mortgage Lending',
    content: 'We provide expert legal guidance throughout the mortgage lending process, including loan document review, title examination, and closing services. Our team ensures compliance with all applicable laws and regulations.'
  },
  {
    title: 'Foreclosures',
    content: 'Our foreclosure services cover both lender and borrower representation. We handle judicial and non-judicial foreclosures, loan modifications, and foreclosure alternatives such as short sales and deed in lieu arrangements.'
  },
  {
    title: 'Evictions',
    content: 'We assist property owners with the eviction process, ensuring compliance with all legal requirements and procedures. Our services include notice preparation, court filings, and representation in eviction proceedings.'
  },
  {
    title: 'Other Services',
    content: 'Additional services include property dispute resolution, zoning issues, real estate litigation, title insurance matters, and general real estate consultation. Contact us to discuss your specific needs.'
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <div className="max-w-3xl mx-auto space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{service.title}</span>
                {expandedIndex === index ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              {expandedIndex === index && (
                <div className="px-6 py-4 border-t">
                  <p className="text-gray-700">{service.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}