import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import ThemeCustomization from '@/themes';
import { store } from '@/store';
import { AuthProvider } from '@/layouts/context/AuthContext';

type LayoutProps = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface Props {
  Component: LayoutProps;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps & Props) {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <ReduxProvider store={store}>
      <ThemeCustomization>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </ThemeCustomization>
    </ReduxProvider>
  );
}
