import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title =
      searchParams.get("title") ?? "Tailwind CSS Gradient Generator";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // Using a beautiful gradient that represents color generation
            background:
              "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
            padding: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: "40px 60px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              maxWidth: "80%",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 72,
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
                lineHeight: 1.2,
                marginBottom: "20px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              {title}
            </div>

            <div
              style={{
                fontSize: 32,
                color: "rgba(255, 255, 255, 0.9)",
                textAlign: "center",
                maxWidth: "600px",
                lineHeight: 1.4,
              }}
            >
              Create beautiful gradients with our intuitive generator. Export as
              Tailwind CSS, raw CSS, or download as PNG/SVG.
            </div>
          </div>

          {/* Code snippet decoration */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              fontSize: 20,
              color: "rgba(255, 255, 255, 0.8)",
              fontFamily: "monospace",
              background: "rgba(0, 0, 0, 0.2)",
              padding: "8px 16px",
              borderRadius: "8px",
            }}
          >
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
          </div>

          {/* Creator attribution */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              fontSize: 20,
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            Created with ❤️ by Daniel Frey
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
