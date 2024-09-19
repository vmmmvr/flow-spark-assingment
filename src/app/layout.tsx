import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import PrelineScript from "./component/PrelineScript";


export const metadata: Metadata = {
  title: "Flow spark",
  description: "DIGITAL MARKETING SOLUTIONS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
