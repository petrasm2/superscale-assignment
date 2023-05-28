import {TaskTypeEnum} from '../enums/task-type.enum';

export interface Task {
  _id?: string,
  type: TaskTypeEnum,
  name: string,
  fields: TaskFields
}

export interface TaskFields {
  [key: string]: any
}
