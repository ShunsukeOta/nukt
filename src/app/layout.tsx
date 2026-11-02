import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nukt",
  description: "nukt — music / releases",
  openGraph: { title: "nukt", description: "nukt — music / releases", type: "website" },
};
export const viewport: Viewport = { themeColor: "#f8f8f8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
