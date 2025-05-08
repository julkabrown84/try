import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function JobDataAnalyst() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-[#ed6e2c] hover:text-[#ed6e2c]/80 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Zurück zur Startseite
        </Link>

        <div className="space-y-12">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">
              BIST DU DER DATA ANALYST, DER UNSERE VISION MIT DATEN ZUM LEBEN ERWECKT?
            </h1>
            <p className="text-xl text-gray-300">
              Die Vision von TAUWERK IT ist es, erstklassige IT-Lösungen für den aufstrebenden Mittelstand zu ermöglichen. Als Data Analyst schaffst du nicht nur Dashboards – du lieferst entscheidende Einblicke, die den Erfolg unserer Kunden nachhaltig prägen.
            </p>
            <p className="text-xl text-gray-300">
              Wir suchen einen Data Analysten (FiDaPro) (m/w/d), der mit Daten- und Prozessanalyse echten Mehrwert schafft.
            </p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold text-[#ed6e2c] mb-4">Was dich erwartet:</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Ein dynamisches, kreatives Team, das die Möglichkeiten der Datenanalyse neu definiert</li>
              <li>Die Chance, mit modernsten Technologien, einschließlich DMS und Digitaldisplays, zu arbeiten und den Mittelstand in Bremen maßgeblich zu unterstützen</li>
              <li>Ein Arbeitsumfeld, das deine Begeisterung für Daten widerspiegelt und deine Ideen wertschätzt</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ed6e2c] mb-4">Dein Profil:</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Erfahrung in der Datenanalyse und Grundkenntnisse in SQL bzw. MSSQL</li>
              <li>Kenntnisse in Datenvisualisierungstools wie Power BI oder Qlik sind von Vorteil</li>
              <li>Talent, komplexe Daten in klare Insights zu übersetzen</li>
              <li>Grundverständnis von BI- und ERP-Systemen sowie Dokumentenmanagementsystemen (DMS)</li>
              <li>Interesse an Prozessen und Unternehmensabläufen</li>
              <li>Freude am Kundenkontakt, z. B. in Workshops, Onboarding oder Support</li>
              <li>Abgeschlossene Ausbildung im Bereich Datenanalyse, Wirtschaftsinformatik oder eine vergleichbare Qualifikation</li>
              <li>Führerschein der Klasse B</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ed6e2c] mb-4">Dein Aufgabenbereich:</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Datenaufbereitung und -analyse zur Optimierung von Geschäftsprozessen</li>
              <li>Entwicklung und Gestaltung aussagekräftiger Dashboards</li>
              <li>Integration und Weiterentwicklung von BI- und DMS-Lösungen</li>
              <li>Integration und Optimierung datengetriebener Prozesse</li>
              <li>Beratung und Schulung von Kunden – vor Ort und remote</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ed6e2c] mb-4">Was wir bieten:</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Ein motiviertes Team und vielfältige Entwicklungsmöglichkeiten</li>
              <li>Eine moderne Unternehmenskultur mit Raum für persönliche und fachliche Weiterbildung</li>
              <li>Ein inspirierendes Arbeitsumfeld in einem Industrie-Loft mit neuester IT-Ausstattung</li>
              <li>Kleine Extras, die den Arbeitsalltag bereichern</li>
              <li>Eine unbefristete Vollzeitanstellung und ein attraktives Gehaltspaket mit Firmenfahrzeug</li>
              <li>Gute Verkehrsanbindung, auch mit öffentlichen Verkehrsmitteln</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#ed6e2c] mb-4">Zusätzliche Benefits:</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Bonus- und Sonderzahlungen für gemeinsame Erfolge</li>
              <li>Geregelte Arbeitszeiten für eine optimale Work-Life-Balance</li>
              <li>30 Tage Erholungsurlaub</li>
            </ul>
          </section>

          <section className="bg-[#ed6e2c]/5 p-8 rounded-xl border border-[#ed6e2c]/20">
            <h2 className="text-2xl font-semibold text-[#ed6e2c] mb-4">SO GEHT'S WEITER</h2>
            <p className="text-gray-300">
              Schreib uns – Wir melden uns innerhalb weniger Tage bei dir und vereinbaren zunächst ein Microsoft Teams Meeting. In diesem Gespräch lernen wir uns gegenseitig kennen und entscheiden zusammen, wie es dann weitergeht.
            </p>
            <div className="mt-8">
              <Link
                to="/jobs/data-analyst/apply"
                className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-md text-white bg-[#ed6e2c] hover:bg-[#ed6e2c]/90 transition-colors duration-300 shadow-lg shadow-[#ed6e2c]/20"
              >
                Jetzt bewerben
              </Link>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">WENN NICHT JETZT, WANN DANN?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#ed6e2c]/5 rounded-xl p-8 border border-[#ed6e2c]/20">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/src/img/Niko.png"
                  alt="Niko Kleen"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-xl text-gray-300 leading-relaxed">
                  "Ich bin Niko Kleen und stehe dir als Ansprechpartner für alle Fragen rund um deinen neuen Job zur Verfügung. Vertraulich und unverbindlich können wir über deine Karriereziele sprechen. Auf meine Zuverlässigkeit und Diskretion kannst du dich verlassen. Klick hier, um den Kontakt herzustellen und deinem Traumjob ein Stück näher zu kommen. Freue mich auf deine Nachricht!"
                </p>
                <div className="pt-4">
                  <a
                    href="mailto:n.kleen@tauwerk-it.de?subject=Interesse an der Position als Data Analyst"
                    className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-[#ed6e2c] border border-[#ed6e2c] hover:bg-[#ed6e2c] hover:text-white transition-colors duration-300"
                  >
                    Kontakt aufnehmen
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default JobDataAnalyst;