
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from 'next-intl/server'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MobileBookNowButton from "./Components/HomePage/MobileBookNowButton";
import Phone from "@/app/[locale]/Components/HomePage/Phone"


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

   // 1) Gelen locale bilgisini Next Intl’in store’una yazıyoruz
   setRequestLocale(locale)
  
    // 2) Ardından mesajları yükleyip client’a iletebiliriz
    const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={`antialiased`}
      >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
        {children}
            <MobileBookNowButton />
            <Phone />
            <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
