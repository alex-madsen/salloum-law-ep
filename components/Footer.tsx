import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <nav>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/reviews" className="hover:text-blue-400 transition-colors">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </nav>
          <div className="mt-6 space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>(915) 493-2311</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>nassim@salloumlawep.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>497 Resler Dr, Ste. B<br />El Paso, Texas 79912</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ContactForm />
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-700">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Salloum Law El Paso PC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}