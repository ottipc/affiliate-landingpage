import React from "react";

interface CTAButtonProps {
    href: string;
    toolName: string;
}

export default function CTAButton({ href, toolName }: CTAButtonProps) {
    const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        console.log("CTA Button clicked:", toolName);
        //alert("Sending event...: " + toolName + " click");

        try {
            const response = await fetch("/api/track", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ event: `${toolName} click` }),
            });
            const data = await response.json();
            console.log("Proxy Response:", data);
        } catch (err) {
            console.error("Error sending event via proxy:", err);
        }

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
