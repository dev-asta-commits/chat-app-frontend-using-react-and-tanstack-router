import { UserForm } from "@/component/Userform";

// type imports
import type { formProps } from "@/utils/types";

// route setup
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/register")({
  component: RegisterPage,
});

const form: formProps = {
  formType: "SignUp",
  apiRoute: "register",
};

export function RegisterPage() {
  return (
    <div className="flex flex-col h-lvh w-full items-center justify-center">
      <UserForm {...form} />
    </div>
  );
}
