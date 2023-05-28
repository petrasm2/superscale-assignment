import { Injectable } from '@angular/core';
import {FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {FieldTypeEnum} from '../enums/field-type.enum';

export type FieldDesc = {
  name: string;
  type: FieldTypeEnum;
  label: string;
  validators?: ValidatorFn[]
}

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() { }

  buildFormGroup(fieldsDesc: FieldDesc[], data: any): FormGroup {
    const group = new FormGroup({});
    for (let field of fieldsDesc) {
      group.addControl(field.name, new FormControl(data[field.name], field.validators));
    }
    return group;
  }

}
