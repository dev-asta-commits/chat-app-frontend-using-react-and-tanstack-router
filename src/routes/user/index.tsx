import { LogOut } from "@/component/LogOut";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/user/")({
  component: UserRoute,
});

function UserRoute() {
  return (
    <div className="flex flex-col h-lvh w-full items-center justify-center">
      <LogOut />
    </div>
  );
}
