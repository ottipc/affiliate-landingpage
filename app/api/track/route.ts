import { NextResponse } from "next/server";

// Lese die GA4-Werte aus der .env-Datei (nur auf der Server-Seite verfügbar)
const GA4_MEASUREMENT_ID = process.env.GA4_MEASUREMENT_ID;
const GA4_API_SECRET = process.env.GA4_API_SECRET;

// Überprüfe, ob beide Variablen vorhanden sind
if (!GA4_MEASUREMENT_ID || !GA4_API_SECRET) {
  throw new Error("Missing GA4 measurement id or API secret in env variables.");
}

// Erzwinge die Node.js Runtime, damit process.env verfügbar ist
export const runtime = "nodejs";

/**
 * Dieser Code schickt Events an GA4 über das Measurement Protocol.
 * debug_mode: true sorgt dafür, dass die Events in der GA4 DebugView erscheinen.
 */
export async function GET() {
  console.log("❌ GET wurde aufgerufen! Fehler!");
  return NextResponse.json(
      { success: false, message: "❌ Use POST method!" },
      { status: 405 }
  );
}

export async function POST(req: Request) {
  console.log("✅ POST-Request erhalten (GA4-Version)!");

  try {
    const { event } = await req.json();
    console.log("📩 Empfangenes Event:", event);

    if (!event) {
      console.log("❌ Kein Event enthalten!");
      return NextResponse.json(
          { success: false, message: "❌ Event missing!" },
          { status: 400 }
      );
    }

    // Verwende eine dynamische, eindeutige client_id zum Testen
    const clientId = "test-" + Date.now();
    console.log("🆔 Generierte Client-ID:", clientId);

    // GA4 Measurement Protocol Payload mit zusätzlichem Logging
    const payload = {
      client_id: clientId,
      events: [
        {
          // Ändere den Event-Namen: Ersetze Leerzeichen durch Unterstriche
          name: event.replace(/\s+/g, '_'), // z.B. "test click" wird zu "test_click"
          params: {
            debug_mode: true, // boolescher Wert für DebugView
            event_label: "test_label",
            value: 1,
          },
        },
      ],
    };
    console.log("🚀 Payload an GA4:", JSON.stringify(payload));

    // GA4 Endpoint inkl. API Secret (nutze Debug Endpoint, um Validierungsfeedback zu bekommen)
    const endpoint = `https://www.google-analytics.com/debug/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_API_SECRET}`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const googleText = await response.text();
    console.log("📡 GA4 Response Status:", response.status);
    console.log("📡 GA4 Response Body:", googleText);

    if (!response.ok) {
      return NextResponse.json(
          { success: false, message: "GA4 failed!", googleText },
          { status: 500 }
      );
    }

    return NextResponse.json({ success: true, googleText, status: response.status });
  } catch (error) {
    console.error("🔥 Fehler:", error);
    return NextResponse.json(
        { success: false, error: error instanceof Error ? error.message : "Unknown error" },
        { status: 500 }
    );
  }
}
