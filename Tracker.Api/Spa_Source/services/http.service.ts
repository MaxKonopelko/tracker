import axios, { AxiosRequestConfig } from 'axios';

export enum HttpMethod
{
  GET    = 'GET',
  POST   = 'POST',
  DELETE = 'DELETE',
  PUT    = 'PUT ',
}

export class HttpService
{
   public static httpService<T>(url: string, method: HttpMethod, data?: any): Promise<T>
  {
    const config: AxiosRequestConfig = {
      url: url,
      method: method,
      data: data,
      baseURL: '/api',
    };
    return axios.request<T>(config)
      .then(response =>
      {
        return response.data;
      });
  }
}