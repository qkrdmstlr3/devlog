import { ReactNode } from 'react';
import '../../../styles/global.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return children;
}
