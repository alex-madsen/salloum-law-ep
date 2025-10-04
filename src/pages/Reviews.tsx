import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    date: '2024-02-15',
    rating: 5,
    text: 'Nassim and his team provided exceptional service during our home purchase. Their attention to detail and prompt communication made the entire process smooth and stress-free.'
  },
  {
    name: 'Michael Chen',
    date: '2024-01-30',
    rating: 5,
    text: 'I highly recommend Salloum Law for any real estate legal matters. They handled my commercial property transaction with utmost professionalism and expertise.'
  },
  {
    name: 'Emily Rodriguez',
    date: '2024-01-10',
    rating: 5,
    text: 'The team at Salloum Law went above and beyond in handling our mortgage refinancing. Their knowledge and guidance were invaluable throughout the process.'
  }
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Client Reviews</h1>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <div className="mt-auto">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}