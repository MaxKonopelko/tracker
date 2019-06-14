import { HttpMethod, HttpService } from './http.service';
import { Project } from '../models/models';

export class ProjectService
{
  public static getAll(): Promise<Project[]>
  {
    return HttpService.send(`Projects/get-all`, HttpMethod.GET);
  }

  public static getById(id: number): Promise<Project>
  {
    return HttpService.send(`Projects/get-by-id/${id}`, HttpMethod.GET);
  }

  public static add(project: Project): Promise<number>
  {
    return HttpService.send(`Projects/add`, HttpMethod.POST, project);
  }

  public static change(project: Project): Promise<boolean>
  {
    return HttpService.send(`Projects/change`, HttpMethod.POST, project);
  }
}