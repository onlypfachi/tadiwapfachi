"use client";

import TransitionLink from "@/components/transitionLink";
import { projects } from "@/lib/projects";
import { Project } from "@/lib/types";
import { Separator } from "@/components/ui/separator"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from "next/navigation";





const Portfolio = () => {
  const router = useRouter()
  return (
    <main className="grid grid-cols-12 grid-rows-12 items-center justify-items-center min-h-screen h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="col-span-12 flex justify-between items-center w-full row-start-1 row-end-2">
        <h2 className="text-2xl uppercase">Projects</h2>
        <TransitionLink href="/" label="home" />
        <button
          className="shiny-cta"
          onClick={() => console.log("button clicked")}
        >
          <span>Get in touch</span>

        </button>
      </header>
      <section className="col-span-8 col-start-3 flex justify-between items-center w-full row-start-4 row-end-8 projects h-96 flex-col gap-10">

        {projects.map((project: Project, index: number) => {
          return (
            <div key={index} className="project">
              <div className="flex flex-row justify-evenly gap-20 h-96">
                <Image src={`/images/${project.image}`} alt={`${project.name} project image`} width={95} height={45} />
                <p className="w-96"> {project.name}</p>
                <p > {project.description}</p>
                <Button id="interactable" onClick={() => router.push(project.liveLink)} data-type="github">Learn more</Button>
              </div>
              <Separator className="mt-5" />
            </div>
          )
        })}
      </section>
      {/* <section className="experience col-span-12 flex justify-between items-center w-full row-start-9 row-end-12 h-96 bg-sky-900"></section> */}
    </main>
  );
};

export default Portfolio;
