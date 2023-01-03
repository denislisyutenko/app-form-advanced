import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {User} from './user';
import {NgForm, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  roles: string[] = ['Гость', 'Модератор', 'Администратор'];
  user: User = new User(1, null, null, null);

  formErrors: any = {
    name: '',
    age: ''
  };

  validationMassages: any = {
    name: {
      required: 'Имя обязательно',
      minLength: 'Имя должно быть минимум 3 символа'
    },
    age: {
      required: 'Возраст обязателен',
    }
  };

  @ViewChild('userForm') userForm!: NgForm;


  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.userForm.valueChanges?.subscribe(_ => this.onValueChanged());
  }

  onSubmit(): void {
    console.log('Form submitted');
  }


  private onValueChanged(): void {
    const form = this.userForm.form;

    Object.keys(this.formErrors).forEach(field => {
      const control = form.get(field);
      this.formErrors[field] = '';

      if (control && control.dirty && control.invalid) {
        const messages = this.validationMassages[field];

        Object.keys(control.errors as ValidationErrors).forEach(key => {
          console.log(messages[key]);
          this.formErrors[field] = messages[key] + ' ';
        });
      }
    });
  }

}
