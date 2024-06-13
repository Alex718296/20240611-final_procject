import { useQuery } from '@tanstack/react-query';
import { getComingSoon } from '../../../../services/ApiOrganization';
// import Popular from '../../../Popular';

export const useComingSoonOpen = () => {
  let {
    data: movie_name,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['movie_name'],
    queryFn: getComingSoon,
  });
  return { movie_name, isLoading, error };
};
