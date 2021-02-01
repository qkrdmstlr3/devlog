/**
 * Types with Enum
 */
export enum SizeEnum {
  small = 'small',
  medium = 'medium',
  large = 'large',
  extraLarge = 'extraLarge',
}

/** Icon */
export type IconSizeType = SizeEnum.small | SizeEnum.medium | SizeEnum.large;
