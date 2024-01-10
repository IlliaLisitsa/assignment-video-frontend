import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

const LoaderWrapper = styled('div')(({ theme }) => ({}));

const Loader = () => (
  <LoaderWrapper>
    <LinearProgress color="primary" />
  </LoaderWrapper>
);

export default Loader;
