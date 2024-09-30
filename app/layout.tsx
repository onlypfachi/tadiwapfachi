import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider
import { Questrial } from "next/font/google";

export const metadata: Metadata = {
  title: "Tadiwa Pfachi",
  description: "onlypfachi",
};
const questrial = Questrial({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={questrial.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme={
            typeof window !== "undefined"
              ? window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light"
              : "dark"
          }
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
