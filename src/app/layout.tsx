import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QAGlobal - Device Quality Assurance | Mobile Testing Services",
  description: "World-class mobile testing, automation, and compliance services for global markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
