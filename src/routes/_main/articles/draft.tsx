import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_main/articles/draft')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_main/articles/draft"!</div>;
}
