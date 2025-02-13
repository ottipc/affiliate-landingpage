import Script from "next/script";
import { ReactNode } from "react";

export const metadata = {
    title: "🔥 AI-Deals – Die besten AI-Tools & exklusive Angebote",
    description: "Sichere dir exklusive Rabatte für die besten AI-Tools!",
    openGraph: {
        title: "🔥 AI-Deals – Die besten AI-Tools & exklusive Angebote",
        description: "Sichere dir exklusive Rabatte für die besten AI-Tools!",
        url: "https://ai-affiliate-deals.com",
        type: "website",
        images: [
            {
                url: "/images/meta-preview.jpg",
                width: 1200,
                height: 630,
                alt: "AI Affiliate Deals",
            },
        ],
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-8QPPR4B37X";

    return (
        <html lang="de">
        <head>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `}
            </Script>
        </head>
        <body>{children}</body>
        </html>
    );
}

