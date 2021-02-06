// Dependencies
import React from 'react';
import * as icons from './svg';

// Types
import { IconSizeType } from '../../types';

export type IconType = keyof typeof icons;

export type IconProps = {
  /** 아이콘 종류 */
  icon: IconType;
  /** 아이콘 크기 */
  size: IconSizeType;
};

function Icon({ icon, size }: IconProps): React.ReactElement {
  const SVGIcon = icons[icon];
  return <SVGIcon size={size} />;
}

export default Icon;
