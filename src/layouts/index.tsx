import { ReactElement } from 'react';
import AuthGuard from '@/utils/guards/AuthGuard';

interface Props {
  children: ReactElement;
  variant?: 'withAuth';
}

export default function Layout({ variant, children }: Props) {
  if (variant === 'withAuth') {
    return <AuthGuard>{children}</AuthGuard>;
  }

  return <>{children}</>;
}
