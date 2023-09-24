import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Case } from 'src/app/model/interfaces/case';
import { CaseService } from 'src/app/shared/services/case/case.service';

@Component({
  selector: 'app-case-view',
  templateUrl: './case-view.component.html',
  styleUrls: ['./case-view.component.css']
})
export class CaseViewComponent implements OnInit{

  cases: Case[] = [];

  loaded = false;

  constructor(private caseService: CaseService) {}

  ngOnInit(): void {
    this.getCases();
  }

  async getCases() {
    this.cases = await this.caseService.getCases();
    console.log(this.cases);
    this.loaded = true;
  }

}
