import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})
export class CreateCaseComponent implements OnInit{

  caseForm!: FormGroup;

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  kzn: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit (): void {

    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.kzn = '';
    
    this.caseForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      kzn: ['', Validators.required]
    });
  }

  createCase () {

  }

}
