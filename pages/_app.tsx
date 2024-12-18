import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const title = "Tailwind CSS Gradient Generator";
  const description =
    "Create beautiful gradients with our intuitive generator. Export as Tailwind CSS, raw CSS, or download as PNG/SVG.";

  // Use VERCEL_URL in production, localhost in development
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`${baseUrl}/api/og?title=${encodeURIComponent(title)}`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
