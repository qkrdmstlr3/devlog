// Dependencies
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Graphql
import { useQuery } from '@apollo/client';
import GET_LISTS_QUERY from '@Graphql/list/query/getLists.query';

interface UseListType {
  listName: string;
}

interface ListType {
  id: number;
  title: string;
  postCount: number;
}

function useList(): UseListType {
  const {
    query: { list },
  } = useRouter();
  const { data, loading } = useQuery(GET_LISTS_QUERY);
  const [listName, setListName] = useState<string>('');

  useEffect(() => {
    if (!loading) {
      const listName = data.getLists.filter(
        (l: ListType) => l.id === Number(list)
      )[0];
      if (listName) {
        setListName(listName.title.toUpperCase());
      }
    }
  }, [loading, list]);

  return {
    listName,
  };
}

export default useList;
