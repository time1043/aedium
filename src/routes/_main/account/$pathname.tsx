import { AccountView } from '@neondatabase/auth-ui';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main/account/$pathname')({
  component: RouteComponent,
});

function RouteComponent() {
  const { pathname } = Route.useParams();

  return <AccountView pathname={pathname} />;
}
