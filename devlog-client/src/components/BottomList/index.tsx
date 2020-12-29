// Dependencies
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Style from './styled';

const dummyPosts = [
  { id: 1, title: 'webpack에 관하여1' },
  { id: 2, title: 'webpack에 관하여2' },
  { id: 3, title: 'webpack에 관하여3' },
  { id: 4, title: 'webpack에 관하여4' },
  { id: 5, title: 'webpack에 관하여5' },
];

function BottomList(): React.ReactElement {
  const {
    query: { list, post },
  } = useRouter();

  return (
    <Style.List>
      {dummyPosts.map((item) => (
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
