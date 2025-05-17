import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function CardSkeleton() {
  return (
    <Stack spacing={1} sx={{ margin: '30px 0' }}>
      <Skeleton variant="rectangular" width={345} height={220}  />
      <Skeleton variant="text" width={345}  height={50} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width={100}  height={30} sx={{ fontSize: '1rem' }} />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        <Skeleton variant="rounded" width={130} height={40} />
        <Skeleton variant="rounded" width={130} height={40} />
      </div>
      <Skeleton variant="rounded" width={345} height={40} sx={{ marginTop: '20px' }} />
    </Stack>
  );
}
