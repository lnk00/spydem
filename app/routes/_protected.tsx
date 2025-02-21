import { createFileRoute, redirect } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';
import { getWebRequest } from '@tanstack/start/server';
import { auth } from '~/lib/auth';

export const getSession = createServerFn({ method: 'GET' }).handler(
  async () => {
    const request = getWebRequest();
    const session = await auth.api.getSession({ headers: request!.headers });
    return session;
  },
);

export const Route = createFileRoute('/_protected')({
  beforeLoad: async ({ location }) => {
    const session = await getSession();
    if (!session) {
      throw redirect({
        to: '/signup',
        search: {
          redirect: location.href,
        },
      });
    }
  },
});
