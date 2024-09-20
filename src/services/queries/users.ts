import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/services/clients/users';

export const useFetchUsers = (token: string) => {
  const queryKey = ['me'];
  return useQuery({
    queryKey,
    queryFn: () => getUser(token),
  });
};
