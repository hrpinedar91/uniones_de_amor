import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarResponsive from "@/components/NavbarResponsive";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amarres de amor",
  description:
    "¿Estás buscando el amor verdadero, pero no lo encuentras? ¿Quieres recuperar a tu ex, pero no sabes cómo? ¿Te sientes solo, triste o desesperado por tu situación sentimental? No te preocupes, tenemos la solución para ti. En Amarres de amor efectivos y rápidos te ofrecemos los mejores servicios de magia blanca, rituales, hechizos y conjuros para solucionar tus problemas de amor. Contamos con un equipo de expertos que te asesorarán y te guiarán paso a paso para lograr tus objetivos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <>
        <Script
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F4932KY45Z"
        />
        <Script>{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-F4932KY45Z');
`}</Script>
      </>
      <body className={inter.className}>
        <main>
          <NavbarResponsive />
          {children}
        </main>
      </body>
    </html>
  );
}
