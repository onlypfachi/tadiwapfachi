"use client"
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Contact = () => {
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
      <Skeleton className="w-[100%] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </main>)
};

export default Contact;
