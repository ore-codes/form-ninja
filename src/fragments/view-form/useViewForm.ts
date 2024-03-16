import { useContext } from 'react';
import { ViewFormContext } from '@/fragments/view-form/ViewFormContext';

export default function useViewForm() {
  const form = useContext(ViewFormContext);

  return { form };
}
