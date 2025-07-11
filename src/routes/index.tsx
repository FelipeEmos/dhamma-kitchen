import { AuthRedirectEffects } from "@/features/auth/use-auth-redirects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  AuthRedirectEffects.useRedirectFromPrivate();
  AuthRedirectEffects.useRedirectFromPublic();

  return null;
}
