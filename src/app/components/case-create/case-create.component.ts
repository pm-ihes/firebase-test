import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CaseService } from 'src/app/shared/services/case/case.service';

@Component({
  selector: 'app-case-create',
  templateUrl: './case-create.component.html',
  styleUrls: ['./case-create.component.css']
})
export class CaseCreateComponent implements OnInit{

  caseForm!: FormGroup;

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  kzn: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private caseService: CaseService) {}

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
    this.router.navigate(['loading']);
    this.caseService.createCase(this.firstname, this.lastname, this.email, this.kzn);
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.kzn = '';
  }

}
