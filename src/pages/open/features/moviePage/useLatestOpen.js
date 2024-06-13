import { useQuery } from '@tanstack/react-query';
import { getLatest } from '../../../../services/ApiOrganization';
// import Popular from '../../../Popular';

export const useLatestOpen = () => {
  let {
    data: movie_name,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['movie_name'],
    queryFn: getLatest,
  });
  return { movie_name, isLoading, error };
};
