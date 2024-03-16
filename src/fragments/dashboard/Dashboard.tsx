'use client';

import { Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import useDashboard from './useDashboard';

export default function Dashboard() {
  const h = useDashboard();

  if (!h.user) {
    return null;
  }

  return (
    <>
      <Button component={Link} href="/build-form" leftSection={<IconPlus size={14} />}>
        Build a new form
      </Button>
      {h.forms?.map((form) => <div>{form.uuid}</div>)}
    </>
  );
}
