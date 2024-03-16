'use client';

import { createContext, ReactNode } from 'react';
import { Field } from '@/chunks/build-form/FieldsContext';
import { Tables } from '@/types/database.types';

type FormRecord = Tables<'forms'> & { fields: Field[] };

interface ProviderProps {
  children: ReactNode;
  value: FormRecord;
}

const ViewFormContext = createContext<FormRecord>({} as FormRecord);

const ViewFormProvider = (props: ProviderProps) => <ViewFormContext.Provider {...props} />;

export { ViewFormContext, ViewFormProvider };
export type { FormRecord };
