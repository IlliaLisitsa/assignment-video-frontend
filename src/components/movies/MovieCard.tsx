import { FC, memo } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Image } from '@/components/common/Image';

interface MovieCardProps {
  title: string;
  poster: string;
  publishingYear: number;
  onClick: VoidFunction;
}

export const MovieCard: FC<MovieCardProps> = memo(({ title, poster, publishingYear, onClick }) => {
  return (
    <Stack
      maxWidth={282}
      height={500}
      width="100%"
      bgcolor="background.dark"
      borderRadius="12px"
      sx={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <Box mx={1} my={1} borderRadius="12px" overflow="hidden" maxHeight={400}>
        <Image ratio="9/16" src={poster} alt={`${title}-movie`} />
      </Box>
      <Stack direction="column" px={2}>
        <Typography variant="body-xl" mb={1}>
          {title}
        </Typography>
        <Typography variant="caption">{publishingYear}</Typography>
      </Stack>
    </Stack>
  );
});
