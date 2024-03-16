import { isNotEmpty, useForm } from '@mantine/form';
import { useContext, useState } from 'react';
import { FieldType } from '@/types/forms.types';
import { FieldsContext } from '../FieldsContext';

export default function useNewField() {
  const { updateFields } = useContext(FieldsContext);
  const [selectedType, setSelectedType] = useState(FieldType.Text);

  const form = useForm({
    initialValues: { label: '' },
    validate: {
      label: isNotEmpty('You must enter a label for this field'),
    },
  });

  const onSubmit = form.onSubmit((values) => {
    updateFields((fields) => {
      fields.push({
        label: values.label,
        type: selectedType,
      });
    });
    form.reset();
  });

  return { form, onSubmit, selectedType, setSelectedType };
}
