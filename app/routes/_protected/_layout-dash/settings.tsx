import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_protected/_layout-dash/settings')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Settings</div>;
}
