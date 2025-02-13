// app/layout.js

import Script from "next/script";

export const metadata = {
    title: "AI-Deals – Die besten AI-Tools & exklusive Angebote",
};

export default function RootLayout({ children }) {
    return (
        <html lang="de">
        <head>
            {/* GA4: Lade das Skript NACH dem Interaktivwerden der Seite */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-8QPPR4B37X"
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8QPPR4B37X', {
              page_path: window.location.pathname,
            });
          `}
            </Script>
        </head>
        <body>{children}</body>
        </html>
    );
}
