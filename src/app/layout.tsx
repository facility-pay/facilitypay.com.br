import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FacilityPay",
  description: "As menores taxas do Brasil no parcelado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link
        rel="icon"
        href="/"
        type="image/<generated>"
        sizes="<generated>"
      /> */}
      {/* <Head>
        <link
          rel="preload"
          as="image"
          href="/src/assets/shapes/section1-shape"
          imageSizes="50vw"
        />
        <link
          rel="preload"
          as="image"
          href="/src/assets/shapes/section1-yellow-shape"
          imageSizes="50vw"
        />
      </Head> */}
      <body
        className={`${geistSans.variable} bg-white ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
