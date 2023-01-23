// Dependencies
import React from 'react';

// Types
import { IconSizeType, SizeEnum } from '../../types';

export type ChevronProps = {
  /** 크기 */
  size?: IconSizeType;
};

const sizes = {
  [SizeEnum.small]: '20',
  [SizeEnum.medium]: '30',
  [SizeEnum.large]: '40',
};

function Chevron({ size = SizeEnum.medium }: ChevronProps): React.ReactElement {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={sizes[size]} height={sizes[size]} viewBox="0 0 24 24">
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

export default Chevron;
