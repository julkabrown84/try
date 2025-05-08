import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import CookieSettings from './CookieSettings';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      marketing: true,
      analytics: true
    }));
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      marketing: false,
      analytics: false
    }));
    setShowBanner(false);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
    setShowBanner(false);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && !showSettings && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-black border border-[#ed6e2c]/20 rounded-lg max-w-2xl p-6 shadow-lg">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Auf unserer Webseite verwenden wir Analysemethoden (z.B. Cookies), um zu messen, wie häufig unsere Seite besucht und wie sie genutzt wird. Wir verwenden Trackingtechnologien zu Marketingzwecken und setzten hierzu auch Drittanbieter ein, die ggf. geräteübergreifend Cookies, Fingerprints, Tracking-Pixel und IP-Adressen nutzen.
              </p>
              <p className="text-gray-300 mb-6">
                Mit Ihren Einstellungen willigen Sie in die oben beschriebenen Vorgänge ein. Über „Cookie Einstellungen anpassen" können Sie individuelle Einstellungen vornehmen. Sie können Ihre Einwilligung jederzeit mir Wirkung für die Zukunft widerrufen. Mehr Informationen finden Sie in unserer{' '}
                <Link to="/datenschutz" className="text-[#ed6e2c] hover:text-[#ed6e2c]/80">
                  Datenschutzerklärung
                </Link>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-4 py-2 bg-[#ed6e2c] text-white rounded hover:bg-[#ed6e2c]/90 transition-colors"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="flex-1 px-4 py-2 border border-[#ed6e2c] text-[#ed6e2c] rounded hover:bg-[#ed6e2c]/10 transition-colors"
              >
                Nur notwendige Cookies akzeptieren
              </button>
              <button
                onClick={handleOpenSettings}
                className="flex-1 px-4 py-2 border border-[#ed6e2c]/20 text-white rounded hover:bg-[#ed6e2c]/10 transition-colors"
              >
                Cookie-Einstellungen anpassen
              </button>
            </div>

            <div className="mt-4 flex justify-center space-x-4 text-sm">
              <Link to="/impressum" className="text-gray-400 hover:text-white">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-gray-400 hover:text-white">
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <CookieSettings onClose={handleCloseSettings} />
      )}
    </>
  );
}