"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

// import { projects } from "@/lib/projects";
// import { Project } from "@/lib/types";
// import { Separator } from "@/components/ui/separator"
// import Image from "next/image";
// import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

const Portfolio = () => {
  const router = useRouter()

  const runAfterFiveSeconds = () => {
    toast("This page is being maintained", {
      description: "View My Resume Instead",
      action: {
        label: "View",
        onClick: () => router.push("https://www.canva.com/design/DAFA9Dq_gWM/A12ioJBa-2n7lmuMjFS0Ww/view?utm_content=DAFA9Dq_gWM&utm_campaign=designshare&utm_medium=link&utm_source=editor"),
      },
    });
  };

  setTimeout(runAfterFiveSeconds, 3000);

  return (
    <main className="grid sm:grid-cols-12 grid-rows-12 items-center justify-items-center min-h-screen h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <header className="col-span-12 flex justify-between items-center w-full row-start-1 row-end-2">
        <h2 className="text-xs sm:text-sm lg:text-2xl uppercase">Projects</h2>
        <button
          className="shiny-cta"
          onClick={() => router.push("/contact")}
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
      <section className="experience col-span-12 flex justify-between items-center w-full row-start-9 row-end-12 h-96 bg-sky-900"></section> */}
      <Skeleton className="w-[100%] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />

    </main>
  );
};

export default Portfolio;
