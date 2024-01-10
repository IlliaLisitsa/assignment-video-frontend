import { ReactElement } from 'react';
import AuthGuard from '@/utils/guards/AuthGuard';
import { MainLayout } from './MainLayout';

interface Props {
  children: ReactElement;
  variant?: 'withAuth';
}

export default function Layout({ variant, children }: Props) {
  if (variant === 'withAuth') {
    return (
      <MainLayout>
        <AuthGuard>{children}</AuthGuard>
      </MainLayout>
    );
  }

  return <MainLayout>{children}</MainLayout>;
}
