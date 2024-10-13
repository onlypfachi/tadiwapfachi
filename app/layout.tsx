"use client";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import "./globals.css";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider
import { Questrial } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/react"

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
  const [isClient, setIsClient] = useState<boolean>(false);
  const [trailerIcon, setTrailerIcon] = useState<JSX.Element | null>(null); // State for icon
  const trailerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true); // Set the flag to indicate we're on the client side
  }, []);

  useEffect(() => {
    if (isClient) {
      const trailer = document.getElementById("trailer");

      if (trailer) {
        const animateTrailer = (
          e: MouseEvent,
          interacting: boolean,
        ) => {
          const x = e.clientX - trailer.offsetWidth / 2;
          const y = e.clientY - trailer.offsetHeight / 2;

          const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`,
          };
          trailer.animate(keyframes, {
            duration: 300,
            fill: "forwards",
          });
        };

        const handleMouseMove = (e: MouseEvent) => {
          const target = e.target as Element; // Cast target to Element
          const interactable = target.closest(
            "#interactable",
          ) as HTMLElement | null; // Cast to HTMLElement

          const interacting = interactable !== null; // Determine if we are interacting

          if (interacting && interactable) {
            const iconType = interactable.getAttribute("data-type");
            // console.log(iconType)

            const icon =
              iconType === "link" ? (
                <ArrowUpRight color="black" id="trailer-icon" />
              ) : iconType === "github" ? (<Github id="trailer-icon" color="black" size={14} />) : (
                <ArrowDown id="trailer-icon" color="black" />
              );

            setTrailerIcon(icon); // Update the state with the icon
          } else {
            setTrailerIcon(null); // Clear the icon if not interacting
          }

          animateTrailer(e, interacting); // Animate the trailer based on interaction

          // Cast to HTMLElement to access dataset safely
          if (trailerRef.current) {
            trailerRef.current.dataset.type = interacting
              ? interactable?.dataset.type || ""
              : ""; // Set the data-type attribute
          }
        };

        const throttledMouseMove = (e: MouseEvent) => {
          window.requestAnimationFrame(() => handleMouseMove(e));
        };

        window.addEventListener("mousemove", throttledMouseMove);

        // Clean up event listener on unmount
        return () => {
          window.removeEventListener("mousemove", throttledMouseMove);
        };
      }
    }
  }, [isClient]);



  return (
    <html lang="en" className={questrial.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme={
            typeof window !== "undefined" &&
              window.matchMedia("(prefers-color-scheme: dark)")
                .matches
              ? "dark"
              : "light"
          }
        >
          <div id="trailer" ref={trailerRef} className="-z-0 lg:z-20 ">
            {trailerIcon}
          </div>
          <ReactLenis root> {children} <Analytics /></ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
