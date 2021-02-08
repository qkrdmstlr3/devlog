import React from 'react';
import styled from '../../../../common/style/styled';
import CodeBlock from './CodeBlock';

/** Image */
interface ImageProps {
  alt?: string;
  src?: string;
  title?: string;
}

export const image = ({ alt, src, title }: ImageProps) => {
  return (
    <img
      alt={alt}
      src={src}
      title={title}
      style={{
        display: 'block',
        maxWidth: 475,
        margin: '0 auto',
      }}
    />
  );
};

/** inlineCode */
interface InlineCodeProps {
  value: string;
}

export const inlineCode = ({ value }: InlineCodeProps) => {
  return (
    <span
      style={{
        background: '#EDEDEB',
        color: '#EB5E5E',
        fontWeight: 'bold',
        padding: '0 5px',
        borderRadius: '5px',
      }}
    >
      {value}
    </span>
  );
};

/** paragraph */
interface ChildrenProps {
  children: string;
  href?: string;
}

export const paragraph = ({ children }: ChildrenProps) => {
  return (
    <p
      style={{
        lineHeight: '25px',
        fontSize: '18px',
        margin: '10px 0',
      }}
    >
      {children}
    </p>
  );
};

/** table */
export const table = ({ children }: ChildrenProps) => {
  return (
    <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
      {children}
    </table>
  );
};

/** table head */
export const tableHead = ({ children }: ChildrenProps) => {
  return (
    <thead style={{ background: '#ccc', fontWeight: 'bold' }}>{children}</thead>
  );
};

/** table cell */
export const tableCell = ({ children }: ChildrenProps) => {
  return (
    <td style={{ border: '1px solid black', padding: '15px' }}>{children}</td>
  );
};

/** listItem */
export const listItem = ({ children }: ChildrenProps) => {
  return <li style={{ margin: '15px 0', fontSize: '15px' }}>{children}</li>;
};

/** link */
export const link = ({ children, href }: ChildrenProps) => {
  return (
    <a href={href} style={{ color: '#EB5E5E' }}>
      {children}
    </a>
  );
};
