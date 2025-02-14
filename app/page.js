"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./globals.css";

export default function Home() {
  const aiTools = [
    {
      name: "GetResponse",
      description: "The most powerful email marketing tool for your business.",
      link: "https://www.getresponse.com?ab=jWmGpmhpHx", // AFFILIATE LINK
      image: "/images/getresponse.png",
    },
    {
      name: "Copy.ai",
      description: "Automate your copywriting with state-of-the-art AI power.",
      link: "https://www.copy.ai/affiliate",
      image: "/images/copyai.svg",
    },
    {
      name: "Writesonic",
      description: "Turn ideas into content with the power of AI.",
      link: "https://www.writesonic.com/affiliate",
      image: "/images/writesonic.svg",
    },
    {
      name: "Tubemagic",
      description: "Growing on YouTube made easy!",
      link: "https://tubemagic.com/ds#aff=otti50",
      image: "/images/tubemagic.webp",
    },
    {
      name: "CustomGPT.ai",
      description: "Create custom-tailored ChatGPT models for your business.",
      link: "https://customgpt.ai/?fpr=otti54",
      image: "/images/customGPT.svg",
    },
    {
      name: "Bluehost",
      description: "The best web hosting solution for your online business.",
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
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 drop-shadow-xl">
            🚀 The Best AI Tools & Exclusive Deals for 2025 🔥
          </h1>
          <p className="text-gray-300 mt-4 text-lg font-light">
            Grab the top AI solutions now and boost your business with the latest technology!
          </p>
        </motion.header>

        {/* AI Tool Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {aiTools.map((tool, index) => (
              <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 shadow-xl rounded-2xl p-6 flex flex-col items-center transition-transform border border-gray-700 hover:shadow-2xl"
              >
                {/* Uniform image container with an 8:5 aspect ratio */}
                <div className="relative w-full aspect-[8/5] bg-white rounded-lg overflow-hidden">
                  <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      className="object-contain p-4"
                      loading="lazy"
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
                  🔥 Get Offer Now
                </a>
              </motion.div>
          ))}
        </div>
      </div>
  );
}
