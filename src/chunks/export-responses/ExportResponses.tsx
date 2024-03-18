'use client';

import { Button } from '@mantine/core';
import { CSVLink } from 'react-csv';
import { FormResponseData } from '@/types/forms.types';

interface Props {
  data: FormResponseData[];
}

export default function ExportResponses({ data }: Props) {
  if (data.length === 0) return null;

  return (
    <Button
      component={CSVLink as any}
      data={data.map((resp) => resp.data)}
      target="_blank"
      filename="responses.csv"
      style={{ alignSelf: 'flex-start' }}
    >
      Export as CSV
    </Button>
  );
}
