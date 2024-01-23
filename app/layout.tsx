import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarResponsive from "@/components/NavbarResponsive";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uniones de amor para siempre",
  description:
    "¿Estás buscando el amor verdadero, pero no lo encuentras? ¿Quieres recuperar a tu ex, pero no sabes cómo? ¿Te sientes solo, triste o desesperado por tu situación sentimental? No te preocupes, tenemos la solución para ti. En Amarres de amor efectivos y rápidos te ofrecemos los mejores servicios de magia blanca, rituales, hechizos y conjuros para solucionar tus problemas de amor. Contamos con un equipo de expertos que te asesorarán y te guiarán paso a paso para lograr tus objetivos.",
  verification: {
    google: "cYaufhQZoE8osninkmlf-QmN4EFIM3-rZab5aRoLFnk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">


      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11453993882"></Script>
      <Script>
        {
          `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'AW-11453993882');    
    `
        }
      </Script>

      <Script>
        {
          `
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = url;
        }
      };
      gtag('event', 'conversion', {
          'send_to': 'AW-11453993882/89wJCNfLgooZEJqn2NUq',
          'event_callback': callback
      });
      return false;
    }
    
    `
        }
      </Script>




      <Script
        strategy="afterInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GM2EBDQRYW"
      />

      {/*  Google Analitycs */}
      <Script>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());    
              gtag('config', 'G-GM2EBDQRYW');`}
      </Script>

      {/* Google Tag Manager */}
      <Script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WL6DQ84P');`}
      </Script>
      {/* End Google Tag Manager */}

      <>
        {/* Hotjar Tracking Code for https://www.uniones-para-siempre.com/ */}
        <Script>{`
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3807162,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`}</Script>
      </>

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}

        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WL6DQ84P"
          height="0"
          width="0"
        />

        <main>
          <NavbarResponsive />
          {children}
        </main>
      </body>
    </html>
  );
}
