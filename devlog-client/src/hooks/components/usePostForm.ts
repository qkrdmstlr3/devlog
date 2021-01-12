// Dependencies
import { useState } from 'react';

// Types
import { FormValueType } from '../../common/types';

// Graphql
import { useQuery } from '@apollo/client';
import GET_LISTS_QUERY from '@Graphql/list/query/getLists.query';

interface UsePostFormProps {
  /** 포스트 제목 */
  title: string;
  /** 포스트 내용 */
  content: string;
  /** 포스트가 속한 리스트 이름 */
  listName: string;
}

interface ListType {
  id: number;
  title: string;
  postCount: number;
}

interface UsePostFormType {
  /** form에서 title content listName의 값이 담긴 변수 */
  formValue: FormValueType;
  /** 서버에서 가져온 리스트 목록 */
  lists: ListType[];
  /** 리스트 데이터 로딩 여부 */
  loading: boolean;
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
  const { data, loading } = useQuery(GET_LISTS_QUERY);
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
    lists: data?.getLists,
    loading,
    formValue,
    changeHandler,
  };
}

export default usePostForm;
