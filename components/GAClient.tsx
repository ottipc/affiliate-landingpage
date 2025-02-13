"use client";
import { useEffect } from "react";

export default function GAClient() {
    useEffect(() => {
        const trackEvent = async () => {
            try {
                const response = await fetch("/api/track", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        event: "page_view",
                        category: "user_interaction",
                        label: "GAClientLoaded",
                        value: 1,
                    }),
                });

                const data = await response.json();
                console.log("🔥 GA Proxy Response:", data);
            } catch (err) {
                console.error("GA Proxy Error:", err);
            }
        };

        trackEvent();
    }, []);

    return null;
}
