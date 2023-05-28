import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../models/task.model';
import {ToastService} from '../../services/toast.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable, race, Subject} from 'rxjs';
import {ConfirmDeleteTaskComponent} from '../../modals/confirm-delete-task/confirm-delete-task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  loading: boolean = false;
  tasks: Task[] = [];

  constructor(
    private modalService: NgbModal,
    private taskService: TaskService,
    private toastService: ToastService
  ) {
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks() {
    if (!this.loading) {
      this.loading = true;
      this.taskService.getAll().pipe(
        this.toastService.errorOp('Task loading failed')
      ).subscribe((tasks) => {
        this.tasks = tasks;
      }).add(() => this.loading = false);
    }
  }

  deleteTask(task: Task): void {
    if (!this.loading) {
      this.showConfimDeleteModal(task).subscribe((result)=> {
        if (result) {
          this.doDeleteTask(task);
        }
      });
    }
  }

  private doDeleteTask(task: Task) {
    this.loading = true;
    this.taskService.delete(task).pipe(
      this.toastService.successOp('Task deleted'),
      this.toastService.errorOp('Task deletion failed')
    ).subscribe().add(() => {
      this.loading = false;
      this.loadTasks();
    });
  }

  private showConfimDeleteModal(task: Task): Observable<boolean> {
    const modalRef = this.modalService.open(ConfirmDeleteTaskComponent);
    modalRef.componentInstance.task = task;
    return race(
      modalRef.closed,
      modalRef.dismissed
    )
  }


}
