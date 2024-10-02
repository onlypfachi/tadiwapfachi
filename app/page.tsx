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
    { title: "portfolio", url: "/dev" },
    { title: "about me", url: "/about" },
    { title: "contact", url: "contact" },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Card className="w-96">
          <CardHeader className="flex flex-row justify-center items-center">
            <CardTitle className="h-full w-60 flex flex-row justify-start gap-3 items-center">
              <Link
                href={"https://www.linkedin.com/in/tadiwapfachi/"}
                data-type="link"
                id="interactable"
                passHref
              >
                <Linkedin />
              </Link>
              <Link
                href={"https://github.com/onlypfachi"}
                data-type="link"
                id="interactable"
                passHref
              >
                <Github />
              </Link>
              {/* <Link
                href={"https://x.com/tadiwapfachi"}
                data-type="link"
                id="interactable"
                passHref
              >
                <XIcon />
              </Link>
              <Link href={"#"} id="interactable" data-type="link" passHref>
                <Youtube />
              </Link>
              <Link href={"#"} id="interactable" data-type="link" passHref>
                <Facebook />
              </Link>
              <Link href={"#"} id="interactable" data-type="link" passHref>
                <Instagram />
              </Link> */}
            </CardTitle>
            <ThemeSwitch />
          </CardHeader>
          <Separator />
          <CardContent>
            {links.map((link) => (
              <div key={link.title} data-type="link" id="interactable">
                <Link href={link.url} passHref>
                  <span className="cursor-pointer text-blue-500 font-bold text-5xl hover:underline">
                    {link.title}/
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
