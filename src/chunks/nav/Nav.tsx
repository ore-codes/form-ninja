import { Anchor, Box, Flex, Title } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

export function Nav() {
  return (
    <Box p={12}>
      <Anchor aria-label="logo" href="/" underline="never">
        <Flex px="4" align="center" gap="md">
          <MantineLogo color="violet" size={50} type="mark" />
          <Title order={1} fw={900}>
            FormNinja
          </Title>
        </Flex>
      </Anchor>
    </Box>
  );
}
