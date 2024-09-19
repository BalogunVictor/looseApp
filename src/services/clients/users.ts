import apiHandler from '@/services/api-handler';
import UsersRoute from '../routes/user.route';

export const getUser = async (token?: string) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const response = await apiHandler.get(
    UsersRoute.user,
    token
      ? {
          headers,
        }
      : {}
  );

  return response.data;
};
