import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export function RecommendationStamp() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    senderName: '',
    recipientEmail: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    try {
      const subject = `${formData.senderName} empfiehlt dir innoVativia`;
      const body = `Hallo,\n\n${formData.senderName} denkt, dass dich innoVativia interessieren könnte.\n\nBesuche uns auf: ${window.location.origin}\n\nViele Grüße\nDein innoVativia Team`;
      
      window.location.href = `mailto:${formData.recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setFormData({ senderName: '', recipientEmail: '' });
      setStatus('success');
      setTimeout(() => {
        setShowModal(false);
        setStatus('idle');
      }, 2000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Floating Stamp Button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 left-8 z-40 w-24 h-24 rounded-full bg-[#ed6e2c] shadow-lg 
        hover:scale-105 transition-transform duration-300 group overflow-hidden
        border-4 border-white/10 backdrop-blur-sm"
        style={{
          background: `radial-gradient(circle at center, #ed6e2c, #ff8f5c)`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center transform -rotate-12">
            <Mail className="w-8 h-8 mx-auto mb-1 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xs font-semibold tracking-wider">EMPFEHLEN</span>
          </div>
        </div>
      </button>

      {/* Recommendation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-black border border-[#ed6e2c]/20 rounded-lg max-w-md w-full p-6 shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">innoVativia empfehlen</h2>

            {status === 'success' ? (
              <div className="text-center py-8">
                <p className="text-green-500 text-lg">Vielen Dank für Ihre Empfehlung!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="senderName" className="block text-sm font-medium text-gray-300 mb-2">
                    Ihr Name
                  </label>
                  <input
                    type="text"
                    id="senderName"
                    value={formData.senderName}
                    onChange={(e) => setFormData(prev => ({ ...prev, senderName: e.target.value }))}
                    required
                    className="w-full rounded-md bg-black border-[#ed6e2c]/20 text-white shadow-sm 
                    focus:border-[#ed6e2c] focus:ring-[#ed6e2c]"
                  />
                </div>

                <div>
                  <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-300 mb-2">
                    E-Mail des Empfängers
                  </label>
                  <input
                    type="email"
                    id="recipientEmail"
                    value={formData.recipientEmail}
                    onChange={(e) => setFormData(prev => ({ ...prev, recipientEmail: e.target.value }))}
                    required
                    className="w-full rounded-md bg-black border-[#ed6e2c]/20 text-white shadow-sm 
                    focus:border-[#ed6e2c] focus:ring-[#ed6e2c]"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Es gab einen Fehler. Bitte versuchen Sie es später erneut.</p>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-[#ed6e2c] text-white rounded hover:bg-[#ed6e2c]/90 
                    transition-colors flex items-center justify-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Empfehlung senden</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}