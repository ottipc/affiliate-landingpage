"use client";

import Image from "next/image";
import ImpressumModal from "../components/ImpressumModal";
import { motion } from "framer-motion";
import "./globals.css";

export default function Home() {
  const aiTools = [
    {
      name: "Jasper AI",
      description: "Erstelle hochwertige Texte mit KI-Unterstützung.",
      link: "https://saasaffiliate.com/partner/jasper-ai-affiliate-program/?utm_source=chatgpt.com",
      image: "/images/jasper.svg",
    },
    {
      name: "Copy.ai",
      description: "Automatisiere dein Copywriting mit modernster KI-Power.",
      link: "https://www.copy.ai/affiliate",
      image: "/images/copyai.svg",
    },
    {
      name: "Writesonic",
      description: "Verwandle Ideen in Inhalte mit der Kraft von KI.",
      link: "https://www.writesonic.com/affiliate",
      image: "/images/writesonic.svg",
    },
    {
      name: "Copysmith",
      description: "Skaliere deine Content-Erstellung mit KI-Technologie.",
      link: "https://www.copysmith.ai/affiliate",
      image: "/images/copysmith.png",
    },
    {
      name: "CustomGPT.ai",
      description: "Erstelle maßgeschneiderte ChatGPT-Modelle für dein Business.",
      link: "https://customgpt.ai/?fpr=otti54",
      image: "/images/customGPT.svg",
    },
    {
      name: "Bluehost",
      description: "Die beste Web-Hosting-Lösung für dein Online-Business.",
      link: "https://www.bluehost.com/track/youraffiliateid",
      image: "/images/bluehost.png",
    },
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center px-6 py-16">
        {/* Header */}
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full max-w-4xl mb-12"
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 drop-shadow-lg">
            🚀 Die besten AI-Tools & exklusiven Deals für 2025 🔥
          </h1>
          <p className="text-gray-300 mt-4 text-lg font-light">
            Sichere dir jetzt die Top-KI-Lösungen und booste dein Business mit der neuesten Technologie!
          </p>
        </motion.header>

        {/* AI Tool Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {aiTools.map((tool, index) => (
              <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 shadow-xl rounded-2xl p-6 flex flex-col items-center transition-transform border border-gray-700 hover:shadow-2xl"
              >
                <div className="relative w-64 h-40 bg-white rounded-lg overflow-hidden flex items-center justify-center">
                  {/* Logos mit weißem Hintergrund und 'object-contain' */}
                  <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      className="object-contain p-2"
                  />
                </div>
                <h2 className="text-2xl font-bold mt-4 text-yellow-300">{tool.name}</h2>
                <p className="text-gray-400 mt-2 text-center">{tool.description}</p>
                <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl hover:shadow-lg hover:bg-yellow-600 font-bold transition w-full text-center text-lg flex items-center justify-center"
                >
                  🔥 Jetzt Angebot sichern
                </a>
              </motion.div>
          ))}
        </div>

        {/* Footer mit Impressum */}

      </div>
  );
}
