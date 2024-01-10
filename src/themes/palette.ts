import { createTheme } from '@mui/material/styles';
import { presetPalettes, PalettesProps } from '@ant-design/colors';

const Palette = () => {
  const colors: PalettesProps = presetPalettes;

  colors.grey = ['#ffffff', '#fafafa', '#f5f5f5', '#f0f0f0', '#d9d9d9', '#bfbfbf', '#8c8c8c', '#595959', '#262626', '#141414', '#000000'];

  return createTheme({
    palette: {
      common: {
        black: '#000',
        white: '#fff'
      }
    }
  });
};

export default Palette;
