import {ValidatorFn, Validators} from '@angular/forms';

export class CustomValidators {
  static required(): ValidatorFn {
    return Validators.required;
  }
}

