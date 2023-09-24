import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

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
  isWideEnough = false;

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) {}
  
  ngOnInit () : void {

    this.email = '';
    this.password = '';

    this.isWideEnough = !!(this.getScreenWidth() > 640);

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  @HostListener('window: resize', ['$event'])
  onResize () {
    this.isWideEnough = !!(this.getScreenWidth() > 640);
  }

  login () {
    this.router.navigate(['loading']);
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  getScreenWidth () {
    return window.innerWidth;
  }
}
