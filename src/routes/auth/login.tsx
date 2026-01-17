import { UserForm } from "@/component/Userform";

// type imports
import type { formProps } from "@/utils/types";

// route setup
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
  component: LoginPage,
});

const form: formProps = {
  formType: "LogIn",
  apiRoute: "login",
};

export function LoginPage() {
  return (
    <div className="flex flex-col h-lvh w-full items-center justify-center">
      <UserForm {...form} />
    </div>
  );
}
