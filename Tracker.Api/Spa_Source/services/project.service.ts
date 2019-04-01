import { HttpMethod, HttpService } from './http.service';
import { Project } from '../models/models';

export  class ProjectService
{
  public static get(): Promise<Project[]>
  {
    return HttpService.httpService(`Project/get-all`, HttpMethod.GET);
  }
}