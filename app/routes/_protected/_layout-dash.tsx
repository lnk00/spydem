import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  User,
} from '@heroui/react';
import { Outlet } from '@tanstack/react-router';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { GripIcon, PlusIcon, SettingsIcon } from 'lucide-react';
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
    <div className="flex h-screen">
      <div className="flex flex-col bg-default-50 h-full w-96 border-r border-divider">
        <div className="flex items-center h-14 border-y border-divider">
          <div className="flex items-center h-full px-8 border-r border-divider">
            <p className="font-display text-lg">spydem</p>
          </div>
          <div className="flex items-center justify-center gap-2 px-8">
            <GripIcon className="w-8" />
            <p className="">Dashboard</p>
          </div>
        </div>
        <div className="flex flex-col h-full py-8">
          <div className="flex flex-col gap-4 px-4">
            <Link
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-default-100 cursor-pointer"
              onPress={() => navigate({ to: '/' as never })}
            >
              <GripIcon className="w-6" />
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-default-100 cursor-pointer"
              onPress={() => navigate({ to: '/settings' })}
            >
              <SettingsIcon className="w-6" />
              Spy settings
            </Link>
          </div>
          <div className="flex items-center justify-start gap-2 px-8 mt-8">
            <p className="text-default-400 text-md font-light">Companies</p>
          </div>
          <div className="mt-auto pt-8 border-t border-divider px-8">
            <Button
              radius="none"
              variant="solid"
              color="primary"
              size="lg"
              fullWidth
              startContent={<PlusIcon className="w-6" />}
            >
              Add company
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-full">
        <div className="flex items-center h-14 border-y border-divider">
          <div className="px-8"></div>
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
        <div className="h-full p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
