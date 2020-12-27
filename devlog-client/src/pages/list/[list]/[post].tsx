// Dependencies
import React from 'react';
import { useRouter } from 'next/router';

function BottomList(): React.ReactElement {
  const {
    query: { post },
  } = useRouter();

  return <div>hello world</div>;
}

export default BottomList;
