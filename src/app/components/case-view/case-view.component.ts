import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Case } from 'src/app/model/interfaces/case';
import { CaseService } from 'src/app/shared/services/case/case.service';

@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.css']
})
export class CaseViewComponent implements OnInit{

  cases!: any;

  constructor(private caseService: CaseService) {}

  ngOnInit(): void {
    this.cases = this.caseService.getCases();
    console.log(this.cases[0].data);
  }

}
