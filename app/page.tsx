import { UserControllerInstance } from "@/core/presentation/controllers/UserController";
import { GetButton } from "@/app/_components/get-user-button";
import { CreateButton } from "@/app/_components/create-user-button";

export default async function Home() {
  const user = await UserControllerInstance.listUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(user)}

      <GetButton />
      <CreateButton />
    </main>
  );
}
