import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  public submit() {
    console.log(this.form.value);
    console.log(this.form.valid);
    if(this.form.valid){
      alert('Form has been successfully sent.');
    }
  }

  get name() {
    return this.form.get('name');
  }
  get isNameValid() {
    return this.name?.touched && this.name?.valid;
  }
  get email() {
    return this.form.get('email');
  }
  get isEmailValid() {
    return this.email?.touched && this.email?.valid;
  }
  get message() {
    return this.form.get('message');
  }
  get isMessageValid() {
    return this.message?.touched && this.message?.valid;
  }
}
