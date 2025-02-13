import { NextResponse } from "next/server";

const GA_TRACKING_ID = "G-8QPPR4B37X";

export async function GET() {
  return NextResponse.json({ success: false, message: "Use POST method." }, { status: 405 });
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: Request) {
  const body = `v=1&t=event&tid=${GA_TRACKING_ID}&cid=555&ec=proxy&ea=test_event&el=test_label&ev=1`;

  const response = await fetch("https://www.google-analytics.com/collect", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  return response.ok
      ? NextResponse.json({ success: true })
      : NextResponse.json({ success: false }, { status: 500 });
}
