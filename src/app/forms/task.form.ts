import {Task, TaskFields} from '../models/task.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TaskTypeEnum} from '../enums/task-type.enum';
import {DynamicFormService} from '../services/dynamic-form.service';
import {TaskFieldsDesc} from './task.form.config';
import {pairwise, startWith} from 'rxjs';

export class TaskForm {

  get id(): string | null { return this.fg.get('_id')?.value || null }
  get type(): TaskTypeEnum | null { return this.fg.get('type')?.value || null; }
  get name(): string | null { return this.fg.get('name')?.value || null; }
  get fields(): TaskFields | null { return this.fg.get('fields')?.value || null; }

  fg = new FormGroup({
    _id: new FormControl<string | null>(this.task._id || null),
    type: new FormControl<TaskTypeEnum>(this.task.type, Validators.required),
    name: new FormControl<string>(this.task.name, Validators.required),
    fields: this.getFieldsFormGroup(this.task.type, this.task.fields)
  });

  constructor(private task: Task, private dynamicFormService: DynamicFormService) {
    this.trackTaskType();
  }

  private trackTaskType(): void {
    this.fg.get('type')?.valueChanges.pipe(
      startWith(this.task.type),
      pairwise()
    ).subscribe(([prev, next]) => {
      if (next && prev !== next) {
        this.fg.setControl('fields', this.getFieldsFormGroup(next, {}));
      }
    });
  }

  private getFieldsFormGroup(taskType: TaskTypeEnum, data: TaskFields): FormGroup {
    return this.dynamicFormService.buildFormGroup(TaskFieldsDesc[taskType], data);
  }
}
