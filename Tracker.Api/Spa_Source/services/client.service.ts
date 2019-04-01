import { HttpMethod, HttpService } from './http.service';
import { Client } from '../models/models';

export class ClientService
{
  public static get(): Promise<Client[]>
  {
    return HttpService.httpService(`Client/get-all`, HttpMethod.GET);
  }

  public static add(client: Client): Promise<number>
  {
    return HttpService.httpService(`Client/add`, HttpMethod.POST, client);
  }
}