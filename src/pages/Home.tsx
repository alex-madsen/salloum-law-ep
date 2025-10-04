import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, Users, Briefcase, FileText, Phone, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[75vh]">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
          alt="Real estate and property law"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Expert Real Estate Attorney Serving El Paso
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Protecting your property rights with comprehensive legal solutions for closings, foreclosures, evictions, and civil litigation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Legal Services for El Paso</h2>
            <p className="text-lg text-gray-600">
              From real estate transactions to family law matters, we provide experienced representation across multiple practice areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <HomeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Estate & Civil Litigation</h3>
              <p className="text-gray-600 mb-4">
                Foreclosures, evictions, contract disputes, deed preparation, and property transactions.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Family Law</h3>
              <p className="text-gray-600 mb-4">
                Divorce, child custody, support modifications, and protective orders.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Probate & Estate Planning</h3>
              <p className="text-gray-600 mb-4">
                Wills, trusts, guardianships, powers of attorney, and probate administration.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Law</h3>
              <p className="text-gray-600 mb-4">
                Entity formations, contracts, business litigation, and fiduciary disputes.
              </p>
              <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Salloum Law?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Real Estate Expertise</h3>
                  <p className="text-gray-600">
                    Specialized knowledge in property transactions, foreclosures, and real estate litigation throughout El Paso County.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Local Experience</h3>
                  <p className="text-gray-600">
                    Deep understanding of Texas law and the El Paso legal community with years of proven results.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personalized Service</h3>
                  <p className="text-gray-600">
                    Direct attorney involvement from consultation to resolution, ensuring your case receives dedicated attention.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Solutions</h3>
                  <p className="text-gray-600">
                    Full-service representation across real estate, family, probate, and business law matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discuss Your Legal Needs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation. We're here to protect your rights and provide the legal guidance you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9154932311"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              (915) 493-2311
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}