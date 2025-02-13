import { NextResponse } from "next/server";

const GA_TRACKING_ID = "G-8QPPR4B37X";

export async function GET() {
  return NextResponse.json({ success: false, message: "Use POST method." }, { status: 405 });
}

export async function POST(req: Request) {
  try {
    const eventData = await req.json();
    console.log("🔥 Eingehendes Tracking-Event:", eventData);

    const body = new URLSearchParams({
      v: "1",
      t: "event",
      tid: GA_TRACKING_ID,
      cid: "555",
      ec: eventData.category || "proxy",
      ea: eventData.event || "test_event",
      el: eventData.label || "test_label",
      ev: eventData.value?.toString() || "1",
    });

    const response = await fetch("https://www.google-analytics.com/collect", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    return response.ok
        ? NextResponse.json({ success: true })
        : NextResponse.json({ success: false }, { status: 500 });
  } catch (error) {
    console.error("🔥 Fehler beim Verarbeiten des Tracking-Events:", error);

    // 💥 Hier kommt der Fix: Expliziter Cast zu `Error`
    const errMessage = error instanceof Error ? error.message : "Unbekannter Fehler";

    return NextResponse.json({ success: false, error: errMessage }, { status: 500 });
  }
}

