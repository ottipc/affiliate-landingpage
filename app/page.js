"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton"; // Our cheeky CTA button
import "./globals.css";

export default function Home() {
  // Your updated AI tool array with English descriptions
  const aiTools = [
    {
      name: "CustomGPT",
      description:
          "Build custom GPT models tailored to your business. Train them with your own data and use them as chatbots, knowledge bases, or digital assistants.",
      link: "https://customgpt.ai/?fpr=otti54",
      image: "/images/customGPT.svg",
      id: "customgpt",
      cookieDuration: "30 days",
    },
    {
      name: "TubeMagic",
      description:
          "Grow your YouTube channel like crazy: more clicks, more subscribers, more fame!",
      link: "https://tubemagic.com/ds#aff=ai-affiliate-deals",
      image: "/images/tubemagic.webp",
      id: "tubemagic",
      cookieDuration: "30 days",
    },
    {
      name: "GetResponse",
      description:
          "An all-in-one marketing platform offering email automation, landing pages, webinars, and more.",
      link: "https://www.getresponse.com?ab=jWmGpmhpHx",
      image: "/images/getresponse.png",
      id: "getresponse",
      cookieDuration: "30 days",
    },
    {
      name: "Rytr",
      description:
          "AI writing assistant for catchy blog posts, ad copy, and social media content. Tired of staring at a blank page? Rytr has your back.",
      link: "https://affiliates.rytr.me/",
      image: "/images/rytr.png",
      id: "rytr",
      cookieDuration: "30 days",
    },
    {
      name: "Fliki",
      description:
          "Turn text into engaging voiceovers and videos. Harness AI power for your multimedia magic.",
      link: "https://fliki.ai?via=ottir",
      image: "/images/fliki.png",
      id: "fliki",
      cookieDuration: "30 days",
    },
    {
      name: "Synthesia",
      description:
          "Create realistic AI videos with avatars – perfect for explainers, product demos, or whenever you don’t want to show your own face.",
      link: "https://www.synthesia.io/?via=ottir",
      image: "/images/synthesia.png",
      id: "synthesia",
      cookieDuration: "30 days",
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
          <div
              id="ai-deals"
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
          >
            {aiTools.map((tool, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-800 shadow-xl rounded-2xl p-6 flex flex-col items-center transition-transform border border-gray-700 hover:shadow-2xl"
                >
                  {/* Image Container (8:5) */}
                  <div className="relative w-full aspect-[8/5] bg-white rounded-lg overflow-hidden">
                    {["rytr", "tubemagic"].includes(tool.id) ? (
                        <Image
                            src={tool.image}
                            alt={tool.name}
                            fill
                            className="object-cover"
                            loading="lazy"
                        />
                    ) : (
                        <Image
                            src={tool.image}
                            alt={tool.name}
                            fill
                            className="object-contain p-4"
                            loading="lazy"
                        />
                    )}
                  </div>
                  <h2 className="text-2xl font-bold mt-4 text-yellow-300" id={tool.id}>
                    {tool.name}
                  </h2>
                  <p className="text-gray-400 mt-2 text-center">{tool.description}</p>
                  <CTAButton href={tool.link} toolName={tool.name} />

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
                  for email automation and more.
                </p>
              </div>
              <div>
                <p className="font-bold">How can AI help my business?</p>
                <p>
                  AI can automate tasks like copywriting, email marketing, content creation, and
                  even website building. It’s all about working smarter, not harder.
                </p>
              </div>
              <div>
                <p className="font-bold">Are these deals limited?</p>
                <p>
                  Yes, they’re exclusive, limited-time deals. Grab them before they vanish into
                  thin air like your last bar tab.
                </p>
              </div>
            </div>
          </div>

          {/* Google AdSense Placeholder */}
          <div className="mt-12 w-full max-w-7xl">
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
