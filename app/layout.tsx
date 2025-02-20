import Script from "next/script";
import Image from "next/image";
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
            <meta
                name="description"
                content="Discover the best AI tools for automation, business growth, and passive income. Get exclusive deals on AI-powered software now!"
            />
            <meta
                name="keywords"
                content="AI tools, AI software, automation tools, best AI deals, passive income AI, make money online AI"
            />
            <meta name="author" content="AI Affiliate Deals" />
            <meta property="og:title" content="🔥 Best AI Tools & Exclusive Deals - 2025" />
            <meta
                property="og:description"
                content="Maximize your business with the top AI automation tools! Find the best deals here."
            />
            <meta property="og:image" content="/images/ai-deals-banner.png" />
            <meta property="og:url" content="https://www.ai-affiliate-deals.com" />
            <meta name="robots" content="index, follow" />

            {/* ADMITAD Affiliate Links */}
            <meta name="verify-admitad" content="1dfda65125" />

            {/* Google Tag Manager / Analytics Script */}
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
        <body className="text-white flex flex-col min-h-screen bg-gray-900">
        {/* Google Analytics Client-Skript */}
        <GAClient />

        {/* Sticky Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
            <nav
                className="
            bg-gradient-to-b
            from-purple-700
            via-pink-600
            to-orange-500
            text-white
            py-3
            px-6
            flex
            justify-between
            items-center
            shadow-lg
          "
            >
                {/* Brand-Section */}
                <div className="flex items-center space-x-2">
                    <Image
                        src="/images/logo_single.jpg"
                        alt="AI Icon"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <span className="text-2xl font-extrabold tracking-wide">AI Affiliate Deals</span>
                </div>
                {/* Top Deals Button */}
                <a
                    href="#ai-deals"
                    className="
                bg-white
                text-gray-900
                font-bold
                px-5
                py-2
                rounded-full
                hover:bg-gray-100
                transition
                shadow-md
              "
                >
                    🔝 Top Deals
                </a>
            </nav>
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
