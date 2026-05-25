import { createFileRoute } from '@tanstack/react-router';

import ArticleList from './-components/list/ArticleList';

export const Route = createFileRoute('/_main/articles/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <ArticleList />;
}
