import * as icons from './svg';

export type IconType = keyof typeof icons;
export interface IconProps {
  icon: IconType;
}

export function Icon({ icon }: IconProps) {
  const SVGIcon = icons[icon];
  return <SVGIcon />;
}
