'use client';

import { createContext, ReactNode } from 'react';
import { FormRecord } from '@/types/forms.types';

interface ProviderProps {
  children: ReactNode;
  value: FormRecord;
}

const ViewFormContext = createContext<FormRecord>({} as FormRecord);

const ViewFormProvider = (props: ProviderProps) => <ViewFormContext.Provider {...props} />;

export { ViewFormContext, ViewFormProvider };
