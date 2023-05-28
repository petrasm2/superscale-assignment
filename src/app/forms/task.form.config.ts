import {FieldTypeEnum} from '../enums/field-type.enum';
import {TaskTypeEnum} from '../enums/task-type.enum';
import {FieldDesc} from '../services/dynamic-form.service';
import {CustomValidators} from './validators';
import {Validators} from '@angular/forms';


export const TaskFieldsDesc: Record<TaskTypeEnum, FieldDesc[]> = {
  [TaskTypeEnum.WASH_DISHES]: [
    {
      name: 'durationInHours',
      type: FieldTypeEnum.NUMBER,
      label: 'Duration (hours)',
      validators: [CustomValidators.required(), Validators.min(1)]
    }
  ],
  [TaskTypeEnum.VACUUM_CLEAN]: [
    {
      name: 'who',
      type: FieldTypeEnum.STRING,
      label: 'Who',
      validators: [CustomValidators.required()]
    },
    {
      name: 'room',
      type: FieldTypeEnum.STRING,
      label: 'Room',
      validators: [CustomValidators.required()]
    }
  ]
}
