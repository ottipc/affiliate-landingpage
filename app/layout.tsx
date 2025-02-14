import Script from "next/script";
import GAClient from "@/components/GAClient";
import ImpressumModal from "@/components/ImpressumModal";

export const metadata = {
    title: "AI Affiliate Deals",
    description: "Die besten AI-Affiliate-Deals",
    other: {
        "impact-site-verification": "636cee94-4eae-4934-a6dd-aaa3db039ecd",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="de">
        <head>
            {/* Google Tag Manager Script */}
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-8QPPR4B37X" strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8QPPR4B37X', { debug_mode: true });
          `}
            </Script>
        </head>
        <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        {/* Google Analytics Client-Skript */}
        <GAClient />

        <main className="flex-grow">{children}</main>

        {/* ImpressumModal an Root-Level, um zentrale Position zu garantieren */}
        <ImpressumModal />

        {/* Footer ohne Impressum */}
        <footer className="bg-gray-800 p-6 text-center flex flex-col items-center">
            <div className="text-gray-400 text-lg flex gap-4">
                <a href="/datenschutz" className="text-yellow-400 hover:text-yellow-500">
                    Datenschutz
                </a>
            </div>
            <p className="text-gray-500 mt-2 text-sm">
                © {new Date().getFullYear()} AI-Affiliate-Deals. Alle Rechte vorbehalten.
            </p>
        </footer>
        </body>
        </html>
    );
}
