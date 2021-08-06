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
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (control.value) {
            return emailRegex.test(control.value) ? null : { isEmail: true }
        }
        return null
    }
}
