"use client";

import { useRouter } from "next/navigation";
import { animatePageOut } from "@/animations";
import Link from "next/link";

export default function TransitionLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return (

    <div
      key={label}
      data-type="link"
      id="interactable"
      className="space-y-4 text-xl"
    >
      <Link href={href} passHref onClick={() => handleClick()}>
        <span className="cursor-pointer uppercase font-bold lg:text-7xl text-4xl sm:text-5xl md:text-6xl hover:underline">
          {label} /
        </span>
      </Link>
    </div>

  );
}
