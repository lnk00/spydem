import { Button } from '@heroui/react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/' as never)({
  component: Home,
});

function Home() {
  return (
    <div>
      <h1></h1>
      <Button>Click me</Button>
    </div>
  );
}
