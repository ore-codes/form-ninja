import { Title } from '@mantine/core';
import { LoginForm } from '@/chunks/login-form/LoginForm';

export default function Page() {
  return (
    <main>
      <Title order={3}>Sign in</Title>
      <LoginForm />
    </main>
  );
}
