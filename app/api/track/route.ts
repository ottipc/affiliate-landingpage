import { NextResponse } from "next/server";

const GA_TRACKING_ID = "G-8QPPR4B37X";

export async function GET() {
  console.log("❌ GET wurde aufgerufen! Fehler!");
  return NextResponse.json({
    success: false,
    message: "❌ Use Scheiss POST method!"
  }, { status: 405 });
}

export async function POST(req: Request) {
  console.log("✅ POST-Request erhalten!");

  try {
    const { event } = await req.json();
    console.log("📩 Empfangenes Event:", event);

    if (!event) {
      console.log("❌ Kein Event enthalten!");
      return NextResponse.json({ success: false, message: "❌ Event missing!" }, { status: 400 });
    }

    const body = `v=1&t=event&tid=${GA_TRACKING_ID}&cid=555&ec=proxy&ea=${event}&el=test_label&ev=1`;

    const response = await fetch("https://www.google-analytics.com/collect", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    console.log("📡 GA Response Status:", response.status);

    return response.ok
        ? NextResponse.json({ success: true })
        : NextResponse.json({ success: false, message: "GA failed!" }, { status: 500 });

  } catch (error) {
    console.error("🔥 Fehler:", error);
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
