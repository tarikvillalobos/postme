import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="grid min-h-screen w-full max-w-6xl grid-cols-[1.25fr_3.5fr_1.25fr]">
        <section className="bg-green-100" />

        <section className="bg-white dark:bg-zinc-900 p-8">
          <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-black dark:text-white">
              Postme
            </h1>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/sign-in"
                className={buttonVariants({ variant: "default", size: "lg" })}
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Register
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-green-100" />
      </main>
    </div>
  )
}
