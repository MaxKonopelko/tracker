import { HttpMethod, HttpService } from './http.service';
import { Client } from '../models/models';

export class ClientService
{
  public static get(): Promise<Client[]>
  {
    return HttpService.send(`Clients/get-all`, HttpMethod.GET);
  }

  public static add(client: Client): Promise<number>
  {
    return HttpService.send(`Clients/add`, HttpMethod.POST, client);
  }
}