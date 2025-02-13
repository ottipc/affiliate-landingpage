import { NextResponse } from "next/server";

const GA_TRACKING_ID = "G-8QPPR4B37X";

export async function GET() {
  return NextResponse.json({
    success: false,
    message: "❌ Use Scheiss POST method!"
  }, { status: 405 });  // ✅ Gibt den Fehler zurück, wenn jemand GET nutzt
}

// ✅ Hier checken wir, ob wirklich ein POST-Request kommt!
export async function POST(req: Request) {
  try {
    const { event } = await req.json();  // ✅ Wir lesen die Event-Daten

    if (!event) {
      return NextResponse.json({ success: false, message: "❌ Event missing!" }, { status: 400 });
    }

    // ✅ Body für Google Analytics
    const body = `v=1&t=event&tid=${GA_TRACKING_ID}&cid=555&ec=proxy&ea=${event}&el=test_label&ev=1`;

    // ✅ Senden an Google Analytics
    const response = await fetch("https://www.google-analytics.com/collect", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    return response.ok
        ? NextResponse.json({ success: true })
        : NextResponse.json({ success: false, message: "GA failed!" }, { status: 500 });

  } catch (error) {
    console.error("🔥 Fehler beim Verarbeiten des Tracking-Events:", error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
