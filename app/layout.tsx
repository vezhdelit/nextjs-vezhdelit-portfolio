import { Footer, Header, ThemeProvider } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Head from "next/head";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vezhdel.Dev",
  description: "Personal portfolio site of Web Developer Vasyl Vezhdel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/vez-logo-white.svg" />
      </Head>
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
