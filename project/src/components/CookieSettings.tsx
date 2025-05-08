import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CookieSettingsProps {
  onClose: () => void;
}

export default function CookieSettings({ onClose }: CookieSettingsProps) {
  const [settings, setSettings] = useState({
    necessary: true, // Always true and disabled
    marketing: true,
    analytics: true
  });

  const handleSave = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    onClose();
  };

  const handleToggle = (key: 'marketing' | 'analytics') => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-black border border-[#ed6e2c]/20 rounded-lg max-w-2xl w-full p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Datenschutzeinstellungen</h2>

        {/* Necessary Cookies Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-white">Notwendige Cookies</h3>
            <div className="relative">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-[#ed6e2c]/40 rounded-full peer peer-checked:bg-[#ed6e2c]"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            Notwendige Cookies sind essentiell für die Funktionalität der Website. Sie stellen zum Beispiel Grundfunktionen für das Navigationskonzept zur Verfügung oder verhindern den Zugriff auf gesicherte Bereiche der Website. Ohne diese Cookies kann die Seite nicht bedient werden.
          </p>
          <div className="mt-2 bg-gray-900/50 p-3 rounded">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Sitzungs-Cookie</span>
              <span className="text-[#ed6e2c]">Aktiv</span>
            </div>
          </div>
        </div>

        {/* Marketing & Analytics Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-white">Marketing / Statistik / Analyse</h3>
            <div className="relative">
              <input
                type="checkbox"
                checked={settings.marketing && settings.analytics}
                onChange={() => {
                  const newValue = !(settings.marketing && settings.analytics);
                  setSettings(prev => ({
                    ...prev,
                    marketing: newValue,
                    analytics: newValue
                  }));
                }}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-[#ed6e2c] cursor-pointer"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            Wir verwenden Cookies zur Analyse und Verbesserung der Webseitennutzung. Hierdurch ist es uns möglich, unsere Webseite für Sie ansprechend zu gestalten und die Nutzung zu erleichtern, indem beispielsweise bestimmte Eingaben so gespeichert werden, dass sie nicht wiederholt eingegeben werden müssen. Entsprechende Cookies werden auch eingesetzt, um die Reichweite und Performance unserer Website zu messen und zu analysieren.
          </p>
          <div className="space-y-2">
            <div className="bg-gray-900/50 p-3 rounded">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">LinkedIn Insights</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={settings.marketing}
                    onChange={() => handleToggle('marketing')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-[#ed6e2c] cursor-pointer"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-3 rounded">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Matomo</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={settings.analytics}
                    onChange={() => handleToggle('analytics')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-[#ed6e2c] cursor-pointer"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/50 p-3 rounded">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Google Tag</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={settings.marketing}
                    onChange={() => handleToggle('marketing')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-[#ed6e2c] cursor-pointer"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#ed6e2c]/20 text-white rounded hover:bg-[#ed6e2c]/10 transition-colors"
          >
            Abbrechen
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#ed6e2c] text-white rounded hover:bg-[#ed6e2c]/90 transition-colors"
          >
            Einstellungen speichern
          </button>
        </div>
      </div>
    </div>
  );
}