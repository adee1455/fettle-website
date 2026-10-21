import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const format = searchParams.get("format");

  // Determine file to download
  const filename = format === "zip" ? "Fettle-macOS.zip" : "Fettle-macOS.dmg";
  const downloadUrl = `https://github.com/adee1455/fettle/releases/latest/download/${filename}`;

  // Log download for serverless/edge monitoring without database
  const userAgent = request.headers.get("user-agent") || "unknown";
  const referer = request.headers.get("referer") || "direct";
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  console.log(`[DOWNLOAD] ${filename} requested at ${new Date().toISOString()} | Ref: ${referer} | UA: ${userAgent.slice(0, 50)} | IP: ${ip.split(",")[0]}`);

  // Optional: Forward to Google Analytics Measurement Protocol if env is set
  const gaId = process.env.GA_MEASUREMENT_ID;
  const gaSecret = process.env.GA_API_SECRET;
  if (gaId && gaSecret) {
    try {
      fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${gaId}&api_secret=${gaSecret}`, {
        method: "POST",
        body: JSON.stringify({
          client_id: ip.split(",")[0] || "anonymous",
          events: [
            {
              name: "file_download",
              params: {
                file_name: filename,
                file_extension: format === "zip" ? "zip" : "dmg",
                link_url: downloadUrl,
              },
            },
          ],
        }),
      }).catch(() => {});
    } catch {
      // Non-blocking
    }
  }

  // Perform direct 302 redirect so the browser immediately downloads the file
  return NextResponse.redirect(downloadUrl, {
    status: 302,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
