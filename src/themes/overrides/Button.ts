import { Theme } from '@mui/material/styles';

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '16px 16px',
          boxShadow: 'none',

          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    }
  };
}
