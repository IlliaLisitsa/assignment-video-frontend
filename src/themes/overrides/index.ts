import { Theme } from '@mui/material/styles';
import Button from './Button';
import Typography from './Typography';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Button(theme), Typography());
}
