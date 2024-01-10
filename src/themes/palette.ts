import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    light: string;
    dark: string;
  }
}

const Palette = () => {
  return createTheme({
    palette: {
      text: {
        primary: '#fff',
        secondary: '#fff'
      },
      primary: {
        main: '#2BD17E'
      },
      secondary: {
        main: '#fff'
      },
      common: {
        black: '#000',
        white: '#fff'
      },
      background: {
        paper: '#fff',
        light: '#224957',
        default: '#093545',
        dark: '#092C39'
      },
      error: {
        main: '#EB5757'
      }
    }
  });
};

export default Palette;
