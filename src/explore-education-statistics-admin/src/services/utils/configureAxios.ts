import authService from '@admin/components/api-authorization/AuthorizeService';
import adminApi from '@admin/services/utils/service';
import { dataApi } from '@common/services/api';

const configureAxios = () => {
  dataApi.axios.defaults.baseURL = '/api/data';

  const clients = [dataApi, adminApi];

  clients.forEach(client => {
    client.axios.interceptors.request.use(
      // any due to https://github.com/axios/axios/issues/5573
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async (config): Promise<any> => {
        const token = await authService.getAccessToken();

        if (token) {
          return {
            ...config,
            headers: {
              ...config.headers,
              Authorization: `Bearer ${token}`,
            },
          };
        }

        return config;
      },
      error => Promise.reject(error),
    );

    client.axios.interceptors.response.use(
      response => response,
      error => Promise.reject(error),
    );
  });
};

export default configureAxios;
