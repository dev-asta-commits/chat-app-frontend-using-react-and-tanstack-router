// route setup
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

import { Link } from "@tanstack/react-router";

export function App() {
  return (
    <div className="flex flex-col h-lvh w-full items-center justify-center">
      <h1>hello world from app</h1>
      <Link to="/auth/login">Login page</Link>
      <Link to="/auth/register">SignUp page</Link>
    </div>
  );
}
