import React, { useState, useEffect, RefObject } from 'react';
import ReactDom from 'react-dom';

interface ReactShadowDomProps {
  children: React.ReactNode;
  parentDom: RefObject<HTMLDivElement>;
}

function ReactShadowDom({
  children,
  parentDom,
}: ReactShadowDomProps): React.ReactElement {
  const [container, setContainer] = useState<any>(undefined);

  useEffect(() => {
    if (!parentDom || parentDom.current?.shadowRoot) {
      return;
    }

    setContainer(parentDom?.current?.attachShadow({ mode: 'open' }));
  }, [parentDom]);

  if (!container) {
    return <></>;
  }

  return ReactDom.createPortal(children, container);
}

export default ReactShadowDom;
