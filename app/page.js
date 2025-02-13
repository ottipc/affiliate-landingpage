'use client';

import { useState } from "react";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  const [selectedTool, setSelectedTool] = useState(null);

  const aiTools = [
    {
      name: "Jasper AI",
      description: "Erstelle hochwertige Texte mit KI-Unterstützung.",
      link: "https://saasaffiliate.com/partner/jasper-ai-affiliate-program/?utm_source=chatgpt.com",  // Jasper AI Link
      image: "/images/jasper.png",
    },
    {
      name: "CustomGPT.ai",
      description: "Erstelle maßgeschneiderte ChatGPT-Modelle für dein Unternehmen.",
      link: "https://customgpt.ai/?fpr=otti54",  // CustomGPT.ai Link
      image: "/images/customgbt.png",
    },
    {
      name: "Bluehost",
      description: "Die beste Web-Hosting-Lösung für dein Online-Business.",
      link: "https://www.bluehost.com/track/youraffiliateid",  // Bluehost Link
      image: "/images/bluehost.png",
    },
    {
      name: "Semrush",
      description: "Das beste SEO-Tool für dein Online-Marketing.",
      link: "https://www.semrush.com/affiliate/",  // Semrush Link
      image: "/images/semrush.png",
    },
    {
      name: "ClickFunnels",
      description: "Erstelle effektive Sales Funnels und steigere deinen Umsatz.",
      link: "https://www.clickfunnels.com/affiliate",  // ClickFunnels Link
      image: "/images/clickfunnels.png",
    },
  ];

  return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 text-center">
        <header className="text-4xl font-extrabold text-yellow-400">🔥 Die besten AI-Tools & exklusiven Deals für 2025 🔥</header>
        <p className="text-gray-300 mt-2 text-lg">Sichere dir jetzt die besten Angebote und Tools, um dein Business zu transformieren</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiTools.map((tool, index) => (
              <div
                  key={index}
                  className="bg-gray-800 shadow-lg rounded-xl p-6 cursor-pointer hover:scale-105 transition transform hover:translate-y-2 border border-gray-700"
                  onClick={() => setSelectedTool(tool)}
              >
                <Image src={tool.image} alt={tool.name} width={200} height={200} className="mx-auto rounded-lg" />
                <h2 className="text-2xl font-bold mt-4 text-yellow-300">{tool.name}</h2>
                <p className="text-gray-400 mt-2">{tool.description}</p>
                <a
                    href={tool.link}
                    target="_blank"
                    className="mt-4 inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-xl hover:bg-yellow-600 font-bold transition"
                >
                  🔥 Jetzt Angebot sichern
                </a>
              </div>
          ))}
        </div>

        {selectedTool && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4">
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center border border-gray-600">
                <h2 className="text-3xl font-bold text-yellow-400">{selectedTool.name}</h2>
                <p className="text-gray-300 mt-2 text-lg">{selectedTool.description}</p>
                <a
                    href={selectedTool.link}
                    target="_blank"
                    className="mt-4 inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-xl hover:bg-yellow-600 font-bold transition"
                >
                  🔥 Jetzt Angebot sichern
                </a>
                <button
                    onClick={() => setSelectedTool(null)}
                    className="mt-4 block text-gray-400 hover:text-white text-lg font-semibold"
                >
                  ✖ Schließen
                </button>
              </div>
            </div>
        )}
      </div>
  );
}
