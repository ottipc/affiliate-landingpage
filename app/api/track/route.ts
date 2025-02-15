import { NextResponse } from "next/server";

// Lese die Werte aus der .env-Datei (nur auf der Server-Seite verfügbar)
const GA4_MEASUREMENT_ID = process.env.GA4_MEASUREMENT_ID;
const GA4_API_SECRET = process.env.GA4_API_SECRET;

// Überprüfe, ob beide Variablen vorhanden sind
if (!GA4_MEASUREMENT_ID || !GA4_API_SECRET) {
  throw new Error("Missing GA4 measurement id or API secret in env variables.");
}

/**
 * Dieser Code schickt Events an GA4 über das Measurement Protocol.
 * debug_mode: 1 sorgt dafür, dass die Events in der GA4 DebugView erscheinen.
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

    // GA4 Measurement Protocol Payload
    const payload = {
      client_id: Date.now().toString(), // Für echte Nutzer solltest du hier eine echte Client-ID verwenden
      events: [
        {
          name: event, // z. B. "GetResponse click"
          params: {
            debug_mode: true, // Damit das Event in der DebugView erscheint
            event_label: "test_label",
            value: 1,
          },
        },
      ],
    };

    // GA4 Endpoint inkl. API Secret
    const endpoint = `https://www.google-analytics.com/debug/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_API_SECRET}`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    console.log("📡 GA4 Response Status:", response.status);

    if (!response.ok) {
      return NextResponse.json(
          { success: false, message: "GA4 failed!" },
          { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("🔥 Fehler:", error);
    return NextResponse.json(
        { success: false, error: error instanceof Error ? error.message : "Unknown error" },
        { status: 500 }
    );
  }
}
