import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await auth();

  if (user) {
    redirect("/inicio");
  }

  return (
    <div className="flex justify-center items-center mx-auto max-w-lg h-screen">
      <Card className="w-full">
        <CardContent className="flex flex-col gap-4 p-8">
          <SignInButton>
            <span>Iniciar sesión</span>
          </SignInButton>
          <SignUpButton>
            <span>Registrarse</span>
          </SignUpButton>
        </CardContent>
      </Card>
    </div>
  );
}
