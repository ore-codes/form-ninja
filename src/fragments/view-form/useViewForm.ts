import { useContext } from 'react';
import { ViewFormContext } from './ViewFormContext';

export default function useViewForm() {
  const form = useContext(ViewFormContext);
  return { form };
}
