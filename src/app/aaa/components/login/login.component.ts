import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required],
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {}
}
