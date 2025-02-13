export const metadata = {
  title: "🔥 AI-Deals – Die besten AI-Tools & exklusive Angebote",
  description: "Sichere dir exklusive Rabatte für die besten AI-Tools wie ChatGPT, Jasper und Synthesia!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        {/* Google Analytics Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8QPPR4B37X"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8QPPR4B37X', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

