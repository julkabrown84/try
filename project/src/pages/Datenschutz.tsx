import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Datenschutz() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-[#ed6e2c] hover:text-[#ed6e2c]/80 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <p>Wir freuen uns über Ihren Besuch auf unserer Webseite. Nachfolgend möchten wir Sie über den Umgang mit Ihren Daten gem. Art. 13 Datenschutz-Grundverordnung (DSGVO) informieren.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Verantwortlicher</h2>
            <p>Verantwortlich für die nachfolgend dargestellten Datenverarbeitungen ist die im Impressum genannte Stelle.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Nutzungsdaten</h2>
            <p className="mb-4">Wenn Sie unsere Webseiten besuchen, werden auf unserem Webserver temporär sogenannte Nutzungsdaten zu statistischen Zwecken als Protokoll ausgewertet, um die Qualität unserer Webseiten zu verbessern. Dieser Datensatz besteht aus:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>dem Namen und der Adresse der angeforderten Inhalte,</li>
              <li>dem Datum und der Uhrzeit der Abfrage,</li>
              <li>der übertragenen Datenmenge,</li>
              <li>dem Zugriffsstatus (Inhalt übertragen, Inhalt nicht gefunden),</li>
              <li>der Beschreibung des verwendeten Webbrowsers und des Betriebssystems,</li>
              <li>dem Referral-Link, der angibt, von welcher Seite Sie auf unsere gelangt sind,</li>
            </ul>
            <p className="mt-4">Rechtsgrundlage der Verarbeitung der Nutzungsdaten ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Die Verarbeitung erfolgt in dem berechtigten Interesse, die Inhalte der Webseite bereitzustellen und eine Geräte- sowie Browseroptimierte Darstellung sicherzustellen.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Speicherung der IP-Adresse zu Sicherheitszwecken</h2>
            <p>Darüber hinaus speichern wir die von Ihrem Webbrowser übermittelte vollständige IP-Adresse streng zweckgebunden für die Dauer von sieben Tagen, in dem berechtigten Interesse, Angriffe auf unsere Web­seiten erkennen, eingrenzen und beseitigen zu können. Nach Ablauf dieser Zeitspanne löschen bzw. anonymisieren wir die IP-Adresse. Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Datensicherheit</h2>
            <p>Um Ihre Daten vor unerwünschten Zugriffen möglichst umfassend zu schützen, treffen wir technische und organisatorische Maßnahmen. Wir setzen auf unseren Webseiten ein Verschlüsselungsverfahren ein. Ihre Angaben werden von Ihrem Rechner zu unserem Server und umgekehrt über das Internet mittels einer TLS-Verschlüsselung übertragen. Sie erkennen dies in der Regel daran, dass in der Statusleiste Ihres Browsers das Schloss-Symbol geschlossen ist und die Adresszeile mit https:// beginnt.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Erforderliche Cookies</h2>
            <p className="mb-4">Auf unseren Webseiten setzen wir Cookies ein, die zur Nutzung unserer Webseiten erforderlich sind.</p>
            <p className="mb-4">Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert und ausgelesen werden können. Man unterscheidet zwischen Session-Cookies, die wieder gelöscht werden, sobald Sie ihren Browser schließen und permanenten Cookies, die über die einzelne Sitzung hinaus gespeichert werden.</p>
            <p className="mb-4">Wir nutzen diese erforderlichen Cookies nicht für Analyse-, Tracking- oder Werbezwecke.</p>
            <p className="mb-4">Teilweise enthalten diese Cookies lediglich Informationen zu bestimmten Einstellungen und sind nicht personenbeziehbar. Sie können auch notwendig sein, um die Benutzerführung, Sicherheit und Umsetzung der Seite zu ermöglichen.</p>
            <p className="mb-4">Wir nutzen diese Cookies auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 S. 1 lit. f DSGVO.</p>
            <p>Sie können Ihren Browser so einstellen, dass er Sie über die Platzierung von Cookies informiert. Zudem können Sie diese jederzeit über die entsprechende Browsereinstellung löschen und das Setzen neuer Cookies verhindern. Bitte beachten Sie, dass unsere Webseiten dann gegebenenfalls nicht vollständig angezeigt werden können und einige Funktionen technisch nicht mehr zur Verfügung stehen.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Datenschutzniveau</h2>
            <div className="space-y-2">
              <p><strong>Name des Cookies:</strong> PHPSESSID</p>
              <p><strong>Anbieter:</strong> TAUWERK IT</p>
              <p><strong>Zweck des Cookies:</strong> Dieses Cookie ist notwendig, um Ihre aktuelle Sitzung bei der Nutzung von PHP-basierten Anwendungen auf unserer Webseite zu speichern. Es stellt sicher, dass alle Funktionen der Website, die auf der PHP-Programmiersprache basieren, korrekt und vollständig angezeigt werden können.</p>
              <p><strong>Speicherdauer:</strong> Die Speicherdauer dieses Cookies beschränkt sich auf die Dauer Ihrer Sitzung. Nach Beenden der Sitzung wird das Cookie automatisch gelöscht.</p>
              <p><strong>Datenschutzniveau:</strong> Die Datenverarbeitung erfolgt ausschließlich innerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums, um ein hohes Datenschutzniveau zu gewährleisten.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Matomo</h2>
            <p className="mb-4">Zur bedarfsgerechten Gestaltung unserer Webseiten verwenden wir das Webanalysetool „Matomo". Matomo erstellt Nutzungsprofile auf Grundlage von Pseudonymen. Hierzu werden permanente Cookies auf Ihrem Endgerät gespeichert und von uns ausgelesen. Auf diese Weise sind wir in der Lage, wiederkehrende Besucher*innen zu erkennen und als solche zu zählen.</p>
            <p className="mb-4">Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung, sofern Sie Ihre Einwilligung über unser Banner abgegeben haben.</p>
            <p className="mb-4">Sie können Ihre Einwilligung jederzeit widerrufen. Bitte folgen Sie hierzu diesem Link und treffen die entsprechenden Einstellungen über unser Banner.</p>
            <p>Die gesetzten Cookies werden grundsätzlich nach 13 Monaten oder nach Widerruf Ihrer Einwilligung gelöscht bzw. nicht mehr verarbeitet.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Trackingtechnologien von Drittanbietern zu Werbezwecken</h2>
            <p className="mb-4">Wir nutzen geräteübergreifende Trackingtechnologien, damit Ihnen basierend auf Ihrem Besuch unserer Webseiten zielgerichtete Werbung auf anderen Internetseiten angezeigt werden kann und wir erkennen können, wie wirksam unsere Werbemaßnahmen waren.</p>
            <p>Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung, sofern Sie Ihre Einwilligung über unser Banner abgegeben haben. Ihre Einwilligung ist freiwillig und kann jederzeit widerrufen werden.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Wie funktioniert das Tracking?</h2>
            <p>Wenn Sie unsere Webseiten besuchen, ist es möglich, dass die unten genannten Drittanbieter Wiedererkennungsmerkmale für Ihren Browser oder Ihr Endgerät abrufen (z. B. einen sog. Browser-Fingerprint), Ihre IP-Adresse auswerten, Wiedererkennungsmerkmale auf Ihrem Endgerät speichern bzw. auslesen (z.B. Cookies) oder Zugriff auf individuelle Tracking-Pixel erhalten.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Was bedeutet geräteübergreifendes Tracking?</h2>
            <p>Sofern Sie sich mit eigenen Benutzerdaten beim Drittanbieter anmelden, können die jeweiligen Wiedererkennungsmerkmale verschiedener Browser und Endgeräte miteinander verknüpft werden. Wenn der Drittanbieter also z.B. je ein eigenes Merkmal für den von Ihnen verwendeten Laptop, Desktop-PC oder das von Ihnen verwendete Smartphone bzw. Tablet erstellt hat, können diese einzelnen Merkmale einander zugeordnet werden, sobald Sie mit Ihren Anmeldedaten einen Dienst des Drittanbieters nutzen. Auf diese Weise kann der Drittanbieter unsere Werbekampagnen auch über verschiedene Endgeräte hinweg zielgerichtet steuern.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Welche Drittanbieter nutzen wir in diesem Rahmen?</h2>
            <p>Nachfolgend nennen wir Ihnen die Drittanbieter, mit denen wir zu Werbezwecken zusammenarbeiten. Sofern die Daten in diesem Rahmen außerhalb der EU bzw. des EWR (insbesondere in den USA) verarbeitet werden, machen wir in der nachfolgenden Tabelle Angaben zum Datenschutzniveau.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Kontaktformular</h2>
            <p className="mb-4">Sie haben die Möglichkeit, sich mit uns über unser Kontaktformular in Verbindung zu setzen. Zur Nutzung unseres Kontaktformulars benötigen wir von Ihnen zunächst die als Pflichtfelder markierten Daten.</p>
            <p className="mb-4">Diese Daten verwenden wir auf Grundlage von Art. 6 Abs. 1 S. 1 lit. f DSGVO, um Ihre Anfrage zu beantworten.</p>
            <p className="mb-4">Darüber hinaus können Sie selbst entscheiden, ob Sie uns weitere Angaben mitteilen möchten. Diese Angaben erfolgen freiwillig und sind für die Kontaktaufnahme nicht zwingend erforderlich. Diese freiwilligen Angaben verarbeiten wir auf Grundlage Ihrer Einwilligung.</p>
            <p>Ihre Daten werden nur zur Beantwortung Ihrer Anfrage verarbeitet. Wir löschen Ihre Daten, sofern diese nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Regelmäßig ist dies 7 Tage nach Bearbeitung der Anfrage der Fall.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Bewerbung über Bewerbungsportal</h2>
            <p className="mb-4">Sie haben die Möglichkeit sich auf die von uns ausgeschriebenen Stellen über unser Bewerbungsportal zu bewerben. Im Rahmen des Bewerbungsverfahrens benötigen wir von Ihnen die Angaben, die als Pflichtfelder in unserem Bewerbungsformular gekennzeichnet sind. Rechtsgrundlage für die Verarbeitung dieser Daten ist § 26 Abs. 1 S. 1 BDSG, da die Daten für die Entscheidung über die Begründung eines Beschäftigungsverhältnisses erforderlich sind. Eine Datenverarbeitung zu anderen Zwecken erfolgt nicht.</p>
            <p className="mb-4">Darüber hinaus können Sie selbst entscheiden, ob Sie uns weitere Informationen mitteilen, die im Bewerbungsportal als nicht verpflichtend markiert sind. Die Bereitstellung dieser Daten erfolgt freiwillig und ist für die Bewerbung nicht zwingend erforderlich. Sofern Sie uns Daten zu Ihrer Person freiwillig mitteilen, verarbeiten wir diese Daten auf der Grundlage Ihrer jederzeit widerrufbaren Einwilligung gemäß Art. 6 Abs. 1 S.1 lit. a DSGVO i.V.m. § 26 Abs. 2 BDSG.</p>
            <p>Ihre Angaben werden in unserem Haus vertraulich behandelt. Darüber hinaus findet eine Weitergabe Ihrer Daten nicht statt. Sofern nach dem Bewerbungsverfahren ein Arbeitsvertrag geschlossen wird, speichern wir die Daten aus Ihrer Bewerbung, die für die Durchführung Ihres Beschäftigungsverhältnisses benötigt werden. Bei erfolgloser Bewerbung werden Ihre Unterlagen nach Ablauf von 3 Monaten gelöscht.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Speicherdauer</h2>
            <p>Sofern wir nicht im Einzelnen bereits über die Speicherdauer informiert haben, löschen wir personenbezogene Daten, wenn sie für die vorgenannten Verarbeitungszwecke nicht mehr erforderlich sind und keine berechtigten Interessen oder andere (gesetzliche) Aufbewahrungsgründe einer Löschung entgegenstehen.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Ihre Rechte als betroffene Person</h2>
            <p className="mb-4">Bei der Verarbeitung Ihrer personenbezogenen Daten gewährt die DSGVO Ihnen als betroffene Person bestimmte Rechte:</p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-2">Auskunftsrecht (Art. 15 DSGVO)</h3>
                <p>Sie haben das Recht eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden; ist dies der Fall, so haben Sie ein Recht auf Auskunft über diese personenbezogenen Daten und auf die in Art. 15 DSGVO im Einzelnen aufgeführten Informationen.</p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Recht auf Berichtigung (Art. 16 DSGVO)</h3>
                <p>Sie haben das Recht, unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten und ggf. die Vervollständigung unvollständiger Daten zu verlangen.</p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Recht auf Löschung (Art. 17 DSGVO)</h3>
                <p>Sie haben das Recht, zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden, sofern einer der in Art. 17 DSGVO im Einzelnen aufgeführten Gründe zutrifft.</p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
                <p>Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen, wenn eine der in Art. 18 DSGVO aufgeführten Voraussetzungen gegeben ist, z. B. wenn Sie Widerspruch gegen die Verarbeitung eingelegt haben, für die Dauer der Prüfung durch den Verantwortlichen.</p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
                <p>In bestimmten Fällen, die in Art. 20 DSGVO im Einzelnen aufgeführt sind, haben Sie das Recht, die Sie betreffenden personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten bzw. die Übermittlung dieser Daten an einen Dritten zu verlangen.</p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Widerrufsrecht (Art. 7 DSGVO)</h3>
                <p>Sofern die Verarbeitung von Daten auf Grundlage Ihrer Einwilligung erfolgt, sind Sie nach Art. 7 Abs. 3 DSGVO berechtigt, die Einwilligung in die Verwendung Ihrer personenbezogenen Daten jederzeit zu widerrufen. Bitte beachten Sie, dass der Widerruf erst für die Zukunft wirkt. Verarbeitungen, die vor dem Widerruf erfolgt sind, sind davon nicht betroffen.</p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Widerspruchsrecht (Art. 21 DSGVO)</h3>
                <p>Werden Daten auf Grundlage von Art. 6 Abs. 1 S. 1 lit. f DSGVO (Datenverarbeitung zur Wahrung berechtigter Interessen) oder auf Grundlage von Art. 6 Abs. 1 S. 1 lit. e DSGVO (Datenverarbeitung zur Wahrung öffentlichen Interesse oder in Ausübung öffentlicher Gewalt) erhoben, steht Ihnen das Recht zu, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Widerspruch einzulegen. Wir verarbeiten die personenbezogenen Daten dann nicht mehr, es sei denn, es liegen nachweisbar zwingende schutzwürdige Gründe für die Verarbeitung vor, die gegenüber Ihren Interessen, Rechten und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-2">Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</h3>
                <p>Sie haben gem. Art. 77 DSGVO das Recht auf Beschwerde bei einer Aufsichtsbehörde, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden Daten gegen datenschutzrechtliche Bestimmungen verstößt. Das Beschwerderecht kann insbesondere bei einer Aufsichtsbehörde in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes geltend gemacht werden.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Geltendmachung Ihrer Rechte</h2>
            <p>Sofern vorstehend nichts anderes beschrieben wurde, wenden Sie sich zur Geltendmachung Ihrer Betroffenenrechte bitte an die im Impressum genannte Stelle.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Kontaktinformationen</h2>
            <p className="mb-4">Wir nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Bei Fragen oder Anliegen zu Datenschutzthemen können Sie sich direkt an uns wenden:</p>
            <address className="not-italic">
              <p>E-Mail: <a href="mailto:info@innovativia.de" className="text-[#ed6e2c] hover:underline">info@innovativia.de</a></p>
              <p>Tel.: <a href="tel:+494213648100" className="text-[#ed6e2c] hover:underline">0421 3648 1000</a></p>
              <p>Am Tabakquartier 62</p>
              <p>28217 Bremen</p>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Datenschutz;