import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case-view-element',
  templateUrl: './case-view-element.component.html',
  styleUrls: ['./case-view-element.component.css']
})
export class CaseViewElementComponent {

  @Input()
  id: string = '';
  @Input()
  kzn: string = '';

}
