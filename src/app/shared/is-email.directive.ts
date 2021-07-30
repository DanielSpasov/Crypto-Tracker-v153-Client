import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appIsEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IsEmailDirective,
      multi: true
    }
  ]
})
export class IsEmailDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let isEmail = control.value?.match(emailRegex) ? false : true
    return isEmail ? { isEmail: false } : null;
  }
}
