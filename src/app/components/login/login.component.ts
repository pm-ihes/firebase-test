import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  email: string = '';
  password: string = '';

  hide = true;

  constructor(private auth: AuthService, private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.email = '';
    this.password = '';

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login(){

    this.auth.login(this.email, this.password);

  }
}
