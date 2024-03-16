import { Updater } from 'use-immer';
import { Field } from '@/types/forms.types';

export interface NewFieldProps {
  updater?: Updater<Field[]>;
}
