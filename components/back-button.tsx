"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BackButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

export function BackButton({
  href = "/",
  label = "Back",
  className,
}: BackButtonProps) {
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    router.push(href);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "sm",
          className:
            "inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-black shadow-sm ring-1 ring-zinc-200 backdrop-blur transition hover:bg-white hover:text-black",
        }),
        className,
      )}
    >
      <span aria-hidden="true" className="text-base leading-none">
        &larr;
      </span>
      <span>{label}</span>
    </Link>
  );
}
