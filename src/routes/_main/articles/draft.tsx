import { createFileRoute } from '@tanstack/react-router';

import Editor from '@/components/Editor';

export const Route = createFileRoute('/_main/articles/draft')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Editor />;
}
