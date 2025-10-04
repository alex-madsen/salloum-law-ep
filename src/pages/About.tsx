import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6">THE FIRM</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Salloum Law, we're dedicated to protecting what matters most to you. Whether you're navigating a property transaction, resolving a family matter, or planning for the future, you deserve legal counsel that truly understands your needs.
              </p>
              <p>
                Our practice focuses on Real Estate, Family Law, Probate, and Business matters throughout El Paso. We believe in building lasting relationships with our clients, grounded in trust, integrity, and clear communication. When you work with us, you're not just another case number—you're a person with unique concerns, and we treat you that way.
              </p>
              <p>
                Every client deserves personalized attention and a legal strategy tailored to their specific situation. That's the commitment we make, and it's what drives us to achieve the best possible outcome in every matter we handle.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="Nassim Salloum"
                />
              </div>
              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">Nassim Salloum</h1>
                <h2 className="text-xl text-gray-600 mb-6">Principal Attorney</h2>

                <div className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-2">Education</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Juris Doctor, Harvard Law School</li>
                      <li>Bachelor of Arts in Economics, Yale University</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Licenses & Certifications</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>State Bar Association - Licensed since 2005</li>
                      <li>Certified Real Estate Law Specialist</li>
                      <li>Federal Court Admissions</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold mb-2">Notable Achievements</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Successfully handled over 1,000 real estate transactions</li>
                      <li>Named "Top Real Estate Attorney" by Legal Times (2018-2023)</li>
                      <li>Published author in Real Estate Law Review</li>
                      <li>Regular speaker at Real Estate Law conferences</li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}