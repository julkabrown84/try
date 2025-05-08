import React, { useState } from 'react';
import { ArrowLeft, Upload, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function JobApplication() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [files, setFiles] = useState({
    resume: null as File | null,
    coverLetter: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: fileList } = e.target;
    if (fileList && fileList[0]) {
      setFiles(prev => ({
        ...prev,
        [name]: fileList[0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create form data for email
      const subject = `Bewerbung als Data Analyst von ${formData.firstName} ${formData.lastName}`;
      const body = `
Name: ${formData.firstName} ${formData.lastName}
E-Mail: ${formData.email}
Telefon: ${formData.phone}

Nachricht:
${formData.message}

---
Diese Bewerbung wurde über das Online-Bewerbungsformular gesendet.
      `;

      // Open email client with form data
      window.location.href = `mailto:kontakt@innovativia.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      setFiles({
        resume: null,
        coverLetter: null,
      });
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/jobs/data-analyst" className="inline-flex items-center text-[#ed6e2c] hover:text-[#ed6e2c]/80 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Zurück zur Stellenanzeige
        </Link>

        <div className="space-y-8">
          <header>
            <h1 className="text-3xl font-bold mb-4">Bewerbung als Data Analyst</h1>
            <p className="text-gray-300">
              Bitte fülle das Formular aus und füge deinen Lebenslauf sowie ein Anschreiben bei.
              Wir melden uns innerhalb weniger Tage bei dir.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  Vorname *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full rounded-md bg-black border-[#ed6e2c]/20 text-white shadow-sm focus:border-[#ed6e2c] focus:ring-[#ed6e2c]"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Nachname *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full rounded-md bg-black border-[#ed6e2c]/20 text-white shadow-sm focus:border-[#ed6e2c] focus:ring-[#ed6e2c]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md bg-black border-[#ed6e2c]/20 text-white shadow-sm focus:border-[#ed6e2c] focus:ring-[#ed6e2c]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-md bg-black border-[#ed6e2c]/20 text-white shadow-sm focus:border-[#ed6e2c] focus:ring-[#ed6e2c]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Hier kannst du uns weitere Informationen zu deiner Bewerbung mitteilen..."
                className="w-full rounded-md bg-black border-[#ed6e2c]/20 text-white shadow-sm focus:border-[#ed6e2c] focus:ring-[#ed6e2c]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-300 mb-2">
                  Lebenslauf *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                  <label
                    htmlFor="resume"
                    className="flex items-center justify-center px-4 py-2 border border-[#ed6e2c]/20 rounded-md cursor-pointer hover:border-[#ed6e2c] transition-colors"
                  >
                    <Upload className="h-5 w-5 mr-2 text-[#ed6e2c]" />
                    <span className="text-sm text-gray-300">
                      {files.resume ? files.resume.name : 'PDF oder Word-Datei auswählen'}
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-300 mb-2">
                  Anschreiben *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="coverLetter"
                    name="coverLetter"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                  <label
                    htmlFor="coverLetter"
                    className="flex items-center justify-center px-4 py-2 border border-[#ed6e2c]/20 rounded-md cursor-pointer hover:border-[#ed6e2c] transition-colors"
                  >
                    <Upload className="h-5 w-5 mr-2 text-[#ed6e2c]" />
                    <span className="text-sm text-gray-300">
                      {files.coverLetter ? files.coverLetter.name : 'PDF oder Word-Datei auswählen'}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md text-white bg-[#ed6e2c] hover:bg-[#ed6e2c]/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  'Bewerbung absenden'
                )}
              </button>
            </div>

            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Deine Bewerbung wurde erfolgreich versendet!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Es gab einen Fehler beim Versenden der Bewerbung. Bitte versuche es später erneut.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobApplication;