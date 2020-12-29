// Dependencies
import { useState } from 'react';

// Types
import { FormValueType } from '../../common/types';

interface UsePostFormProps {
  title: string;
  content: string;
  listName: string;
}

interface UsePostFormType {
  formValue: FormValueType;
  changeHandler: (
    event: React.FormEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    name: string
  ) => void;
}

function usePostForm({
  title,
  content,
  listName,
}: UsePostFormProps): UsePostFormType {
  const [formValue, setFormValue] = useState<FormValueType>({
    titleValue: title,
    contentValue: content,
    listNameValue: listName,
  });

  const changeHandler = (
    event: React.FormEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    name: string
  ) => {
    setFormValue({
      ...formValue,
      [name]: event.currentTarget.value,
    });
  };

  return {
    formValue,
    changeHandler,
  };
}

export default usePostForm;
