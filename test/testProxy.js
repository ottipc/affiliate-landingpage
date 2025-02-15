// testProxy.js
// Dieses Script sendet ein Dummy-Event "test click" an deinen Proxy unter /api/track
// und gibt die komplette JSON-Antwort aus, inklusive googleText (die GA-Antwort).

(async () => {
    try {
        // Sende einen POST-Request an deinen Next.js-Proxy
        const response = await fetch("http://localhost:3000/api/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ event: "test click" }),
        });

        // Lies die gesamte JSON-Antwort
        const data = await response.json();
        console.log("Proxy Response from server:", data);

    } catch (err) {
        console.error("Error sending test event:", err);
    }
})();
