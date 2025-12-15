import Link from "next/link";

import { BackButton } from "@/components/back-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SignInScreen() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white to-zinc-50 px-4 py-16">
      <div className="absolute left-4 top-4 md:left-8 md:top-8">
        <BackButton />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-[-35%] h-[60%] bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.08),_transparent_60%)] blur-3xl" />
      <div className="relative w-full max-w-md space-y-4">
        <Card className="w-full rounded-2xl border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <CardHeader className="space-y-1 pb-2">
            <CardTitle className="text-lg font-semibold leading-tight text-black">
              Login to your account
            </CardTitle>
            <CardDescription className="text-sm text-zinc-500">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 pb-6">
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </Field>
                <Field>
                  <div className="flex items-center gap-2">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Link
                      href="/forgot-password"
                      className="ml-auto text-sm font-semibold text-black underline decoration-2 underline-offset-4 transition hover:text-zinc-700"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input id="password" name="password" type="password" required />
                </Field>
                <Field className="space-y-3">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <Button variant="outline" type="button" className="w-full">
                    Login with Google
                  </Button>
                  <FieldDescription className="text-center text-zinc-500">
                    Don&apos;t have an account?{" "}
                    <Link
                      href="/register"
                      className="font-semibold underline decoration-2 underline-offset-4"
                    >
                      Sign up
                    </Link>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
