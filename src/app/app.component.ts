import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PwdValidationService } from './pwd-validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ValidatorsAvances';

  public profileForm!: FormGroup;
  // importer FormBuilder dans le constructor
  constructor(
    private fb: FormBuilder,
    private pwdValidation: PwdValidationService
  ) {}
  // initialiser des propriétés dans le ngOnInit()
  ngOnInit() {
    this.profileForm = this.fb.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        pwd: ['', Validators.required],
        confirmpwd: ['', Validators.required],
      },
      {
        validators: [this.pwdValidation.verify()],
      }
    );
  }

  // penser à importer ReactiveFormBuilder

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
