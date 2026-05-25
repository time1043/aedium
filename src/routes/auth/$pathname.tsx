import { AuthView } from '@neondatabase/neon-js/auth/react';
import { createFileRoute } from '@tanstack/react-router';

import { Route as IndexRoute } from '@/routes/index';

export const Route = createFileRoute('/auth/$pathname')({
  component: RouteComponent,
});

function RouteComponent() {
  const { pathname } = Route.useParams();

  return (
    <AuthView
      className="neon-auth-patch"
      pathname={pathname}
      redirectTo={pathname === 'sign-out' ? IndexRoute.to : undefined}
    />
  );
}
