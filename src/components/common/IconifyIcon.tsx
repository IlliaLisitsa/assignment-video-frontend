import { Icon } from '@iconify/react';
import { Box, BoxProps } from '@mui/material';
import { forwardRef } from 'react';

export type UsedIconNames = 'material-symbols:download' | 'icons8:plus' | 'mdi:logout';

interface IIconProps extends BoxProps {
  size: number;
  icon: UsedIconNames;
}

export const IconifyIcon = forwardRef<SVGElement, IIconProps>(({ icon, size = 20, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    icon={icon}
    sx={{
      width: size,
      height: size,
      ...sx
    }}
    {...other}
  />
));
