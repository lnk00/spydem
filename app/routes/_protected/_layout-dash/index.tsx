import { Button, Input } from '@heroui/react';
import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';
import { ArrowRightIcon } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { z } from 'zod';
import { createNewStagehand } from '~/lib/stagehand';

export const startCrawl = createServerFn({
  method: 'GET',
})
  .validator((data: string) => data)
  .handler(async (ctx) => {
    const { page, stagehand } = await createNewStagehand();

    await page.goto('https://www.tella.com/');
    await page.act('close the cookie banner');
    await page.act('navigate to pricing section');

    const plans = await page.extract({
      instruction:
        'extract the pricing plans of their services including name, price and currency',
      schema: z.object({
        plans: z.array(
          z.object({
            name: z.string(),
            price: z.number(),
            currency: z.string(),
          }),
        ),
      }),
      useTextExtract: true,
    });

    console.log(plans);

    await stagehand.close();

    return plans;
  });

export const Route = createFileRoute('/' as never)({
  component: RouteComponent,
});

function RouteComponent() {
  const [companyName, setCompanyName] = useState('');

  const handleSpy = async (e: FormEvent) => {
    e.preventDefault();
    const plans = await startCrawl({ data: companyName });
    console.log(plans);
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
