import { useContext } from 'react';
import { FieldsContext } from '../FieldsContext';
import { FormFieldProps } from './FormField.types';

export default function useFormField(props: FormFieldProps) {
  const { updateFields } = useContext(FieldsContext);

  const onChangeLabel = (label: string) => {
    updateFields((fields) => {
      const field = fields[props.index];
      fields[props.index] = { ...field, label };
    });
  };

  const onDelete = () => {
    updateFields((fields) => {
      fields.splice(props.index, 1);
    });
  };

  return { onChangeLabel, onDelete };
}
