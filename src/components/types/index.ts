/**
 * Types with Enum
 */
export enum SizeEnum {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

/** Icon */
export type IconSizeType = SizeEnum.small | SizeEnum.medium | SizeEnum.large;
export type IconNameType = 'react' | 'rightChevron';

/** Media query */
export type MediaQueryType = SizeEnum.small | SizeEnum.medium | SizeEnum.large;
