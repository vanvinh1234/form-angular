import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ?
    null : {
      passwordnotmatch: true
    };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validators: comparePassword} ),
      country: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: [''],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]]
    });
    // this.registerForm.patchValue({
    //   email: 'info@example.com'
    // });
  }
  onSubmit() {
    console.log(this.registerForm);
  }
  get email() {
    return this.registerForm.get('email');
  }
  get country() {
    return this.registerForm.get('country');
  }
  get age() {
    return this.registerForm.get('age');
  }
  get gender() {
    return this.registerForm.get('gender');
  }
  get phone() {
    return this.registerForm.get('phone');
  }

}
