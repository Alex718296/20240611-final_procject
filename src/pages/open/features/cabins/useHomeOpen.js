import { useQuery } from '@tanstack/react-query';
import { getHome } from '../../../../services/apiHomes';

export const useHomeOpen = () => {
  let {
    data: singer,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['singer'],
    queryFn: getHome,
  });
  return { singer, isLoading, error };
};
