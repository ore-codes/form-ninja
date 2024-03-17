'use client';

import { Card, Text, Title } from '@mantine/core';
import { FormResponseData } from '@/types/forms.types';
import { Props } from './FormResponse.types';

export default function FormResponse(p: Props) {
  return (
    <Card withBorder>
      <Card.Section p={8} withBorder>
        <Text fw={700} ta="right" data-testid="date">
          {new Date(p.response.created_at).toDateString()}
        </Text>
      </Card.Section>
      {Object.entries(p.response.data as FormResponseData).map(([question, answer], index) => (
        <Card.Section key={index} withBorder p={4}>
          <Title order={4}>{question}</Title>
          <Text>{answer}</Text>
        </Card.Section>
      ))}
    </Card>
  );
}
