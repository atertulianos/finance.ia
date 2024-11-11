import { Button } from "@/_components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const { userId } = auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid h-full grid-cols-2">
      <div className="m-auto flex h-full max-w-[650px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance IA"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Seja bem-vindo(a)!</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance IA é uma plataforma de gestão financeira que utiliza
          Inteligência Artificial para monitorar suas movimentações financeiras.
          Oferecemos insights personalizados e facilitamos o controle do seu
          orçamento, ajudando você a alcançar seus objetivos financeiros com
          mais eficiência e clareza.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça o logIn"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
