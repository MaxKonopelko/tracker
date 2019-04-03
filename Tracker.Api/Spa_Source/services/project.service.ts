import { HttpMethod, HttpService } from './http.service';
import { Project } from '../models/models';

export  class ProjectService
{
  public static get(): Promise<Project[]>
  {
    return HttpService.httpService(`Projects/get-all`, HttpMethod.GET);
  }

  public static add(project: Project): Promise<number>
  {
    return HttpService.httpService(`Projects/add`, HttpMethod.POST, project);
  }
}