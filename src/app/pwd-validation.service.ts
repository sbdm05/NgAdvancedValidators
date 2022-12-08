import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class PwdValidationService {

  constructor() {
    console.log('depuis verify');

  }

  // ici fonction pour vérifier que pwd et confirmpwd sont identiques
  public verify(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      // on cherche pasword et confirmpassword
      const pwd = formGroup.get('pwd');
      const confirmpwd = formGroup.get('confirmpwd');

      console.log(pwd?.value);

      if (pwd?.value !== confirmpwd?.value) {
        // retourner une erreur
        return { verifyPassword: true };
      }

      return null;
    };
  }
}
