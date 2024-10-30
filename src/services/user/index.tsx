import instance from '@/lib/axios/instance';

const userServices = {
  getAllUsers: () => instance.get('/api/user'),
  updateUsers: (id: string, data: any, token: string) =>
    instance.put(
      `/api/user/${id}`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),
  deleteUsers: (id: string, token: string) =>
    instance.delete(`/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { id },
    }),
  getProfile: (token: string) =>
    instance.get('/api/user/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
        timeout: 120000,
      },
    }),
  updateProfile: (data: any, token: string) =>
    instance.put(
      `/api/user/profile`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),
};

export default userServices;
