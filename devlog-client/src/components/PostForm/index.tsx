// Dependencies
import React from 'react';
import * as Style from './styled';

// Types
import { FormValueType } from '../../common/types';

// Hooks
import usePostForm from '@Hooks/components/usePostForm';

// Components
import WysiwygEditor from '@Components/WysiwygEditor';

interface ListType {
  id: number;
  title: string;
  postCount: number;
}

interface PostFormProps {
  /** page 이름 */
  page: string;
  /** 수정할 때 현재 포스트의 이름 */
  title?: string;
  /** 수정할 때 현재 포스트의 내용 */
  content?: string;
  /** submit할 때 호출될 함수 */
  submitHandler: (
    event: React.FormEvent<HTMLFormElement>,
    formValue: FormValueType,
    lists: ListType[]
  ) => void;
}

function PostForm({
  page,
  title = '',
  content = '',
  submitHandler,
}: PostFormProps): React.ReactElement {
  const {
    formValue,
    lists,
    loading,
    changeHandler,
    changeContentHandler,
  } = usePostForm({
    title,
    content,
  });

  if (loading) return <></>;
  return (
    <Style.Form onSubmit={(event) => submitHandler(event, formValue, lists)}>
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
      <WysiwygEditor
        initialValue={formValue.contentValue}
        onChangeHandler={changeContentHandler}
      />
      <Style.SubmitButton>제출하기</Style.SubmitButton>
    </Style.Form>
  );
}

export default PostForm;
