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

export default function RegisterPage() {
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
              Registrar
            </CardTitle>
            <CardDescription className="text-sm text-zinc-500">
              Crie sua conta para começar a postar.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 pb-6">
            <form>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Nome completo</FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    required
                  />
                </Field>
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
                <Field>
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Crie uma senha"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="confirmPassword">
                    Confirmar senha
                  </FieldLabel>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Repita a senha"
                    required
                  />
                </Field>
                <Field className="space-y-3">
                  <Button type="submit" className="w-full">
                    Criar conta
                  </Button>
                  <FieldDescription className="text-center text-zinc-500">
                    Já possui conta?{" "}
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
