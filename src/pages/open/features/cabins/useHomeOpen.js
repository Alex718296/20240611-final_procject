import { useQuery } from '@tanstack/react-query';
import { getMovie } from '../../../../services/ApiOrganization';

export const useHomeOpen = () => {
  let {
    data: movie_name,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['movie_name'],
    queryFn: getMovie,
  });
  return { movie_name, isLoading, error };
};
