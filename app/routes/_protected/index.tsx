import { Button } from '@heroui/react';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { authClient } from '~/lib/auth-client';

export const Route = createFileRoute('/' as never)({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate({ from: '/' });

  const handleSignout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: '/signup' });
        },
      },
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <Link to="/signup">
        <Button onPress={handleSignout}>Sign out</Button>
      </Link>
    </div>
  );
}
