import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cog, Code, Database, Tag, Brain, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Cog,
      title: "Prozessautomatisierung",
      description: "Steigern Sie Ihre Effizienz durch automatisierte Geschäftsprozesse. Unsere maßgeschneiderten Lösungen reduzieren manuelle Arbeitsschritte und minimieren Fehlerquoten.",
      keywords: "Prozessautomatisierung, Workflow-Optimierung, Effizienzsteigerung"
    },
    {
      icon: Code,
      title: "Digitale Transformation",
      description: "Entwickeln Sie zukunftsfähige digitale Strategien für Ihr Unternehmen. Wir begleiten Sie bei der Integration moderner Technologien und der Optimierung Ihrer digitalen Infrastruktur.",
      keywords: "Digitalisierung, Digitale Strategie, Technologie-Integration"
    },
    {
      icon: Database,
      title: "Business Intelligence",
      description: "Treffen Sie datenbasierte Entscheidungen mit unseren BI-Lösungen. Visualisieren Sie komplexe Daten in übersichtlichen Dashboards und gewinnen Sie wertvolle Geschäftseinblicke.",
      keywords: "Business Intelligence, Datenanalyse, Dashboard-Entwicklung"
    },
    {
      icon: Tag,
      title: "Digitale Etikettierung",
      description: "Modernisieren Sie Ihr Lagermanagement mit energieeffizienten digitalen Etiketten. Unsere kabellosen Lösungen ermöglichen flexible und nachhaltige Kennzeichnungssysteme.",
      keywords: "E-Paper, Digitale Etiketten, Lagermanagement"
    },
    {
      icon: Brain,
      title: "KI-Integration",
      description: "Bereiten Sie Ihr Unternehmen auf die KI-Revolution vor. Wir implementieren intelligente Systeme für automatisierte Prozesse und predictive Analytics.",
      keywords: "Künstliche Intelligenz, Machine Learning, Predictive Analytics"
    },
    {
      icon: Shield,
      title: "Datensicherheit",
      description: "Schützen Sie Ihre Unternehmensdaten mit modernsten Sicherheitslösungen. Wir gewährleisten DSGVO-konforme Datenhaltung und sichere Dokumentenverwaltung.",
      keywords: "IT-Sicherheit, Datenschutz, DSGVO-Compliance"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [services.length]);

  const calculatePosition = (index: number, totalItems: number, radius: number) => {
    const angleStep = (2 * Math.PI) / totalItems;
    const angle = index * angleStep - Math.PI / 2;
    return {
      x: Math.cos(angle) * radius - radius / 2,
      y: Math.sin(angle) * radius,
    };
  };

  const getShortDescription = (description: string) => {
    const words = description.split(' ').slice(0, 6).join(' ');
    return `${words}...`;
  };

  return (
    <section id="services" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden" aria-label="Unsere Leistungen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="text-[#ed6e2c]">Leistungen</span> für Ihren digitalen Erfolg
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Maßgeschneiderte Lösungen für die digitale Transformation Ihres Unternehmens
          </p>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          {/* Navigation Buttons */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#ed6e2c]/10 text-[#ed6e2c] hover:bg-[#ed6e2c]/20 transition-colors z-10"
            aria-label="Vorherige Leistung"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % services.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#ed6e2c]/10 text-[#ed6e2c] hover:bg-[#ed6e2c]/20 transition-colors z-10"
            aria-label="Nächste Leistung"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Circular Services */}
          <div className="relative w-full h-full flex items-center justify-center">
            {services.map((service, index) => {
              const position = calculatePosition(
                (index - currentIndex + services.length) % services.length,
                services.length,
                240
              );
              const isActive = index === currentIndex;
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  animate={{
                    x: position.x,
                    y: position.y,
                    scale: isActive ? 1.2 : 0.8,
                    opacity: isActive ? 1 : 0.5,
                    zIndex: isActive ? 2 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className={`absolute w-64 transform -translate-x-1/2 -translate-y-1/2 
                    ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                >
                  <div className={`bg-black rounded-lg p-6 border transition-colors duration-300
                    ${isActive ? 'border-[#ed6e2c]' : 'border-[#ed6e2c]/20'}`}>
                    <div className={`text-[#ed6e2c] mb-4 transition-transform duration-300
                      ${isActive ? 'scale-110' : 'scale-100'}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    {!isActive && (
                      <p className="text-sm text-gray-300">{getShortDescription(service.description)}</p>
                    )}
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-sm text-gray-300"
                      >
                        {service.description}
                      </motion.p>
                    )}
                    <meta name="keywords" content={service.keywords} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}