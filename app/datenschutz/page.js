export default function Datenschutz() {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-10 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-yellow-400">Datenschutzerklärung</h1>
            <p className="mt-4 text-gray-300 text-center max-w-2xl">
                Diese Datenschutzerklärung informiert Sie über die Verarbeitung personenbezogener Daten innerhalb unserer Webseite.
            </p>

            <div className="mt-8 max-w-3xl">
                <h2 className="text-2xl font-bold text-yellow-300 mt-6">1. Verantwortlicher</h2>
                <p className="text-gray-400">
                    Ottavio Braun <br />
                    Kaiser-Friedrich-Str. 8 <br />
                    10585 Berlin <br />
                    E-Mail: <a href="mailto:info@ai-affiliate-deals.com" className="text-yellow-400 hover:text-yellow-500">info@ai-affiliate-deals.com</a>
                </p>

                <h2 className="text-2xl font-bold text-yellow-300 mt-6">2. Cookies</h2>
                <p className="text-gray-400">
                    Unsere Website verwendet Cookies. Sie können die Speicherung durch eine entsprechende Einstellung Ihrer Browser-Software verhindern.
                </p>

                <h2 className="text-2xl font-bold text-yellow-300 mt-6">3. Google Analytics</h2>
                <p className="text-gray-400">
                    Diese Website nutzt Google Analytics zur Analyse der Besucherzahlen. Google verwendet Cookies, die eine Analyse der Benutzung ermöglichen.
                </p>

                <h2 className="text-2xl font-bold text-yellow-300 mt-6">4. Ihre Rechte</h2>
                <p className="text-gray-400">
                    Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob Ihre Daten verarbeitet werden sowie das Recht auf Berichtigung oder Löschung dieser Daten.
                </p>

                <h2 className="text-2xl font-bold text-yellow-300 mt-6">5. Kontakt</h2>
                <p className="text-gray-400">
                    Bei Fragen zur Erhebung oder Nutzung Ihrer Daten wenden Sie sich bitte an:
                    <a href="mailto:info@ai-affiliate-deals.com" className="text-yellow-400 hover:text-yellow-500"> info@ai-affiliate-deals.com</a>
                </p>
            </div>
        </div>
    );
}
