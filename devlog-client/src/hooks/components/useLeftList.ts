// Dependencies
import { useContext } from 'react';
import { useRouter } from 'next/router';

// Contexts
import { AdminContext } from '@ContextAPI/admin';

// Graphql
import { useQuery, useMutation } from '@apollo/client';
import GET_LISTS_QUERY from '@Graphql/list/query/getLists.query';
import DELETE_LIST_MUTATION from '@Graphql/list/mutation/deleteList.mutation';

interface ListType {
  id: number;
  title: string;
  postCount: number;
}

interface UseLeftListType {
  /** 현재 리스트 목록 */
  listId: number;
  /** 서버에서 가져온 리스트 목록 */
  lists: ListType[];
  /** 데이터 로딩 여부 */
  loading: boolean;
  /** 관리자 권한 키가 있는지 */
  adminKey: string;
  /** 선택 리스트 삭제 함수 */
  deleteListHandler: (listId: number) => void;
}

function useLeftList(): UseLeftListType {
  const {
    query: { list },
  } = useRouter();
  const { adminKey } = useContext(AdminContext);
  const { data, loading } = useQuery(GET_LISTS_QUERY);
  const [deleteList] = useMutation(DELETE_LIST_MUTATION, {
    update(cache, { data: { deleteList } }) {
      const result = cache.readQuery<{ getLists: ListType[] }>({
        query: GET_LISTS_QUERY,
      });

      if (result) {
        cache.writeQuery({
          query: GET_LISTS_QUERY,
          data: {
            getLists: result.getLists.filter((list) => list.id !== deleteList),
          },
        });
      }
    },
  });

  const deleteListHandler = (listId: number) => {
    const check = window.confirm('정말 삭제하시겠습니까?');
    if (check) {
      deleteList({
        variables: { listId },
      });
    }
  };

  return {
    listId: Number(list),
    lists: data?.getLists,
    loading,
    adminKey,
    deleteListHandler,
  };
}

export default useLeftList;
