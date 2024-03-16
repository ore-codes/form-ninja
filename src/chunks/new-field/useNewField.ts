import { isNotEmpty, useForm } from '@mantine/form';
import { useContext, useState } from 'react';
import { NewFieldProps } from '@/chunks/new-field/NewField.types';
import { FieldsContext } from '@/fragments/build-form/FieldsContext';
import { FieldType } from '@/types/forms.types';

export default function useNewField(props: NewFieldProps) {
  const context = useContext(FieldsContext);
  const [selectedType, setSelectedType] = useState(FieldType.Text);

  const form = useForm({
    initialValues: { label: '' },
    validate: {
      label: isNotEmpty('You must enter a label for this field'),
    },
  });

  const onSubmit = form.onSubmit((values) => {
    const updater = props.updater ?? context.updateFields;

    updater((fields) => {
      fields.push({
        label: values.label,
        type: selectedType,
      });
    });
    form.reset();
  });

  return { form, onSubmit, selectedType, setSelectedType };
}
