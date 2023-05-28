import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Task} from '../models/task.model';
import {Observable} from 'rxjs';
import {TaskService} from '../services/task.service';

@Injectable({providedIn: 'root'})
export class NewTaskResolver implements Resolve<Task> {

  constructor(private taskService: TaskService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> {
    return this.taskService.new();
  }
}
