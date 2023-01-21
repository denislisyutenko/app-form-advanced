import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {User} from '../user';
import {abservableUrlValidator, emailValidator, rangeValidator} from '../custom-validators';
import {
  FORM_ERRORS,
  FORM_LABELS,
  FORM_PLACEHOLDERS,
  FORM_ROLES,
  FORM_SUCCESS,
  FORM_VALIDATION_MESSAGES
} from '../form-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formLabels = FORM_LABELS;
  formPlaceholder = FORM_PLACEHOLDERS;
  formSuccess = FORM_SUCCESS;
  formErrors: any = FORM_ERRORS;
  validationMessages: any = FORM_VALIDATION_MESSAGES;
  roles: string[] = FORM_ROLES;
  userForm!: FormGroup;

  private user: User = new User(1, null, null, null, null, null, null);

  constructor(private fb: FormBuilder) {
  }

  get form(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(): void {
    console.log(this.userForm.valid);
    console.log(this.userForm.value);
  }

  onValueChanged(): void {
    const form = this.userForm;

    Object.keys(this.formErrors).forEach(field => {
      const control = form?.get(field);
      this.formErrors[field] = '';

      if ((control?.dirty || control?.touched) && control.invalid) {
        const messages = this.validationMessages[field];

        Object.keys(control.errors as ValidationErrors).some(key => this.formErrors[field] = messages[key]);
      }
    });
  }

  private buildForm(): void {
    this.userForm = this.fb.group({
      name: [this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      email: [this.user.email, [Validators.required, emailValidator]],
      age: [this.user.age, [Validators.required, rangeValidator(1, 99)]],
      site: [this.user.site, [Validators.required], [abservableUrlValidator]],
      role: [this.user.role, [Validators.required]]
    });

    this.userForm.valueChanges.subscribe(() => this.onValueChanged());
  }
}

