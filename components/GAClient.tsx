"use client";
import { useEffect } from "react";

export default function GAClient() {
    useEffect(() => {
        fetch("/api/track", { method: "POST" })
            .then((res) => res.json())
            .then((data) => console.log("🔥 GA Proxy Response:", data))
            .catch((err) => console.error("GA Proxy Error:", err));
    }, []);

    return null;
}
