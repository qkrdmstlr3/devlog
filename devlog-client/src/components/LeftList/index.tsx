// Dependencies
import React from 'react';
import * as Style from './styled';
import Link from 'next/link';

// RenderingData
import string from '@RenderingData/string';

// Hooks
import useLeftList from '@Hooks/components/useLeftList';

function LeftList(): React.ReactElement {
  const { listId, lists, loading, adminKey, deleteListHandler } = useLeftList();

  const renderer = React.useMemo(() => {
    if (loading) return <></>;
    return (
      <Style.List>
        <Style.HomeItem>
          <Link href="/">{string.HOME}</Link>
          {!listId && <span>■</span>}
        </Style.HomeItem>
        {lists?.map((item) => (
          <Style.Item key={item.title}>
            <Link href={`/list/${item.id}`}>
              {item.title.toLocaleUpperCase()}
            </Link>
            {listId === item.id && <span>{item.postCount}</span>}
            {adminKey && (
              <span onClick={() => deleteListHandler(Number(item.id))}>
                삭제
              </span>
            )}
          </Style.Item>
        ))}
      </Style.List>
    );
  }, [lists?.length, listId, adminKey]);

  return renderer;
}

export default LeftList;
