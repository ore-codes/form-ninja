'use client';

import { Button, Flex } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import Loading from '@/app/loading';
import UserForm from '@/chunks/user-form/UserForm';
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
      <Flex direction={h.isLg ? 'row' : 'column'} gap="md" my={32}>
        {h.forms?.map((form) => <UserForm key={form.uuid} form={form} />)}
        {h.loading && <Loading />}
      </Flex>
    </>
  );
}
