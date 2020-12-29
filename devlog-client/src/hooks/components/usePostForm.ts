// Dependencies
import { useState } from 'react';

// Types
import { FormValueType } from '../../common/types';

interface UsePostFormProps {
  /** 포스트 제목 */
  title: string;
  /** 포스트 내용 */
  content: string;
  /** 포스트가 속한 리스트 이름 */
  listName: string;
}

interface UsePostFormType {
  /** form에서 title content listName의 값이 담긴 변수 */
  formValue: FormValueType;
  /** form의 값을 바꾸는 함수 */
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
