// Dependencies
import React from 'react';
import * as Style from './styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const dummyItems = [
  { id: 1, title: 'Network', postCount: 10 },
  { id: 2, title: 'Database', postCount: 10 },
];

function LeftList(): React.ReactElement {
  const {
    query: { list },
  } = useRouter();

  return (
    <Style.List>
      <Style.HomeItem isSelected={!list}>
        <Link href="/">HOME</Link>
        {!list ? <span>■</span> : <></>}
      </Style.HomeItem>
      {dummyItems.map((item) => (
        <Style.Item key={item.title} isSelected={list === item.title}>
          <Link href={`/list/${item.title}`}>
            {item.title.toLocaleUpperCase()}
          </Link>
          {list === item.title ? <span>{item.postCount}</span> : <></>}
        </Style.Item>
      ))}
    </Style.List>
  );
}

export default LeftList;
