import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    code: ['', [Validators.required]],
  });

  isSignup = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    let model;
    if (this.isSignup) {
      model = {
        email: this.signupForm.get('email')?.value,
        password: this.signupForm.get('password')?.value,
      };
      this.isSignup = false;
    } else {
      model = {
        code: this.signupForm.get('code')?.value,
      };
    }
  }
}
