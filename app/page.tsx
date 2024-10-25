import { UserControllerInstance } from "@/core/presentation/controllers/UserController";
import Button from "./Button";
import CreateButton from "./CreateButton";

export default async function Home() {
  const user = await UserControllerInstance.listUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(user)}

      <Button />
      <CreateButton />
    </main>
  );
}
