import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import { LOCALE_COOKIE, DEFAULT_LOCALE, getLocaleInfo, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Masters Leadership Academy — Leadership Training, Conferences & Technical Services",
  description: "Masters Leadership Academy — organising seminars, symposiums, conferences and technical services. CAC Registered Business Name BN 2357164, Port Harcourt, Rivers State, Nigeria.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/favicon-32.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#0B192C",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await cookies();
  const locale = (store.get(LOCALE_COOKIE)?.value as Locale) || DEFAULT_LOCALE;
  const localeInfo = getLocaleInfo(locale);
  const dict = getDictionary(locale);

  return (
    <html
      lang={localeInfo.code}
      dir={localeInfo.dir}
      className={`${inter.variable} ${fraunces.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink-text font-sans">
        <Header dict={dict} locale={locale} />
        <main className="flex-grow">{children}</main>
        <Footer dict={dict} locale={locale} />
        <WhatsAppButton />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
