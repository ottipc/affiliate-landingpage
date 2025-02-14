"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import "./globals.css";

export default function Home() {
  const aiTools = [
    {
      name: "GetResponse",
      description: "The most powerful email marketing tool for your business.",
      link: "https://www.getresponse.com?ab=jWmGpmhpHx",
      image: "/images/getresponse.png",
      id: "getresponse",
    },
    {
      name: "Copy.ai",
      description: "Automate your copywriting with state-of-the-art AI power.",
      link: "https://www.copy.ai/affiliate",
      image: "/images/copyai.svg",
      id: "copyai",
    },
    {
      name: "Writesonic",
      description: "Turn ideas into content with the power of AI.",
      link: "https://www.writesonic.com/affiliate",
      image: "/images/writesonic.svg",
      id: "writesonic",
    },
    {
      name: "Tubemagic",
      description: "Growing on YouTube made easy!",
      link: "https://tubemagic.com/ds#aff=otti50",
      image: "/images/tubemagic.webp",
      id: "tubemagic",
    },
    {
      name: "CustomGPT.ai",
      description: "Create custom-tailored ChatGPT models for your business.",
      link: "https://customgpt.ai/?fpr=otti54",
      image: "/images/customGPT.svg",
      id: "customgpt",
    },
    {
      name: "Bluehost",
      description: "The best web hosting solution for your online business.",
      link: "https://www.bluehost.com/track/youraffiliateid",
      image: "/images/bluehost.png",
      id: "bluehost",
    },
  ];

  return (
      <>
        <Head>
          <title>🔥 Best AI Tools & Exclusive Deals - 2025</title>
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
        </Head>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center px-6 py-16">
          {/* FOMO Banner */}
          <div className="bg-red-500 text-white text-center py-3 font-bold w-full mb-4">
            🚀 Limited-Time AI Deals Ending Soon! Grab Yours Now 👉{" "}
            <a href="#ai-deals" className="underline">
              View Deals
            </a>
          </div>

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
          <div id="ai-deals" className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
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
                  <h2 className="text-2xl font-bold mt-4 text-yellow-300" id={tool.id}>
                    {tool.name}
                  </h2>
                  <p className="text-gray-400 mt-2 text-center">{tool.description}</p>
                  <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl hover:shadow-lg hover:bg-yellow-600 font-bold transition w-full text-center text-lg flex items-center justify-center"
                  >
                    🔥 Get Best Deal Now 👉
                  </a>
                </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-12 text-white w-full max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">💡 Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold">What are the best AI tools for marketing?</p>
                <p>
                  Some of the best AI tools for marketing include{" "}
                  <a href="https://www.ai-affiliate-deals.com#getresponse" className="underline">
                    GetResponse
                  </a>{" "}
                  for email automation and{" "}
                  <a href="https://www.ai-affiliate-deals.com#copyai" className="underline">
                    Copy.ai
                  </a>{" "}
                  for copywriting.
                </p>
              </div>
              <div>
                <p className="font-bold">How can AI help my business?</p>
                <p>
                  AI can automate tasks like copywriting, email marketing, content creation, and even website
                  building. It’s all about working smarter, not harder.
                </p>
              </div>
              <div>
                <p className="font-bold">Are these deals limited?</p>
                <p>
                  Yes, they’re exclusive, limited-time deals. Grab them before they vanish into thin air like your
                  last paycheck.
                </p>
              </div>
            </div>
          </div>

          {/* Google AdSense Placeholder */}
          <div className="mt-12 w-full max-w-4xl">
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="YOUR_ADSENSE_CLIENT_ID"
                data-ad-slot="YOUR_AD_SLOT_ID"
                data-ad-format="auto"
            ></ins>
            <script
                dangerouslySetInnerHTML={{
                  __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
                }}
            />
          </div>
        </div>
      </>
  );
}
