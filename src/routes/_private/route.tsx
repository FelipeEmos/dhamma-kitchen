import { AuthRedirectEffects } from "@/features/auth/use-auth-redirects";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_private")({
  component: RouteComponent,
});

function RouteComponent() {
  AuthRedirectEffects.useRedirectFromPrivate();

  return <Outlet />;
}
