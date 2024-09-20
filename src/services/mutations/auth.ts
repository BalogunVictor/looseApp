import apiHandler from '@/services/api-handler';
import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import AuthRoute from '../routes/auth.route';

interface IErrorResponse {
  message: string;
  statusCode: number;
}

export default function useAuthMutations() {
  //   const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: (payload: { email: string; password: string }) => {
      return apiHandler.post(AuthRoute.login, payload);
    },

    onSuccess: (data: AxiosResponse) => {
      return data;
    },
    onError: (error: AxiosError<IErrorResponse>) => {
      const errorMessage =
        error?.response?.data?.message || 'An error occurred';
      toast.error(errorMessage);
    },
  });

  return {
    loginMutation,
  };
}
