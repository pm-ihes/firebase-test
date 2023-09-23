import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

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

  constructor (private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit () {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';

    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]},
      { validator: this.checkPasswords 
    });
  }
  
  register () {
    this.auth.register(this.firstname, this.lastname, this.email, this.password);

    this.router.navigate(['login']);
  }

  checkPasswords (group: FormGroup) {
    let pass = group.controls['password']?.value;
    let confirmPass = group.controls['confirmPassword']?.value;
    return pass === confirmPass ? null : { notSame: true }
  }

}
