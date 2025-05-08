import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Impressum() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-[#ed6e2c] hover:text-[#ed6e2c]/80 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold mb-8">Impressum</h1>

        <div className="space-y-8">
          <section>
            <p className="font-semibold mb-4">innoVativia ein Geschäftsbereich der TAUWERK IT GmbH</p>
            <address className="not-italic">
              Am Tabakquartier 62<br />
              28197 Bremen<br /><br />
              Telefon: <a href="tel:+494213648100" className="text-[#ed6e2c] hover:underline">0421 3648 1000</a><br />
              Email: <a href="mailto:info@tauwerk-it.de" className="text-[#ed6e2c] hover:underline">info@tauwerk-it.de</a>
            </address>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Geschäftsführung</h2>
            <p>Geschäftsführer der TAUWERK IT GmbH: Marc Lübbers, Nikolas Kleen</p>
            <p>Registergericht: Amtsgericht Bremen</p>
            <p>Registernummer: HRB 40138</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
            <p>DE348852932</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Online-Streitbeilegung</h2>
            <p>Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO</p>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#ed6e2c] hover:underline">https://ec.europa.eu/consumers/odr/</a> finden.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Hinweis nach Verbraucherstreitbeilegungsgesetz</h2>
            <p>Wir sind grundsätzlich nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Social Media Profile</h2>
            <p className="mb-2">Dieses Impressum gilt auch für folgende Social Media Profile:</p>
            <ul className="list-none space-y-2">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61563094872179" target="_blank" rel="noopener noreferrer" className="text-[#ed6e2c] hover:underline">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/tauwerkit" target="_blank" rel="noopener noreferrer" className="text-[#ed6e2c] hover:underline">Instagram</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Impressum;