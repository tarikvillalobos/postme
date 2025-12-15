import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/back-button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white to-zinc-50 px-4 py-16">
      <div className="absolute left-4 top-4 md:left-8 md:top-8">
        <BackButton />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-[-35%] h-[60%] bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.08),_transparent_60%)] blur-3xl" />
      <div className="relative w-full max-w-md space-y-4">
        <Card className="w-full rounded-2xl border border-zinc-200 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
          <CardHeader className="space-y-1 pb-2">
            <CardTitle className="text-lg font-semibold leading-tight text-black">
              Esqueci a senha
            </CardTitle>
            <CardDescription className="text-sm text-zinc-500">
              Envie um link para recuperar o acesso à sua conta.
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
                    placeholder="voce@email.com"
                    required
                  />
                </Field>
                <Field className="space-y-3">
                  <Button type="submit" className="w-full">
                    Enviar link de recuperação
                  </Button>
                  <FieldDescription className="text-center text-zinc-500">
                    Lembrou da senha?{" "}
                    <Link
                      href="/sign-in"
                      className="font-semibold underline decoration-2 underline-offset-4"
                    >
                      Fazer login
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
