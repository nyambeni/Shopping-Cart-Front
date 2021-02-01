import { AbstractControl } from "@angular/forms";

export function passwordValidator(control: AbstractControl): {[key: string]:boolean} | null {
    const password = control.get('password');
    const passConn = control.get('passCon');

    if(password?.pristine || passConn?.pristine){
        return null;
    }
    return password && passConn && password.value != passConn.value ? 
    { 'misMatch': true} : null;
}