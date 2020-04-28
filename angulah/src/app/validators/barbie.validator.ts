import { AbstractControl } from '@angular/forms';

export function notBarbieValidator(control: AbstractControl) {
  if (!control.value) {
    return null;
  }

  if (control.value.includes('barbie')) {
    return {
      barbie: true,
    };
  }

  return null;
}
