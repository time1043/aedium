import { ArrowLeftIcon } from '@phosphor-icons/react';
import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/auth')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen">
      <div className="absolute top-8 left-8">
        <Link to="/" className="flex items-center gap-2">
          <ArrowLeftIcon className="size-4" />
          Back to home
        </Link>
      </div>
      <div className="flex min-h-screen items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
