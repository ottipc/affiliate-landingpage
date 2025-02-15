import React from "react";

interface CTAButtonProps {
    href: string;
    toolName: string;
}

export default function CTAButton({ href, toolName }: CTAButtonProps) {
    const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Blockiere das direkte Navigieren

        try {
            // Sende das Event über deinen Proxy; das Event heißt z. B. "GetResponse click"
            console.log("CTA Button clicked!");
            const response = await fetch("/api/track", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ event: `${toolName} click` }),
            });

            if (response.ok) {
                console.log("Event successfully sent via proxy!");
            } else {
                console.error("Proxy event sending failed!", await response.text());
            }
        } catch (err) {
            console.error("Error sending event via proxy:", err);
        }

        // Öffne den Link manuell in einem neuen Tab
        window.open(href, "_blank", "noopener,noreferrer");
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
