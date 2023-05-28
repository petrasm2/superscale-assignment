import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  loading: boolean = false;
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks() {
    this.loading = true;
    this.taskService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
    }).add(() => this.loading = false);
  }


}
