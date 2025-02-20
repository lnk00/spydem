import { Button } from '@heroui/react';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/' as never)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/signup">
        <Button>Click me</Button>
      </Link>
    </div>
  );
}
