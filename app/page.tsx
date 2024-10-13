"use client";

import ThemeSwitch from "@/components/themeSwitch";
import Link from "next/link";

import { useRef } from "react";
import TransitionLink from "@/components/transitionLink";

export default function Home() {
  const u = useRef();
  console.log(u);
  const links = [
    { title: "Work", url: "/work" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "contact" },
  ];

  return (
    <main className="grid grid-cols-12 grid-rows-12 items-center justify-items-center min-h-screen h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="col-span-12 flex justify-between items-center w-full row-start-1 row-end-2">
        <h2 className="text-2xl uppercase">&copy; tadiwanashe david pfachi</h2>
        <ThemeSwitch />
      </header>

      {/* Navigation links */}
      <nav className="row-start-4 col-start-2 col-span-4 items-center justify-self-start">
        {links.map((link) => (
          <TransitionLink key={link.title} href={link.url} label={link.title} />
        ))}

      </nav>


      {/* Footer */}
      <footer className="row-start-11 row-span-2 col-start-2 col-span-10 justify-self-start grid grid-cols-3 gap-16 ">
        <section className="flex flex-col justify-center w-96 col-start-1">
          <Link
            href="https://www.linkedin.com/in/tadiwapfachi/"
            data-type="link"
            id="interactable"
            passHref
          >
            <span className="cursor-pointer  text-xl ">
              Linkedin
            </span>
          </Link>
          <Link
            href="https://github.com/onlypfachi"
            data-type="link"
            id="interactable"
            passHref
          >
            <span className="cursor-pointer text-xl hover:underline">
              Github
            </span>
          </Link>
          <Link
            href="https://x.com/tadiwapfachi"
            data-type="link"
            id="interactable"
            passHref
          >
            <span className="cursor-pointer font-bold text-xl hover:underline">
              X
            </span>
          </Link>
        </section>

        <section className="flex flex-col w-96 justify-center col-start-2">
          <span className="cursor-pointer  text-2xl">Get in touch</span>
          <span
            className="cursor-pointer text-2xl hover:underline"
            data-type="link"
            id="interactable"
          >
            pfachitadiwanashedavid@gmail.com
          </span>
        </section>

        <section className="flex flex-col justify-end items-end col-start-3">
          <Link
            target="_blank"
            href="https://www.canva.com/design/DAFA9Dq_gWM/A12ioJBa-2n7lmuMjFS0Ww/view?utm_content=DAFA9Dq_gWM&utm_campaign=designshare&utm_medium=link&utm_source=editor"

          >
            <button
              className="shiny-cta"
              onClick={() => console.log("button clicked")}
            >
              <span>View my CV</span>

            </button>
          </Link>
        </section>
      </footer>

    </main>


  );
}
