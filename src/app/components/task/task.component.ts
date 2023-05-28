import {Component, OnInit} from '@angular/core';
import {TaskForm} from '../../forms/task.form';
import {ActivatedRoute, Router} from '@angular/router';
import {Task} from '../../models/task.model';
import {DynamicFormService} from '../../services/dynamic-form.service';
import {TaskFieldsDesc} from '../../forms/task.form.config';
import {FieldTypeEnum} from '../../enums/field-type.enum';
import {TaskTypeEnum} from '../../enums/task-type.enum';
import {TaskService} from '../../services/task.service';
import {Observable} from 'rxjs';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  new: boolean = false;
  loading: boolean = false;
  form?: TaskForm;

  get FieldTypeEnum() { return FieldTypeEnum; }
  get TaskFieldsDesc() { return TaskFieldsDesc;}
  get TaskTypeOptions(): TaskTypeEnum[] { return Object.values(TaskTypeEnum); }

  constructor(
    private activatedRoute: ActivatedRoute,
    private dynamicFormService: DynamicFormService,
    private router: Router,
    private taskService: TaskService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.new = data['new'];
      this.initForm(data['task']);
    });
  }

  initForm(task: Task) {
    this.form = new TaskForm(task, this.dynamicFormService)
  }

  exit() {
    this.router.navigate(['../task-list']);
  }

  submitTask() {
    this.form?.fg.disable();
    this.upload().pipe(
      this.toastService.successOp(this.new ? 'Task created' : 'Task updated'),
      this.toastService.errorOp(this.new ? 'Task creation failed' : 'Task update failed'),
    ).subscribe({
      next: () => this.exit(),
      error: () => this.form?.fg.enable()
    });
  }

  private upload(): Observable<void> {
    if (this.new) {
      return this.taskService.create(this.form?.fg.getRawValue() as Task);
    } else {
      return this.taskService.update(this.form?.fg.getRawValue() as Task);
    }
  }
}
