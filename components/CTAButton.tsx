// components/CTAButton.tsx
import React from "react";
import Image from "next/image";

interface CTAButtonProps {
    href: string;
    toolName: string;
}

export default function CTAButton({ href, toolName }: CTAButtonProps) {
    const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        console.log("CTA Button clicked:", toolName);

        // GA4 Tracking Event
        if (window.gtag) {
            window.gtag("event", `${toolName}_cta_click`, {
                event_category: "Affiliate",
                event_label: toolName,
                value: 1,
            });
        }

        // Sende das Tracking-Event über den Server-Proxy
        try {
            const response = await fetch("/api/track", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ event: `${toolName.replace(/\s+/g, "_")}_click` }),
            });
            const data = await response.json();
            console.log("Google Response from Proxy:", data);
        } catch (err) {
            console.error("Error sending tracking event via proxy:", err);
        }

        // Öffne den Link in einem neuen Tab
        window.open(href, "_blank", "noopener,noreferrer");
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="
        block
        w-full
        text-center
        bg-gradient-to-r
        from-yellow-400
        via-pink-500
        to-red-500
        rounded-full
        px-8
        py-8
        text-2xl
        sm:text-3xl
        font-extrabold
        text-white
        uppercase
        tracking-widest
        shadow-xl
        hover:shadow-2xl
        transform
        transition
        duration-300
        hover:scale-105
        focus:outline-none
        focus:ring-4
        focus:ring-pink-300
      "
            style={{ letterSpacing: "2px" }}
        >
            <div className="flex items-center justify-center gap-3">
                <Image
                    src="/images/rocket.png"
                    alt="Rocket Icon"
                    width={32}
                    height={32}
                    className="inline-block"
                />
                <span>
          Get Best Deals <span className="inline-block">🔥</span>
        </span>
            </div>
        </a>
    );
}
