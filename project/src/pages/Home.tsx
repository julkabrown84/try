import React, { useState } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SplineScene } from '../components/ui/spline';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const subject = `Kontaktanfrage von ${formData.name}`;
      const body = `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`;
      window.location.href = `mailto:kontakt@innovativia.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-black">
      <HeroSection />
      <ServicesSection />

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-black/50" aria-label="Unsere Mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="text-[#ed6e2c]">Mission</span> und Vision
            </h2>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Mit innoVativia an Ihrer Seite können Sie als mittelständisches Unternehmen Ihre Digitalisierung, Automatisierung und datenbasierte Optimierung gezielt vorantreiben. Unser Ziel ist es, eine digitale Grundlage zu schaffen, die Ihre Effizienz steigert, Ihnen fundierte Entscheidungen ermöglicht und Ihr Unternehmen langfristig zukunftssicher macht.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Unsere Lösungen helfen Ihnen, wertvolles Wissen zu bewahren, manuelle Abläufe zu reduzieren und Echtzeit-Daten effektiv zu nutzen. Gleichzeitig entwickeln wir nachhaltige Lösungen, die Ihre Prozesse effizienter und zukunftsorientiert gestalten.
                </p>
                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-md text-white bg-[#ed6e2c] hover:bg-[#ed6e2c]/90 transition-colors duration-300"
                  >
                    Kostenloses Erstgespräch anfordern
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(237,110,44,0.1)]">
                <img
                  src="/src/img/JonahDashboard.jpeg"
                  alt="Innovative Dashboardlösung für Prozessoptimierung"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-24" aria-label="Karriere bei innoVativia">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Offene <span className="text-[#ed6e2c]">Stellen</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Werden Sie Teil unseres innovativen Teams
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6">
            <div className="bg-black rounded-lg p-8 border border-[#ed6e2c]/20 hover:border-[#ed6e2c] transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Data Analyst (m/w/d)</h3>
              <p className="text-gray-300 mb-4">Bremen • Vollzeit</p>
              <p className="text-gray-300 mb-6">Analysieren Sie Daten und entwickeln Sie datengetriebene Lösungskonzepte für unsere Kunden.</p>
              <div className="flex gap-4">
                <Link 
                  to="/jobs/data-analyst"
                  className="inline-block text-[#ed6e2c] hover:text-white border border-[#ed6e2c] hover:bg-[#ed6e2c] px-6 py-2 rounded-md transition-colors duration-300"
                >
                  Mehr erfahren
                </Link>
                <Link 
                  to="/jobs/data-analyst/apply"
                  className="inline-block text-white bg-[#ed6e2c] hover:bg-[#ed6e2c]/90 px-6 py-2 rounded-md transition-colors duration-300"
                >
                  Jetzt bewerben
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24" aria-label="Kontakt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Kontaktieren Sie <span className="text-[#ed6e2c]">uns</span>
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Lassen Sie uns gemeinsam Ihre digitale Zukunft gestalten
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md bg-zinc-900 border border-[#ed6e2c]/20 text-white px-4 py-2 shadow-sm focus:border-[#ed6e2c] focus:ring-1 focus:ring-[#ed6e2c] outline-none"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md bg-zinc-900 border border-[#ed6e2c]/20 text-white px-4 py-2 shadow-sm focus:border-[#ed6e2c] focus:ring-1 focus:ring-[#ed6e2c] outline-none"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md bg-zinc-900 border border-[#ed6e2c]/20 text-white px-4 py-2 shadow-sm focus:border-[#ed6e2c] focus:ring-1 focus:ring-[#ed6e2c] outline-none resize-none"
                    placeholder="Ihre Nachricht an uns..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-[#ed6e2c] rounded-md shadow-sm text-sm font-medium text-[#ed6e2c] hover:bg-[#ed6e2c] hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <p className="text-green-500 text-center">Ihre Nachricht wurde erfolgreich versendet!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-500 text-center">Es gab einen Fehler beim Versenden der Nachricht. Bitte versuchen Sie es später erneut.</p>
                )}
              </form>
            </div>

            {/* Spline Robot */}
            <div className="h-[600px] relative">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;