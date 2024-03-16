import { useContext } from 'react';
import { FieldsContext } from '@/fragments/build-form/FieldsContext';
import { FormFieldProps } from './FormField.types';

export default function useFormField(props: FormFieldProps) {
  const context = useContext(FieldsContext);
  const updater = props.updater ?? context.updateFields;

  const onChangeLabel = (label: string) => {
    updater((fields) => {
      const field = fields[props.index];
      fields[props.index] = { ...field, label };
    });
  };

  const onDelete = () => {
    updater((fields) => {
      fields.splice(props.index, 1);
    });
  };

  return { onChangeLabel, onDelete };
}
