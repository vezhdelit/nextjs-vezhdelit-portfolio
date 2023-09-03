import { Footer, Header, ThemeProvider } from "@/components/index";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "vezhdelit",
  description: "Personal portfolio site of Web Developer Vasyl Vezhdel",
  verification: {
    google: "google86a0885bf22efc3b.html",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="srC1Bp0VXLtisWj-EIod6SE_kRAZ4ZBXAD3fDZOTrWQ"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      <body className={`${raleway.className}  bg-daylight dark:bg-midnight`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
