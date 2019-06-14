import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { AuthService } from './auth.service';
import { JwtRequest, JwtResponse, OperationResult } from '../models/models';
import { Simulate } from 'react-dom/test-utils';
import error = Simulate.error;

export enum HttpMethod
{
  GET    = 'GET',
  POST   = 'POST',
  DELETE = 'DELETE',
  PUT    = 'PUT ',
}

export class HttpService
{
  // public static send<T>(url: string, method: HttpMethod, data?: any): Promise<T>
  // {
  //   axios.interceptors.response.use((c) => c, (error: AxiosError) =>
  //   {
  //     if (error && 'response' in error && error.response.status === 401)
  //     {
  //       const jwt = AuthService.getJwt();
  //       const data2: JwtRequest = {
  //         refreshToken: jwt.refreshToken,
  //         email: jwt.userDisplay.email,
  //         grantType: 'refresh_token',
  //       };
  //
  //       this.sendRequest<OperationResult<JwtResponse>>('/Tokens', HttpMethod.POST, data2).then(result =>
  //       {
  //         if (result.success)
  //         {
  //           AuthService.addJwt(result.object);
  //
  //           this.sendRequest<T>(url, method, data).then();
  //         }
  //       });
  //     }
  //   });
  //
  //   return this.sendRequest<T>(url, method, data);
  // }

  public static send<T>(url: string, method: HttpMethod, data?: any): Promise<T>
  {
    return new Promise((resolve) =>
    {
      //Обработка ошибки авторизации 401
      axios.interceptors.response.use((c) => c, (error: AxiosError) =>
      {
        if (error && 'response' in error && error.response.status === 401)
        {
          const jwt = AuthService.getJwt();
          //создание нового
          const data2: JwtRequest = {
            refreshToken: jwt.refreshToken,
            email: jwt.userDisplay.email,
            grantType: 'refresh_token',
          };

          this.sendRequest<OperationResult<JwtResponse>>('/Tokens', HttpMethod.POST, data2).then(result =>
          {
            if (result.success)
            {
              AuthService.addJwt(result.object);

              this.sendRequest<T>(url, method, data).then(result =>
              {
                console.log('resss2', result);
                resolve(result);
              });
            }
          });
        }
      });

      //чистый запрос
      this.sendRequest<T>(url, method, data).then(result =>
      {
        resolve(result);
      }).catch(error =>
      {
        console.log('ERRR', error);
      });
    });
  }

  public static sendRequest<T>(url: string, method: HttpMethod, data?: any): Promise<T>
  {
    const requestConfig: AxiosRequestConfig = {
      url: url,
      method: method,
      data: data,
      baseURL: '/api',
    };

    const jwt = AuthService.getJwt();
    if (jwt)
    {
      requestConfig.headers = {
        Authorization: `Bearer ${jwt.accessToken}`
      };
    }

    return axios.request<T>(requestConfig)
      .then(response =>
      {
        if (response && 'data' in response)
        {
          return response.data;
        }
        else
        {
          throw new Error('BLA');
        }
      });
  }
}