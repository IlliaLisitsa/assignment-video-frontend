import { Theme, TypographyVariantsOptions } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { pxToRem } from '@/utils/fontSizing';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'body-xs': true;
    'body-xl': true;
  }
}

const primaryFont = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'auto',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
});

const Typography = (theme: Theme): TypographyVariantsOptions => ({
  fontFamily: primaryFont.style.fontFamily,
  htmlFontSize: 16,
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 600,
    fontSize: pxToRem(64),
    lineHeight: pxToRem(80)
  },
  h2: {
    fontWeight: 600,
    fontSize: pxToRem(48),
    lineHeight: pxToRem(56)
  },
  h3: {
    fontWeight: 600,
    fontSize: pxToRem(32),
    lineHeight: pxToRem(40)
  },
  h4: {
    fontWeight: 700,
    fontSize: pxToRem(24),
    lineHeight: pxToRem(32)
  },
  h5: {
    fontWeight: 700,
    fontSize: pxToRem(20),
    lineHeight: pxToRem(24)
  },
  h6: {
    fontWeight: 700,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24)
  },
  body1: {
    fontWeight: 700,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(24)
  },
  body2: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(24)
  },
  // @ts-ignore
  'body-xs': {
    fontWeight: 400,
    fontSize: pxToRem(12),
    lineHeight: pxToRem(24)
  },
  'body-xl': {
    fontWeight: 500,
    fontSize: pxToRem(20),
    lineHeight: pxToRem(32)
  },
  caption: {
    fontWeight: 400,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(16)
  }
});

export default Typography;
