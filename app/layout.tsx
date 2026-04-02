import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import localFont from 'next/font/local';
import SmoothScroll from "./hooks/smoothScroll";

const inter = localFont({
  src: [
    {
      path: '../public/InterVariable.woff2',
      weight: '100 900', // 👈 full range
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

const monaSans = localFont({
  src: [
    {
      path: '../public/fonts/mona_sans_var/MonaSansVF[wdth,wght,opsz].woff2',
      style: 'normal',
    },
    {
      path: '../public/fonts/mona_sans_var/MonaSansVF[wdth,wght,opsz].woff',
      style: 'normal',
    },
  ],
  variable: '--font-mona-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Integrated Point of Sale Systems | POS Solutions for Retail &amp; Restaurant",
  description: "Enterprise point of sale systems, hardware, and integrated solutions for retail and restaurant businesses. Serving Syracuse and beyond since 2010.",
  keywords: "point of sale systems, pos solutions, retail pos, restaurant pos, integrated pos, pos hardware, pos software, syracuse pos, enterprise pos",
  icons: {
    icon: "/favicon.png",
   },
  // openGraph: {
  //   title: "Integrated Point of Sale Systems | POS Solutions for Retail &amp; Restaurant",
  //   description:
  //     "Enterprise point of sale systems, hardware, and integrated solutions for retail and restaurant businesses. Serving Syracuse and beyond since 2010.",
  //   url: "https://posintegrated.com",
  //   siteName: "Integrated Point of Sale Systems",
  //   images: [
  //     {
  //       url: "/payment-processing", // 👈 your meta image
  //       width: 1200,
  //       height: 630,
  //       alt: "POS Solutions",
  //     },
  //   ],
  //   type: "website",
  // },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "Integrated Point of Sale Systems | POS Solutions for Retail &amp; Restaurant",
  //   description:
  //     "Enterprise point of sale systems, hardware, and integrated solutions for retail and restaurant businesses. Serving Syracuse and beyond since 2010.",
  //   images: ["/payment-processing"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
    <html
      lang="en"
      className={`${monaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {children}
        <Footer />
      </body>
    </html>
    </SmoothScroll>
  );
}
