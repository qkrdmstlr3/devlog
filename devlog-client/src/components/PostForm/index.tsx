// Dependencies
import React from 'react';
import * as Style from './styled';

// Types
import { FormValueType } from '../../common/types';

// Hooks
import usePostForm from '@Hooks/components/usePostForm';

interface PostFormProps {
  /** page 이름 */
  page: string;
  /** 수정할 때 현재 포스트의 리스트 이름 */
  listName?: string;
  /** 수정할 때 현재 포스트의 이름 */
  title?: string;
  /** 수정할 때 현재 포스트의 내용 */
  content?: string;
  /** submit할 때 호출될 함수 */
  submitHandler: (
    event: React.FormEvent<HTMLFormElement>,
    formValue: FormValueType
  ) => void;
}

function PostForm({
  page,
  listName = '',
  title = '',
  content = '',
  submitHandler,
}: PostFormProps): React.ReactElement {
  const { formValue, lists, changeHandler } = usePostForm({
    title,
    content,
    listName,
  });

  return (
    <Style.Form onSubmit={(event) => submitHandler(event, formValue)}>
      <Style.Header>
        <Style.Dropdown
          value={formValue.listNameValue}
          onChange={(event) => changeHandler(event, 'listNameValue')}
        >
          {lists?.map((item) => (
            <option key={item.title} value={item.title}>
              {item.title}
            </option>
          ))}
        </Style.Dropdown>
        <Style.PageTitle>{page}</Style.PageTitle>
      </Style.Header>
      <Style.TitleInput
        type="text"
        placeholder="제목 입력"
        value={formValue.titleValue}
        onChange={(event) => changeHandler(event, 'titleValue')}
      />
      <Style.ContentInput
        placeholder="내용 입력"
        value={formValue.contentValue}
        onChange={(event) => changeHandler(event, 'contentValue')}
      />
      <Style.SubmitButton>제출하기</Style.SubmitButton>
    </Style.Form>
  );
}

export default PostForm;
