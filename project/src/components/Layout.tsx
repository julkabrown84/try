import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { RecommendationStamp } from './RecommendationStamp';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Navigation */}
      <nav className="bg-black shadow-[0_2px_4px_rgba(237,110,44,0.1)] fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-medium text-white">
                inno<span className="text-[#ed6e2c]">V</span>ativia
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/#services" className="text-gray-300 hover:text-[#ed6e2c]">Leistungen</a>
              <a href="/#mission" className="text-gray-300 hover:text-[#ed6e2c]">Mission</a>
              <a href="/#jobs" className="text-gray-300 hover:text-[#ed6e2c]">Jobs</a>
              <a href="/#contact" className="text-gray-300 hover:text-[#ed6e2c]">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Recommendation Stamp */}
      <RecommendationStamp />

      {/* Footer */}
      <footer className="bg-black border-t border-[#ed6e2c]/20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information - Left Column */}
            <div className="text-gray-400">
              <h3 className="font-semibold text-white mb-4">Kontakt</h3>
              <p className="mb-4">
                <span className="font-medium">innoVativia</span> (Geschäftsbereich der{' '}
                <a 
                  href="https://tauwerk-it.de" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#ed6e2c] transition-colors"
                >
                  TAUWERK IT GmbH
                </a>)
              </p>
              <div className="space-y-2">
                <a 
                  href="https://maps.google.com/?q=Am+Tabakquartier+62,+28196+Bremen" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center hover:text-[#ed6e2c] transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Am Tabakquartier 62, 28196 Bremen
                </a>
                <a 
                  href="tel:+494213648100" 
                  className="flex items-center hover:text-[#ed6e2c] transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  0421 3648 100
                </a>
                <a 
                  href="mailto:kontakt@innovativia.de" 
                  className="flex items-center hover:text-[#ed6e2c] transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  kontakt@innovativia.de
                </a>
              </div>
            </div>

            {/* Logo and Social Media - Right Column */}
            <div className="flex flex-col items-center md:items-end">
              <Link to="/" className="text-xl font-medium text-white mb-6">
                inno<span className="text-[#ed6e2c]">V</span>ativia
              </Link>
              
              {/* Social Media Links */}
              <div className="flex space-x-6 mb-6">
                <a href="https://www.instagram.com/innovativia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ed6e2c] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61563094872179" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ed6e2c] transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/company/104739722/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ed6e2c] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-6">
                <Link to="/impressum" className="text-gray-400 hover:text-[#ed6e2c]">
                  Impressum
                </Link>
                <Link to="/datenschutz" className="text-gray-400 hover:text-[#ed6e2c]">
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t border-[#ed6e2c]/10 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2024 <span className="font-medium">innoVativia</span>. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;