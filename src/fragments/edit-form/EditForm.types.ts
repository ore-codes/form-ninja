import { ReactNode } from 'react';
import { FormRecord } from '@/types/forms.types';
import { Tables } from '@/types/database.types';

export interface ContextProps {
  children: ReactNode;
  formId: Tables<'forms'>['uuid'];
}

export interface ContextReturn {
  form?: FormRecord;
}
