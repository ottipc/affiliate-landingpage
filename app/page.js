'use client';

import { useState } from "react";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  const [selectedTool, setSelectedTool] = useState(null);

  const aiTools = [
    {
      name: "ChatGPT Pro",
      description: "Leistungsstarke AI für Content Creation und Automatisierung.",
      link: "https://partnerstack.com/chatgpt-pro",
      image: "/images/chat-gpt.png",
    },
    {
      name: "Jasper AI",
      description: "Erstelle hochwertige Texte mit KI-Unterstützung.",
      link: "https://partnerstack.com/jasper-ai",
      image: "/images/jasper.png",
    },
    {
      name: "Synthesia",
      description: "Erstelle Videos mit KI-generierten Avataren.",
      link: "https://partnerstack.com/synthesia",
      image: "/images/synthesia.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 text-center">
      <header className="text-4xl font-extrabold text-yellow-400">🔥 Die besten AI-Tools & exklusive Deals 🔥</header>
      <p className="text-gray-300 mt-2 text-lg">Sichere dir jetzt die besten Angebote für 2025</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiTools.map((tool, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-xl p-6 cursor-pointer hover:scale-105 transition border border-gray-700"
            onClick={() => setSelectedTool(tool)}
          >
            <Image src={tool.image} alt={tool.name} width={200} height={200} className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold mt-4 text-yellow-300">{tool.name}</h2>
            <p className="text-gray-400 mt-2">{tool.description}</p>
            <a
              href={tool.link}
              target="_blank"
              className="mt-4 inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-xl hover:bg-yellow-600 font-bold"
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
              className="mt-4 inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-xl hover:bg-yellow-600 font-bold"
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

