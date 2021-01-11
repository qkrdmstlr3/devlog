// Dependencies
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Style from './styled';

// Hooks
import useBottomList from '@Hooks/components/useBottomList';

function BottomList(): React.ReactElement {
  const {
    query: { list, post },
  } = useRouter();
  const { posts } = useBottomList({ listId: Number(list) });

  return (
    <Style.List>
      {posts.map((item) => (
        <Style.Item key={item.title} isSelected={post === item.title}>
          {post === item.title ? <Style.BoxIcon>■</Style.BoxIcon> : <></>}
          <Link href={`/list/${list}/${item.id}`}>
            {item.title.toLocaleUpperCase()}
          </Link>
        </Style.Item>
      ))}
    </Style.List>
  );
}

export default BottomList;
