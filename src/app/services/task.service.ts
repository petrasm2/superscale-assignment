import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from '../models/task.model';
import {Observable, of} from 'rxjs';
import {TaskTypeEnum} from '../enums/task-type.enum';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  API_URL = 'http://64.225.105.163:3000/tasks';

  constructor(
    private httpClient: HttpClient
  ) { }

  new(): Observable<Task> {
    return of({
      type: TaskTypeEnum.WASH_DISHES,
      name: 'New Task',
      fields: {}
    });
  }

  getAll(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.API_URL);
  }

  get(taskId: string): Observable<Task> {
    return this.httpClient.get<Task>(`${this.API_URL}/${taskId}`);
  }

  create(task: Task): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, task);
  }

  update(task: Task): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/${task._id}`, task);
  }

  delete(task: Task): Observable<any> {
    return this.httpClient.delete(`${this.API_URL}/${task._id}`);
  }
}
