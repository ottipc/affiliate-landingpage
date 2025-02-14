"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ImpressumModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Warten bis document.body verfügbar ist
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="text-yellow-400 hover:text-yellow-500 underline font-semibold transition"
            >
                Impressum
            </button>

            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            // Inline-Style erzwingt volle Viewport-Abdeckung & Zentrierung
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 50,
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                backdropFilter: "blur(4px)",
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="bg-gray-900 text-white p-8 rounded-2xl max-w-lg w-full shadow-xl relative"
                            >
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                                >
                                    ✖
                                </button>

                                <h2 className="text-3xl font-extrabold text-yellow-400 text-center mb-4">
                                    Impressum
                                </h2>

                                <p className="text-gray-300 text-center">
                                    Angaben gemäß § 5 TMG:
                                </p>
                                <p className="mt-4 text-gray-400 text-center">
                                    Ottavio Braun <br />
                                    Kaiser-Friedrich-Str. 8 <br />
                                    10585 Berlin <br />
                                    Deutschland <br />
                                </p>

                                <p className="mt-4 text-gray-300 text-center">Kontakt:</p>
                                <p className="text-gray-400 text-center">
                                    E-Mail:{" "}
                                    <a
                                        href="mailto:info@ai-affiliate-deals.com"
                                        className="text-yellow-400 hover:text-yellow-500"
                                    >
                                        info@ai-affiliate-deals.com
                                    </a>
                                </p>

                                <p className="mt-4 text-gray-300 text-center">
                                    Steuer-ID: 92415738903
                                </p>

                                <p className="mt-4 text-gray-300 text-center">Verantwortlich:</p>
                                <p className="text-gray-400 text-center">
                                    Ottavio Braun <br />
                                    Kaiser-Friedrich-Str. 8 <br />
                                    10585 Berlin <br />
                                </p>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="mt-6 w-full px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-bold hover:bg-yellow-600 transition"
                                >
                                    Schließen
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
