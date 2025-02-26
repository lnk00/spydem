import { Button, Input } from '@heroui/react';
import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';
import { ArrowRightIcon } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { crawl } from '~/lib/crawler';

export const startCrawl = createServerFn({
  method: 'GET',
})
  .validator((data: string) => data)
  .handler(async (ctx) => {
    await crawl(ctx.data);
  });

export const Route = createFileRoute('/' as never)({
  component: RouteComponent,
});

function RouteComponent() {
  const [companyName, setCompanyName] = useState('');

  const handleSpy = async (e: FormEvent) => {
    e.preventDefault();
    startCrawl({ data: companyName });
  };

  return (
    <div className="flex flex-col  h-full items-center justify-center">
      <div className="flex flex-col gap-16 max-w-[600px]">
        <h1 className="font-display text-5xl text-center">
          enter the name of the company you want to spy
        </h1>

        <form className="flex items-center gap-4" onSubmit={handleSpy}>
          <Input
            radius="none"
            label="company name"
            labelPlacement="inside"
            name="company"
            type="text"
            value={companyName}
            variant="faded"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <Button
            size="lg"
            type="submit"
            color="primary"
            radius="none"
            endContent={<ArrowRightIcon className="w-12" />}
            className="h-full"
          >
            Spy
          </Button>
        </form>
      </div>
    </div>
  );
}
