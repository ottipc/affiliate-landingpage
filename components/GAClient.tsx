"use client";
import { useEffect, useState } from "react";

export default function GAClient() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        console.log("Sende Tracking-Daten an unseren Proxy...");

        fetch("/api/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ event: "page_view" })
        })
            .then((res) => res.json())
            .then((data) => console.log("🔥 GA Proxy Response:", data))
            .catch((err) => console.error("❌ GA Proxy Error:", err));
    }, [isClient]);

    return null;
}
