import type { Metadata, Viewport } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import MotionBoot from "@/components/motion-boot";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "nukt", template: "%s | nukt" },
  description: "nukt / music, video, archive, goods",
  openGraph: { title: "nukt", description: "nukt / music, video, archive, goods", type: "website" },
  icons: { icon: "/favicon.svg" },
};
export const viewport: Viewport = { themeColor: "#f8f8f8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <MotionBoot />
        <div className="frame" id="top">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
