import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";

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

const siteUrl = "https://facilitypay.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FacilityPay - As Menores Taxas do Brasil",
    template: "%s | FacilityPay",
  },
  description:
    "Tenha acesso às menores taxas no parcelado do Brasil. Taxas fixas, sem prazos e nem limite de faturamento. Maquininhas de cartão com garantia vitalícia.",
  keywords: [
    "maquininha de cartão",
    "menores taxas",
    "FacilityPay",
    "maquininha",
    "taxas baixas",
    "parcelado",
    "cartão de crédito",
    "cartão de débito",
    "pagamento",
    "PagSeguro",
  ],
  authors: [{ name: "FacilityPay" }],
  creator: "FacilityPay",
  publisher: "FacilityPay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "FacilityPay",
    title: "FacilityPay - As Menores Taxas do Brasil",
    description:
      "Tenha acesso às menores taxas no parcelado do Brasil. Taxas fixas, sem prazos e nem limite de faturamento. Maquininhas de cartão com garantia vitalícia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FacilityPay - As Menores Taxas do Brasil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FacilityPay - As Menores Taxas do Brasil",
    description:
      "Tenha acesso às menores taxas no parcelado do Brasil. Taxas fixas, sem prazos e nem limite de faturamento.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
      </head>
      <GoogleTagManager gtmId="GTM-5CHRK6MX" />
      <body
        className={`${geistSans.variable} bg-white ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
