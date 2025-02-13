import Script from "next/script";
import GAClient from "@/components/GAClient"; // Import der Client-Komponente
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
        <body>
        {/* Client Component für sicheres GA-Tracking */}
        <GAClient />
        {children}
        </body>
        </html>
    );
}
