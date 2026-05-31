import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'MNT Teknoloji | Geleceğin Teknolojisi Bir Arada',
  description: 'Antalya Teknopark\'ta 20 yılı aşkın tecrübeyle en yeni teknoloji ürünleri ve uzman teknik destek hizmetleri. Akıllı telefon, dizüstü, tablet ve aksesuar çözümleri.',
  keywords: ["MNT Teknoloji, Antalya Teknopark, teknoloji ürünleri, akıllı telefon, dizüstü bilgisayar, teknik servis, tablet, aksesuar, teknoloji mağazası, Kepez, Antalya"],
  openGraph: {
    "title": "MNT Teknoloji | Geleceğin Teknolojisi Bir Arada",
    "description": "Antalya Teknopark'ta 20 yılı aşkın tecrübeyle en yeni teknoloji ürünleri ve uzman teknik destek hizmetleri.",
    "url": "https://www.mntteknoloji.com",
    "siteName": "MNT Teknoloji",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/female-professional-with-futuristic-interface_482257-130652.jpg",
        "alt": "MNT Teknoloji Modern Arayüz Panosu"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "MNT Teknoloji | Geleceğin Teknolojisi Bir Arada",
    "description": "Antalya Teknopark'ta 20 yılı aşkın tecrübeyle en yeni teknoloji ürünleri ve uzman teknik destek hizmetleri.",
    "images": [
      "http://img.b2bpic.net/free-photo/female-professional-with-futuristic-interface_482257-130652.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
