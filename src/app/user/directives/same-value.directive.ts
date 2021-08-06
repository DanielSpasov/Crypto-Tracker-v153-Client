import { Directive, Input } from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[ngModel][appSameValue]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: SameValueDirective,
            multi: true
        }
    ]
})
export class SameValueDirective implements Validator {

    @Input() name!: string;

    constructor(private form: NgForm) { }

    validate(control: AbstractControl): ValidationErrors | null {

        if (this.name === 'rePassword') {
            let password = this.form.controls.password.value
            return password !== control.value ? { sameValue: true } : null;
        } else {
            let rePassword = this.form.controls.rePassword?.value;
            let rePasswordErrors = this.form.controls.rePassword?.errors ? this.form.controls.rePassword?.errors: {};

            if (rePassword !== control.value) rePasswordErrors!.sameValue = true;
            else rePasswordErrors!.sameValue = false;
        
            return null;
        }
    }
}
