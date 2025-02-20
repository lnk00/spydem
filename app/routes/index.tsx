import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/' as never)({
  component: Home,
});

function Home() {
  return <h1 className="text-5xl">Index page</h1>;
}
