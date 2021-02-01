import { AbstractControl } from "@angular/forms";

export function userValidator(control: AbstractControl): {[key: string]:boolean} | null {
    return null; //have to get this from api
}