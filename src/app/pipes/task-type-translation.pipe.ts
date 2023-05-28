import { Pipe, PipeTransform } from '@angular/core';
import {TaskTypeEnum, TaskTypeTransaltions} from '../enums/task-type.enum';

@Pipe({
  name: 'taskType'
})
export class TaskTypeTranslationPipe implements PipeTransform {

  transform(value: TaskTypeEnum | undefined): string {
    if (value) {
      return TaskTypeTransaltions[value] || value;
    }
    return '';
  }

}
