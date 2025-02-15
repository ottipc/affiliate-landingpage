import React from "react";

interface CTAButtonProps {
    href: string;
    toolName: string;
}

export default function CTAButton({ href, toolName }: CTAButtonProps) {
    const handleClick = () => {
        console.log("CTA Button clicked!");
        if (typeof window.gtag === "function") {
            window.gtag("event", "click", {
                event_category: "CTA",
                event_label: toolName,
                value: 1,
            });
        } else {
            console.error("gtag is not defined – Google, verfluch deine Tracking-Sache!");
        }
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="mt-4 bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl hover:shadow-lg hover:bg-yellow-600 font-bold transition w-full text-center text-lg flex items-center justify-center"
        >
            🔥 Get Best Deal Now 👉
        </a>
    );
}
