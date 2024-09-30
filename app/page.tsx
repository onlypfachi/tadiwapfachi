"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ThemeSwitch from "@/components/themeSwitch";
import Link from "next/link";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  XIcon,
  Youtube,
} from "lucide-react";

export default function Home() {
  const links = [
    { tittle: "portfolio", url: "/dev" },
    { tittle: "about me", url: "/about" },
    { tittle: "contact", url: "contact" },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card className="w-96">
          <CardHeader className="flex flex-row justify-center items-center">
            <CardTitle className="h-full w-60 flex flex-row justify-start gap-3 items-center">
              <Link href={"https://www.linkedin.com/in/tadiwapfachi/"} passHref>
                <Linkedin />
              </Link>
              <Link href={"https://github.com/onlypfachi"} passHref>
                <Github />
              </Link>
              <Link href={"https://x.com/tadiwapfachi"} passHref>
                <XIcon />
              </Link>
              <Link href={"#"} passHref>
                <Youtube />
              </Link>
              <Link href={"#"} passHref>
                <Facebook />
              </Link>
              <Link href={"#"} passHref>
                <Instagram />
              </Link>
            </CardTitle>
            <ThemeSwitch />
          </CardHeader>
          <Separator />
          <CardContent>
            {links.map((link) => (
              <div key={link.tittle}>
                <Link href={link.url} passHref>
                  <span className="cursor-pointer text-blue-500 font-bold text-5xl hover:underline">
                    {link.tittle}/
                  </span>
                </Link>
              </div>
            ))}
          </CardContent>
          <Separator />

          <CardContent>
            <p className="text-gray-600 text-xs ">Recent Activity</p>
          </CardContent>
        </Card>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>&copy; tadiwapfachi-2024</p>
      </footer>
    </div>
  );
}
