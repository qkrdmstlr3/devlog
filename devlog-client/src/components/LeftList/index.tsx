// Dependencies
import React from 'react';
import * as Style from './styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

// RenderingData
import string from '@RenderingData/string';

// Hooks
import useLeftList from '@Hooks/components/useLeftList';

function LeftList(): React.ReactElement {
  const {
    query: { list },
  } = useRouter();
  const { lists, loading } = useLeftList();

  if (loading) return <></>;

  return (
    <Style.List>
      <Style.HomeItem isSelected={!list}>
        <Link href="/">{string.HOME}</Link>
        {!list ? <span>■</span> : <></>}
      </Style.HomeItem>
      {lists?.map((item) => (
        <Style.Item key={item.title} isSelected={list === item.title}>
          <Link href={`/list/${item.id}`}>
            {item.title.toLocaleUpperCase()}
          </Link>
          {list === item.title ? <span>{item.postCount}</span> : <></>}
        </Style.Item>
      ))}
    </Style.List>
  );
}

export default LeftList;
