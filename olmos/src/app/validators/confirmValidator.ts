import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('password2');
  
    return password && confirmPassword && password.value === confirmPassword.value ? { confirmPassword: true } : { confirmPassword: false };
};