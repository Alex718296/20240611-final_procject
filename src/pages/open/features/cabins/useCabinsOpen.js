import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../../../services/apiCabins';

export const useCabinsOpen = () => {
  const {
    data: cabins,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['cabins_xx'],
    queryFn: getCabins,
  });
  return { cabins, isLoading, error };
};
