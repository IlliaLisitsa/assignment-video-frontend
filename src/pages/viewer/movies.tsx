import { ReactElement } from 'react';
import { Page } from '@/components/common';
import { Box, LinearProgress, Typography } from '@mui/material';
import { en } from '@/locales/en';
import Layout from '@/layouts';

export default function Movies() {
  return (
    <Page title={en.projectName}>
      <LinearProgress color="primary" sx={{ backgroundColor: 'background.default' }} />

      <Box minHeight="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography variant="h1">{en.projectName}</Typography>
      </Box>
    </Page>
  );
}

Movies.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="withAuth">{page}</Layout>;
};
