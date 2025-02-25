import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/' as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Dashboard</div>;
}
