// Dependencies
import React from 'react';
import styled from '../../../../common/style/styled';

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
        maxWidth: '60%',
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
        fontSize: '15px',
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
  level?: number;
}

export const paragraph = ({ children }: ChildrenProps) => {
  return (
    <p
      style={{
        lineHeight: '30px',
        fontSize: '16px',
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

/** heading */
export const heading = ({ level, children }) => {
  switch (level) {
    case 1:
      return (
        <h1
          style={{
            paddingTop: '2rem',
            margin: '0',
            fontFamily: 'NeoDunggeunmo',
          }}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          style={{
            paddingTop: '2rem',
            margin: '0',
            fontSize: '1.7rem',
            fontFamily: 'NeoDunggeunmo',
          }}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          style={{
            paddingTop: '2rem',
            margin: '0',
            fontFamily: 'NeoDunggeunmo',
            fontSize: '1.4rem',
          }}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          style={{
            paddingTop: '2rem',
            margin: '0',
            fontFamily: 'NeoDunggeunmo',
          }}
        >
          {children}
        </h4>
      );
    case 5:
      return (
        <h5
          style={{
            paddingTop: '2rem',
            margin: '0',
            fontFamily: 'NeoDunggeunmo',
          }}
        >
          {children}
        </h5>
      );
    case 6:
      return (
        <h6
          style={{
            paddingTop: '2rem',
            margin: '0',
            fontFamily: 'NeoDunggeunmo',
          }}
        >
          {children}
        </h6>
      );
    default:
      return (
        <h1
          style={{
            paddingTop: '2rem',
            margin: '0',
            fontFamily: 'NeoDunggeunmo',
          }}
        >
          {children}
        </h1>
      );
  }
};
