import { group } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control?.parent?.dirty && control.touched);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty && control.touched);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;

  matcher = new MyErrorStateMatcher();

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  hide1 = true;
  hide2 = true;

  isWideEnough = false;

  constructor (private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit () {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';

    this.isWideEnough = !!(this.getScreenWidth() > 640);

    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]},
      { validator: this.checkPasswords 
    });
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isWideEnough = !!(this.getScreenWidth() > 640);
  }

  register () {
    this.router.navigate(['loading']);
    this.auth.register(this.firstname, this.lastname, this.email, this.password);
  }

  checkPasswords (group: FormGroup) {
    let pass = group.controls['password']?.value;
    let confirmPass = group.controls['confirmPassword']?.value;
    return pass === confirmPass ? null : { notSame: true }
  }

  getScreenWidth(){
    return window.innerWidth;
  }

}
