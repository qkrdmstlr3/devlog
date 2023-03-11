import { HTMLAttributes } from 'react';
import classnames from 'classnames';
import * as Style from './style.css';

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={classnames(className, Style.Wrapper)} {...props}>
      <span className={Style.Logo}>Maison Shellboy</span>
      <span className={Style.Location}>PARIS</span>
    </div>
  );
}
