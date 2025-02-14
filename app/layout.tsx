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
            <title>Best AI Tools & Exclusive Deals - 2025</title>
            <meta name="description" content="Discover the best AI tools for automation, business growth, and passive income. Get exclusive deals on AI-powered software now!" />
            <meta name="keywords" content="AI tools, AI software, automation tools, best AI deals, passive income AI, make money online AI" />
            <meta name="author" content="AI Affiliate Deals" />
            <meta property="og:title" content="🔥 Best AI Tools & Exclusive Deals - 2025" />
            <meta property="og:description" content="Maximize your business with the top AI automation tools! Find the best deals here." />
            <meta property="og:image" content="/images/ai-deals-banner.png" />
            <meta property="og:url" content="https://www.ai-affiliate-deals.com" />
            <meta name="robots" content="index, follow" />
            {/* Google Tag Manager Script */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-8QPPR4B37X"
                strategy="afterInteractive"
            />
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

        {/* Sticky Navigation (fixed auf allen Seiten) */}
        <div className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md text-white py-3 px-6 flex justify-between items-center z-50">
            <span className="text-lg font-bold">🔥 AI Affiliate Deals</span>
            <a
                href="#"
                className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-600 transition"
            >
                🔝 Top Deals
            </a>
        </div>

        {/* Extra top padding to account for the sticky nav */}
        <main className="flex-grow pt-16">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 p-6 text-center flex flex-col items-center">
            <div className="text-gray-400 text-lg flex gap-4">
                <ImpressumModal />
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
