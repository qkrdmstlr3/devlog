import { ReactNode } from 'react';
import * as Style from './style.css';
import '../../styles/global.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className={Style.Container}>{children}</div>;
}
