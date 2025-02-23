import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from '@heroui/react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
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
          navigate({ to: '/signin' });
        },
      },
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center h-14 border-y border-divider">
        <div></div>
        <div className="flex items-center ml-auto border-l border-divider h-full px-8 hover:bg-content2 cursor-pointer">
          <Dropdown
            classNames={{
              content:
                'rounded-none mt-1 shadow-none border-x border-b border-divider',
            }}
          >
            <DropdownTrigger>
              <User
                avatarProps={{
                  src: 'https://i.pravatar.cc/150?u=a04258114e29026302d',
                  isBordered: true,
                  size: 'sm',
                }}
                description="damien.dumontet.perso@gmail.com"
                name="Damien Dumontet"
                as="button"
              />
            </DropdownTrigger>
            <DropdownMenu
              variant="solid"
              color="primary"
              aria-label="Static Actions"
            >
              <DropdownItem
                key="settings"
                classNames={{ base: 'rounded-none' }}
              >
                Settings
              </DropdownItem>
              <DropdownItem
                key="signout"
                classNames={{ base: 'rounded-none' }}
                onPress={handleSignout}
              >
                Sign out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="h-full"></div>
    </div>
  );
}
